import React from "react";
import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RelatedNewsList({ title, articles, footerLabel, footerPath = "/news" }) {
    const navigate = useNavigate();

    return (
        <Box className="detail-sidebar-section">
            <Typography className="detail-sidebar-title">{title}</Typography>
            <Box className="detail-sidebar-list">
                {articles.map((article) => (
                    <Box
                        key={article.id}
                        className="detail-sidebar-item"
                        role="link"
                        tabIndex={0}
                        onClick={() => navigate(`/news/${article.id}`)}
                        onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") navigate(`/news/${article.id}`);
                        }}
                    >
                        <Box component="img" src={article.image} alt="" className="detail-sidebar-image" />
                        <Box className="detail-sidebar-copy">
                            <Typography variant="caption" color="text.secondary">{article.date}</Typography>
                            <Typography className="detail-sidebar-item-title">{article.title}</Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
            {footerLabel && (
                <Button className="detail-sidebar-more" endIcon={<ArrowForward />} onClick={() => navigate(footerPath)}>
                    {footerLabel}
                </Button>
            )}
        </Box>
    );
}