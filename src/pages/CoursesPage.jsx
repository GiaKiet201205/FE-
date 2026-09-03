import React from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";
import { useMemo, useState } from "react";
import CourseCard from "../components/courses/CourseCard";
import { courses } from "../data/courses";

export default function CoursesPage() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(
    () =>
      courses.filter((c) => {
        const matchKeyword = c.name
          .toLowerCase()
          .includes(keyword.toLowerCase());
        const matchCategory = category === "all" || c.category === category;
        return matchKeyword && matchCategory;
      }),
    [keyword, category],
  );

  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      <Typography color="primary" fontWeight={900}>
        COURSE MANAGEMENT
      </Typography>
      <Typography variant="h3" fontWeight={900}>
        Danh sách khóa học
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
        Guest/Student có thể xem các khóa học được publish và tìm kiếm theo nhu
        cầu.
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
        <TextField
          label="Tìm kiếm khóa học"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          sx={{ minWidth: 280 }}
        />
        <TextField
          select
          label="Danh mục"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ minWidth: 220 }}
        >
          <MenuItem value="all">Tất cả</MenuItem>
          <MenuItem value="Tiếng Anh">Tiếng Anh</MenuItem>
          <MenuItem value="Tin học quốc tế">Tin học quốc tế</MenuItem>
        </TextField>
      </Box>

      <Grid container spacing={3}>
        {filtered.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <CourseCard course={course} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
