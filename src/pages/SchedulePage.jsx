import React from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const classes = [
  [
    "TOEIC-550-01",
    "TOEIC 550+",
    "18/09/2026",
    "T2 - T4 - T6",
    "18:30 - 20:00",
    4,
  ],
  ["TOEIC-700-02", "TOEIC 700+", "21/09/2026", "T3 - T5", "19:00 - 20:30", 7],
  ["MOS-EXCEL-01", "MOS Excel", "25/09/2026", "T7 - CN", "09:00 - 11:00", 10],
];

export default function SchedulePage() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" sx={{ py: 7 }}>
      <Typography color="primary" fontWeight={900}>
        CLASS & SCHEDULE
      </Typography>
      <Typography variant="h3" fontWeight={900}>
        Lịch khai giảng
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb: 4 }}>
        Student chọn trực tiếp Class còn chỗ. Sau đó giữ chỗ, ký Contract và
        thanh toán.
      </Typography>

      <Paper sx={{ overflow: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mã lớp</TableCell>
              <TableCell>Khóa học</TableCell>
              <TableCell>Khai giảng</TableCell>
              <TableCell>Lịch học</TableCell>
              <TableCell>Thời gian</TableCell>
              <TableCell>Chỗ trống</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {classes.map((row) => (
              <TableRow key={row[0]}>
                <TableCell fontWeight={700}>{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
                <TableCell>{row[2]}</TableCell>
                <TableCell>{row[3]}</TableCell>
                <TableCell>{row[4]}</TableCell>
                <TableCell>
                  <Chip label={`${row[5]} chỗ`} color="success" size="small" />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/register")}
                  >
                    Đăng ký
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
