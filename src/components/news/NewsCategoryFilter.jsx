import React from "react";
import { Box, Button } from "@mui/material";

export default function NewsCategoryFilter({ categories, activeCategory, onChange }) {
    return (
        <Box className="news-category-filter" role="tablist" aria-label="Lọc tin tức theo danh mục">
            {categories.map((category) => (
                <Button
                    key={category}
                    role="tab"
                    aria-selected={activeCategory === category}
                    className={activeCategory === category ? "active" : ""}
                    onClick={() => onChange(category)}
                >
                    {category}
                </Button>
            ))}
        </Box>
    );
}