import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MyCoursesPage() {
  const navigate = useNavigate();
  const myCourses = [
    ["TOEIC 550+", "TOEIC-550-01", 68],
    ["MOS Excel", "MOS-EXCEL-01", 42],
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      <Typography color="primary" fontWeight={900}>
        STUDENT
      </Typography>
      <Typography variant="h3" fontWeight={900}>
        Khóa học của tôi
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
        Dữ liệu thực tế sau này lấy từ Enrollment, Class, Session, Assessment và
        LearningProgress.
      </Typography>
      <Grid container spacing={3}>
        {myCourses.map(([name, code, progress]) => (
          <Grid item xs={12} md={6} key={code}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight={900}>
                {name}
              </Typography>
              <Typography color="text.secondary">
                {code} • Enrollment ACTIVE
              </Typography>
              <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ mt: 3, height: 9, borderRadius: 9 }}
              />
              <Typography sx={{ mt: 1 }}>{progress}% hoàn thành</Typography>
              <Button
                sx={{ mt: 2 }}
                variant="outlined"
                onClick={() => navigate("/profile")}
              >
                Xem hồ sơ
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
