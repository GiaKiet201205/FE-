import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#102a43", color: "#fff", mt: 8, py: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={900}>
              IIG TRAINING CENTER
            </Typography>
            <Typography sx={{ mt: 2, color: "#c9d6e3" }}>
              Nền tảng quản lý và đào tạo trung tâm: khóa học, lớp học, lịch
              học, đăng ký, điểm danh, đánh giá và tiến độ học tập.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography fontWeight={800}>Liên kết</Typography>
            <Typography sx={{ mt: 1, color: "#c9d6e3" }}>Khóa học</Typography>
            <Typography sx={{ color: "#c9d6e3" }}>Lịch khai giảng</Typography>
            <Typography sx={{ color: "#c9d6e3" }}>Thi thử</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography fontWeight={800}>Liên hệ</Typography>
            <Typography sx={{ mt: 1, color: "#c9d6e3" }}>
              Hotline: 1900 636 929
            </Typography>
            <Typography sx={{ color: "#c9d6e3" }}>
              Email: info@iigvietnam.edu.vn
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
