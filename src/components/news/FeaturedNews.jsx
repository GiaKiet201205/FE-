import React from "react";
import { Box, Stack } from "@mui/material";
import NewsCard from "./NewsCard";

export default function FeaturedNews({ articles, onArticleClick }) {
    if (!articles.length) return null;

    return (
        <Box className="featured-news-layout">
            <NewsCard article={articles[0]} featured onClick={() => onArticleClick(articles[0].id)} />
            <Stack spacing={2} className="featured-news-side">
                {articles.slice(1, 3).map((article) => (
                    <NewsCard key={article.id} article={article} onClick={() => onArticleClick(article.id)} />
                ))}
            </Stack>
        </Box>
    );
}