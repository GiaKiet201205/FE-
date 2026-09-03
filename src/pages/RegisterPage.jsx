import React from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper sx={{ p: { xs: 3, md: 5 } }}>
        <Typography variant="h4" fontWeight={900}>
          Tạo tài khoản
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Theo AUTH-001, email phải duy nhất và tài khoản cần xác thực email.
        </Typography>
        <Box sx={{ display: "grid", gap: 2.5, mt: 4 }}>
          <TextField label="Họ và tên" />
          <TextField label="Email" type="email" />
          <TextField label="Mật khẩu" type="password" />
          <TextField label="Xác nhận mật khẩu" type="password" />
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/login")}
          >
            Đăng ký
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
