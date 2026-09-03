import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box className="hero">
      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography sx={{ color: "#e31e24", fontWeight: 900, mb: 1 }}>
              IIG VIỆT NAM • ĐÀO TẠO
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 900,
                fontSize: { xs: 40, md: 58 },
                lineHeight: 1.08,
              }}
            >
              Học đúng lộ trình.
              <br />
              <span className="hero-accent">Chạm đúng mục tiêu.</span>
            </Typography>
            <Typography
              sx={{ mt: 3, fontSize: 18, color: "#50647a", maxWidth: 650 }}
            >
              Khám phá các khóa học tiếng Anh và kỹ năng quốc tế, lựa chọn lớp
              phù hợp và theo dõi hành trình học tập trên một nền tảng.
            </Typography>
            <Box sx={{ mt: 4, display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Button
                size="large"
                variant="contained"
                onClick={() => navigate("/courses")}
              >
                Xem khóa học
              </Button>
              <Button
                size="large"
                variant="outlined"
                onClick={() => navigate("/schedule")}
              >
                Xem lịch khai giảng
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box className="hero-card">
              <Typography variant="h5" fontWeight={900}>
                Tìm khóa học phù hợp
              </Typography>
              <Typography sx={{ color: "#64748b", mt: 1 }}>
                Chọn mục tiêu, kỹ năng và hình thức học.
              </Typography>
              <Box sx={{ mt: 3, display: "grid", gap: 1.5 }}>
                <Box className="hero-mini-card">
                  🎯 TOEIC 450+ / 550+ / 700+
                </Box>
                <Box className="hero-mini-card">💻 Lớp học trực tuyến</Box>
                <Box className="hero-mini-card">📚 Học liệu & thi thử</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
