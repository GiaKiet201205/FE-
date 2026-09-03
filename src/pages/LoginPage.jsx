import React from "react";
import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { DEMO_USERS, useAuth } from "../auth/AuthContext";

function getRolePath(role) {
  if (role === "ADMIN") return "/admin";
  if (role === "TEACHER") return "/teacher";
  return "/my-courses";
}

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (user) {
    return (
      <Container maxWidth="sm" sx={{ py: 10 }}>
        <Paper sx={{ p: { xs: 3, md: 5 }, textAlign: "center" }}>
          <Typography variant="h4" fontWeight={900}>
            Bạn đã đăng nhập
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {user.fullName} • {user.role}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={() => navigate(getRolePath(user.role))}
          >
            Đi tới trang của tôi
          </Button>
        </Paper>
      </Container>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    const result = login(email, password);

    if (!result.success) {
      setError(result.message);
      return;
    }

    const from = location.state?.from?.pathname;
    navigate(from || getRolePath(result.user.role), { replace: true });
  };

  const fillDemo = (demoUser) => {
    setEmail(demoUser.email);
    setPassword(demoUser.password);
    setError("");
  };

  return (
    <Container maxWidth="sm" sx={{ py: 7 }}>
      <Paper sx={{ p: { xs: 3, md: 5 } }}>
        <Typography variant="h4" fontWeight={900}>
          Đăng nhập
        </Typography>
        <Typography color="text.secondary" sx={{ mt: 1 }}>
          Đăng nhập theo tài khoản Student, Teacher hoặc Admin.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mt: 3 }}>
            {error}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "grid", gap: 2.5, mt: 4 }}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Mật khẩu"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" size="large">
            Đăng nhập
          </Button>
          <Button onClick={() => navigate("/register")}>
            Chưa có tài khoản? Đăng ký
          </Button>
        </Box>

        <Divider sx={{ my: 4 }}>TÀI KHOẢN DEMO</Divider>

        <Box sx={{ display: "grid", gap: 1.5 }}>
          {DEMO_USERS.map((demoUser) => (
            <Paper
              key={demoUser.email}
              variant="outlined"
              onClick={() => fillDemo(demoUser)}
              sx={{
                p: 2,
                cursor: "pointer",
                transition: "0.2s",
                "&:hover": { borderColor: "primary.main", bgcolor: "#f8fbff" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 2,
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography fontWeight={800}>{demoUser.email}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Mật khẩu: {demoUser.password}
                  </Typography>
                </Box>
                <Chip
                  label={demoUser.role}
                  color={
                    demoUser.role === "ADMIN"
                      ? "error"
                      : demoUser.role === "TEACHER"
                        ? "warning"
                        : "primary"
                  }
                  size="small"
                />
              </Box>
            </Paper>
          ))}
        </Box>

        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: "block", mt: 2 }}
        >
          Đây là tài khoản demo frontend. Khi kết nối backend, phần này sẽ được
          thay bằng API/JWT.
        </Typography>
      </Paper>
    </Container>
  );
}
