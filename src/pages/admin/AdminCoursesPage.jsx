import React from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Chip,
} from "@mui/material";
import { courses } from "../../data/courses";

export default function AdminCoursesPage() {
  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      <Typography color="primary" fontWeight={900}>
        ADMIN • COURSE MANAGEMENT
      </Typography>
      <Typography variant="h3" fontWeight={900}>
        Quản lý khóa học
      </Typography>

      <Paper sx={{ mt: 4, overflow: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mã</TableCell>
              <TableCell>Tên khóa học</TableCell>
              <TableCell>Danh mục</TableCell>
              <TableCell>Thời lượng</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.code}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.category}</TableCell>
                <TableCell>{course.duration}</TableCell>
                <TableCell>
                  <Chip label="PUBLISHED" color="success" size="small" />
                </TableCell>
                <TableCell>
                  <Button>Sửa</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
