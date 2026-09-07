import React, { useMemo, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FeaturedNews from "../components/news/FeaturedNews";
import NewsCard from "../components/news/NewsCard";
import NewsCategoryFilter from "../components/news/NewsCategoryFilter";
import Pagination from "../components/news/Pagination";
import { newsCategories, newsData } from "../data/newsData";
import "../styles/NewsPage.css";

const ARTICLES_PER_PAGE = 6;

export default function NewsPage() {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("Tất cả");
    const [page, setPage] = useState(1);

    const filteredArticles = useMemo(
        () => activeCategory === "Tất cả"
            ? newsData
            : newsData.filter((article) => article.category === activeCategory),
        [activeCategory],
    );
    const featuredArticles = filteredArticles.filter((article) => article.featured).slice(0, 3);
    const regularArticles = filteredArticles.filter((article) => !article.featured);
    const totalPages = Math.max(1, Math.ceil(regularArticles.length / ARTICLES_PER_PAGE));
    const paginatedArticles = regularArticles.slice((page - 1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);
    const handleCategoryChange = (category) => { setActiveCategory(category); setPage(1); };
    const handleArticleClick = (id) => navigate(`/news/${id}`);

    return (
        <Box className="news-page">
            <Box component="header" className="news-banner">
                <Container maxWidth="xl" className="news-banner-content">
                    <Typography className="news-breadcrumb">Trang chủ&nbsp; / &nbsp;<span>Tin tức</span></Typography>
                    <Typography variant="h2" fontWeight={900}>TIN TỨC</Typography>
                    <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 680 }}>
                        Cập nhật những thông tin mới nhất về đào tạo, sự kiện và các hoạt động của IIG Training Center.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="xl">
                <Box component="section" className="news-section" aria-labelledby="featured-news-title">
                    <Box className="news-section-heading">
                        <Typography className="news-section-kicker">CẬP NHẬT MỖI NGÀY</Typography>
                        <Typography id="featured-news-title" variant="h4" className="news-section-title">TIN NỔI BẬT</Typography>
                    </Box>
                    <FeaturedNews articles={featuredArticles} onArticleClick={handleArticleClick} />
                </Box>

                <Box component="section" className="news-section" aria-labelledby="other-news-title">
                    <Box className="news-section-heading">
                        <Typography className="news-section-kicker">KHÁM PHÁ THEO CHỦ ĐỀ</Typography>
                        <Typography id="other-news-title" variant="h4" className="news-section-title">CÁC NHÓM TIN</Typography>
                    </Box>
                    <NewsCategoryFilter categories={newsCategories} activeCategory={activeCategory} onChange={handleCategoryChange} />
                    <Typography variant="h5" className="news-section-title" sx={{ mb: 3 }}>TIN BÀI KHÁC</Typography>
                    {paginatedArticles.length ? (
                        <Box className="news-grid">
                            {paginatedArticles.map((article) => <NewsCard key={article.id} article={article} onClick={() => handleArticleClick(article.id)} />)}
                        </Box>
                    ) : (
                        <Box className="news-empty-state">Chưa có bài viết trong danh mục này.</Box>
                    )}
                    {regularArticles.length > ARTICLES_PER_PAGE && <Pagination page={page} totalPages={totalPages} onChange={setPage} />}
                </Box>
            </Container>
        </Box>
    );
}
