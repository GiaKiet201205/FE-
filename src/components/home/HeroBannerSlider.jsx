import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { newsData } from "../../data/newsData";
import "../../styles/HeroBannerSlider.css";

const AUTOPLAY_DELAY = 5000;

function parseDate(date) {
    const [day, month, year] = date.split("/").map(Number);
    return new Date(year, month - 1, day).getTime();
}

export default function HeroBannerSlider() {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(null);
    const slides = useMemo(() => {
        const featured = newsData
            .filter((article) => article.featured)
            .sort((first, second) => parseDate(second.date) - parseDate(first.date));
        const fallback = newsData
            .filter((article) => !article.featured)
            .sort((first, second) => parseDate(second.date) - parseDate(first.date));

        return [...featured, ...fallback].slice(0, 4);
    }, []);

    const goToSlide = (index) => {
        setActiveIndex((index + slides.length) % slides.length);
    };

    useEffect(() => {
        if (isPaused || slides.length < 2) return undefined;
        const timer = window.setInterval(() => {
            setActiveIndex((index) => (index + 1) % slides.length);
        }, AUTOPLAY_DELAY);
        return () => window.clearInterval(timer);
    }, [activeIndex, isPaused, slides.length]);

    const openArticle = (articleId) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        navigate(`/news/${articleId}`);
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(distance) > 45) goToSlide(activeIndex + (distance < 0 ? 1 : -1));
        touchStartX.current = null;
    };

    if (!slides.length) return null;

    return (
        <Box
            className="hero-banner-slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            aria-label="Các chương trình nổi bật"
        >
            {slides.map((slide, index) => (
                <Box
                    key={slide.id}
                    className={`hero-banner-slide ${index === activeIndex ? "active" : ""}`}
                    sx={{ backgroundImage: `url(${slide.image})` }}
                    aria-hidden={index !== activeIndex}
                    role="link"
                    tabIndex={index === activeIndex ? 0 : -1}
                    onClick={() => openArticle(slide.id)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") openArticle(slide.id);
                    }}
                >
                    <Box className="hero-banner-overlay" />
                    <Container maxWidth="xl" className="hero-banner-content">
                        <Box className="hero-banner-copy">
                            <Typography className="hero-banner-eyebrow">{slide.category}</Typography>
                            <Typography variant="h1" className="hero-banner-title">{slide.title}</Typography>
                            <Typography className="hero-banner-date">{slide.date}</Typography>
                        </Box>
                    </Container>
                </Box>
            ))}
            <IconButton className="hero-banner-control previous" aria-label="Slide trước" onClick={() => goToSlide(activeIndex - 1)}>
                <ArrowBack />
            </IconButton>
            <IconButton className="hero-banner-control next" aria-label="Slide tiếp theo" onClick={() => goToSlide(activeIndex + 1)}>
                <ArrowForward />
            </IconButton>
            <Box className="hero-banner-dots" role="tablist" aria-label="Chọn slide">
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        type="button"
                        className={index === activeIndex ? "active" : ""}
                        aria-label={`Hiển thị slide ${index + 1}`}
                        aria-selected={index === activeIndex}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </Box>
        </Box>
    );
}