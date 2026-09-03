import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";

const metrics = [
  ["1,248", "Học viên"],
  ["32", "Khóa học"],
  ["58", "Lớp đang mở"],
  ["91%", "Attendance trung bình"],
];

export default function AdminDashboardPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      <Typography color="primary" fontWeight={900}>
        ADMIN
      </Typography>
      <Typography variant="h3" fontWeight={900}>
        Dashboard quản trị
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
        Đây là khung dashboard để phát triển tiếp các module Admin theo RBAC.
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
          Quick actions
        </Typography>
        <Box sx={{ mt: 2, display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Box className="admin-action">Quản lý Course</Box>
          <Box className="admin-action">Quản lý Class</Box>
          <Box className="admin-action">Quản lý User / Role</Box>
          <Box className="admin-action">Reports & Analytics</Box>
        </Box>
      </Paper>
    </Container>
  );
}
