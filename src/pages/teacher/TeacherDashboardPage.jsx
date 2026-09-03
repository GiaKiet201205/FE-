import React from "react";
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { useAuth } from "../../auth/AuthContext";

const metrics = [
  ["04", "Lớp đang phụ trách"],
  ["86", "Học viên"],
  ["92%", "Attendance"],
  ["12", "Bài cần chấm"],
];

export default function TeacherDashboardPage() {
  const { user } = useAuth();

  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      <Typography color="primary" fontWeight={900}>
        TEACHER
      </Typography>
      <Typography variant="h3" fontWeight={900} sx={{ mt: 0.5 }}>
        Xin chào, {user?.fullName}
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
        Quản lý lớp học, điểm danh và đánh giá học viên.
      </Typography>

      <Grid container spacing={3}>
        {metrics.map(([value, label]) => (
          <Grid item xs={12} sm={6} md={3} key={label}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h4" fontWeight={900}>
                {value}
              </Typography>
              <Typography color="text.secondary">{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" fontWeight={900}>
          Lớp học hôm nay
        </Typography>
        <Box sx={{ mt: 2, display: "grid", gap: 1.5 }}>
          <Box className="admin-action">
            TOEIC 550+ • Tối thứ 2-4-6 • Phòng A203
          </Box>
          <Box className="admin-action">
            TOEIC 700+ • Tối thứ 3-5-7 • Phòng B105
          </Box>
        </Box>
        <Button variant="contained" sx={{ mt: 3 }}>
          Quản lý lớp học
        </Button>
      </Paper>
    </Container>
  );
}
