import React from "react";
import {
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <Card className="course-card">
      <Box className="course-image">
        <Typography variant="h5" fontWeight={900}>
          {course.code}
        </Typography>
      </Box>
      <CardContent sx={{ p: 3 }}>
        <Chip label={course.category} size="small" color="primary" />
        <Typography variant="h6" fontWeight={900} sx={{ mt: 1.5 }}>
          {course.name}
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1, minHeight: 48 }}>
          {course.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
            color: "#64748b",
          }}
        >
          <span>{course.duration}</span>
          <span>{course.format}</span>
        </Box>
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => navigate(`/courses/${course.id}`)}
        >
          Xem chi tiết
        </Button>
      </CardContent>
    </Card>
  );
}
