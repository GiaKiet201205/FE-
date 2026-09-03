import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";

const stats = [
  ["25+", "năm hoạt động"],
  ["150K+", "học viên"],
  ["95%", "học viên hài lòng"],
  ["900+", "giáo viên chuyên môn cao"],
];

export default function StatsSection() {
  return (
    <Container maxWidth="xl" sx={{ mt: -3, position: "relative" }}>
      <Grid container spacing={2}>
        {stats.map(([number, label]) => (
          <Grid item xs={6} md={3} key={label}>
            <Paper className="stat-card" elevation={0}>
              <Typography variant="h4" fontWeight={900} color="primary">
                {number}
              </Typography>
              <Typography color="text.secondary">{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
