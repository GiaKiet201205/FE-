import React from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Button } from "@mui/material";

export default function Pagination({ page, totalPages, onChange }) {
    return (
        <Box className="news-pagination" aria-label="Phân trang tin tức">
            <Button startIcon={<ChevronLeft />} disabled={page === 1} onClick={() => onChange(page - 1)}>
                Trước
            </Button>
            <Box className="news-page-numbers">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <IconButton
                        key={pageNumber}
                        aria-label={`Trang ${pageNumber}`}
                        aria-current={page === pageNumber ? "page" : undefined}
                        className={page === pageNumber ? "active" : ""}
                        onClick={() => onChange(pageNumber)}
                    >
                        {pageNumber}
                    </IconButton>
                ))}
            </Box>
            <Button endIcon={<ChevronRight />} disabled={page === totalPages} onClick={() => onChange(page + 1)}>
                Tiếp
            </Button>
        </Box>
    );
}