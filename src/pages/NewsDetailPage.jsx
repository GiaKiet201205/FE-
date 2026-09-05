import React, { useEffect, useMemo, useState } from "react";
import { ArrowBack, CalendarToday, ContentCopy, Facebook, Link as LinkIcon, Twitter } from "@mui/icons-material";
import { Box, Button, Chip, Container, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import RelatedNewsList from "../components/news/RelatedNewsList";
import RelatedNewsHorizontalList from "../components/news/RelatedNewsHorizontalList";
import { newsData } from "../data/newsData";
import "../styles/NewsDetailPage.css";

function parseDate(date) {
    const [day, month, year] = date.split("/").map(Number);
    return new Date(year, month - 1, day).getTime();
}

export default function NewsDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const article = newsData.find((item) => String(item.id) === id);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    const { relatedArticles, latestArticles, bottomRelatedArticles } = useMemo(() => {
        if (!article) return { relatedArticles: [], latestArticles: [] };

        const related = newsData
            .filter((item) => item.id !== article.id && item.category === article.category)
            .slice(0, 4);
        const excludedIds = new Set([article.id, ...related.map((item) => item.id)]);
        const latest = [...newsData]
            .sort((first, second) => parseDate(second.date) - parseDate(first.date))
            .filter((item) => !excludedIds.has(item.id))
            .slice(0, 4);

        const bottomRelated = [
            ...related,
            ...[...newsData]
                .sort((first, second) => parseDate(second.date) - parseDate(first.date))
                .filter((item) => item.id !== article.id && !related.some((relatedItem) => relatedItem.id === item.id)),
        ].slice(0, 4);

        return { relatedArticles: related, latestArticles: latest, bottomRelatedArticles: bottomRelated };
    }, [article]);

    const articleUrl = window.location.href;
    const openShareWindow = (url) => window.open(url, "_blank", "noopener,noreferrer");
    const copyArticleLink = async () => {
        try {
            await navigator.clipboard.writeText(articleUrl);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
        } catch {
            setCopied(false);
        }
    };

    if (!article) {
        return (
            <Box className="news-detail-page">
                <Container maxWidth="xl" className="news-detail-empty">
                    <Typography variant="h3" fontWeight={900}>Không tìm thấy bài viết</Typography>
                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                        Bài viết bạn đang tìm kiếm không tồn tại hoặc đã được gỡ khỏi danh sách.
                    </Typography>
                    <Button component={Link} to="/news" variant="contained" startIcon={<ArrowBack />} sx={{ mt: 3 }}>
                        Quay lại Tin tức
                    </Button>
                </Container>
            </Box>
        );
    }

    return (
        <Box className="news-detail-page">
            <Box component="header" className="news-detail-banner">
                <Container maxWidth="xl">
                    <Typography className="news-detail-breadcrumb">
                        <Link to="/">Trang chủ</Link><span>/</span><Link to="/news">Tin tức</Link><span>/</span><strong>{article.title}</strong>
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="xl" className="news-detail-layout">
                <main className="news-detail-main">
                    <Typography className="news-detail-date" sx={{ display: "flex", alignItems: "center", gap: 0.7 }}>
                        <CalendarToday sx={{ fontSize: 15 }} /> {article.date}
                    </Typography>
                    <Typography variant="h1" className="news-detail-title">{article.title}</Typography>
                    <Chip label={article.category} className="news-detail-category" />
                    <Typography className="news-detail-sapo">{article.description}</Typography>
                    <Box component="img" src={article.image} alt={article.title} className="news-detail-cover" />
                    <article className="news-detail-content">
                        {article.content.map((block, index) => {
                            if (typeof block === "string") {
                                return <Typography component="p" key={`${article.id}-paragraph-${index}`}>{block}</Typography>;
                            }
                            if (block.type === "image") {
                                return (
                                    <Box className="news-detail-inline-media" key={`${article.id}-image-${index}`}>
                                        <Box component="img" src={block.src} alt={block.alt} className="news-detail-inline-image" />
                                        <Typography component="figcaption">{block.caption}</Typography>
                                    </Box>
                                );
                            }
                            if (block.type === "list") {
                                return (
                                    <Box component="ul" className="news-detail-content-list" key={`${article.id}-list-${index}`}>
                                        {block.items.map((item) => <Typography component="li" key={item}>{item}</Typography>)}
                                    </Box>
                                );
                            }
                            return null;
                        })}
                    </article>
                    <Box className="news-detail-engagement">
                        <Box className="news-detail-share-row">
                            <Typography className="news-detail-engagement-label">Chia sẻ</Typography>
                            <Box className="news-detail-share-actions">
                                <Button aria-label="Chia sẻ lên Facebook" className="news-detail-share-button facebook" onClick={() => openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`)}><Facebook /></Button>
                                <Button aria-label="Chia sẻ lên Twitter" className="news-detail-share-button twitter" onClick={() => openShareWindow(`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(article.title)}`)}><Twitter /></Button>
                                <Button aria-label="Sao chép đường dẫn" className="news-detail-share-button copy" onClick={copyArticleLink}><ContentCopy /></Button>
                                {copied && <Typography className="news-detail-copy-feedback">Đã sao chép</Typography>}
                            </Box>
                        </Box>
                        {article.tags?.length > 0 && (
                            <Box className="news-detail-tags-row">
                                <Typography className="news-detail-engagement-label">Tags</Typography>
                                <Box className="news-detail-tags">
                                    {article.tags.map((tag) => <Chip key={tag} label={tag} onClick={() => navigate("/news")} className="news-detail-tag" />)}
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <RelatedNewsHorizontalList articles={bottomRelatedArticles} />
                    <Button component={Link} to="/news" startIcon={<ArrowBack />} className="news-detail-back">
                        Quay lại Tin tức
                    </Button>
                </main>

                <aside className="news-detail-sidebar">
                    <RelatedNewsList title="CÙNG CHUYÊN MỤC" articles={relatedArticles} footerLabel="Xem thêm" />
                    <RelatedNewsList title="TIN MỚI NHẤT" articles={latestArticles} />
                </aside>
            </Container>
        </Box>
    );
}