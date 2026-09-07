import React from "react";
import { ArrowForward, CalendarToday } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Chip, Typography } from "@mui/material";

export default function NewsCard({ article, onClick, featured = false }) {
    return (
        <Card className={`news-card${featured ? " news-card-featured" : ""}`}>
            <Box className="news-card-image-wrap">
                <Box component="img" src={article.image} alt={article.title} className="news-card-image" />
            </Box>
            <CardContent className="news-card-content">
                <Box className="news-card-meta">
                    <Chip label={article.category} size="small" className="news-category-chip" />
                    <Typography variant="caption" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                        <CalendarToday sx={{ fontSize: 13 }} /> {article.date}
                    </Typography>
                </Box>
                <Typography variant={featured ? "h5" : "h6"} className="news-card-title">
                    {article.title}
                </Typography>
                <Typography color="text.secondary" className="news-card-description">
                    {article.description}
                </Typography>
                <Button className="news-detail-link" onClick={onClick} endIcon={<ArrowForward />}>
                    Xem chi tiết
                </Button>
            </CardContent>
        </Card>
    );
}