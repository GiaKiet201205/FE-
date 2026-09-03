import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Grid,
  Paper,
} from "@mui/material";
import { courses } from "../data/courses";

export default function CourseDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  if (!course)
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Không tìm thấy khóa học.</Typography>
      </Container>
    );

  return (
    <Container maxWidth="lg" sx={{ py: 7 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Chip label={course.category} color="primary" />
          <Typography variant="h3" fontWeight={900} sx={{ mt: 2 }}>
            {course.name}
          </Typography>
          <Typography sx={{ mt: 2, color: "#526579", fontSize: 18 }}>
            {course.description}
          </Typography>

          <Box sx={{ mt: 5 }}>
            <Typography variant="h5" fontWeight={900}>
              Nội dung khóa học
            </Typography>
            {[
              "Ôn tập kiến thức nền tảng",
              "Luyện kỹ năng theo từng Part",
              "Luyện đề chuyên sâu",
              "Thi thử như thi thật",
            ].map((item) => (
              <Box
                key={item}
                sx={{ py: 1.5, borderBottom: "1px solid #e8edf3" }}
              >
                ✓ {item}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, position: "sticky", top: 100 }}>
            <Typography variant="h5" fontWeight={900}>
              {course.price}
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              {course.duration} • {course.format}
            </Typography>
            <Button
              fullWidth
              size="large"
              variant="contained"
              sx={{ mt: 3 }}
              onClick={() => navigate("/schedule")}
            >
              Chọn lớp học
            </Button>
            <Button fullWidth size="large" variant="outlined" sx={{ mt: 1.5 }}>
              Nhận tư vấn
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
