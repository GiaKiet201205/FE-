import React from "react";
import { ArrowForward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function RelatedNewsHorizontalList({ articles, title = "TIN TỨC LIÊN QUAN" }) {
    return (
        <Box className="detail-horizontal-related">
            <Box className="detail-horizontal-heading">
                <Typography className="detail-horizontal-title">{title}</Typography>
                <ArrowForward className="detail-horizontal-heading-icon" />
            </Box>
            <Box className="detail-horizontal-list">
                {articles.map((article) => (
                    <Link key={article.id} to={`/news/${article.id}`} className="detail-horizontal-item">
                        <Box component="img" src={article.image} alt="" className="detail-horizontal-image" />
                        <Box className="detail-horizontal-copy">
                            <Typography variant="caption" color="text.secondary">{article.date}</Typography>
                            <Typography className="detail-horizontal-item-title">{article.title}</Typography>
                        </Box>
                    </Link>
                ))}
            </Box>
        </Box>
    );
}