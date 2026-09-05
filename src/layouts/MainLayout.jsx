import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Container, Box, Chip } from "@mui/material";
import { SchoolOutlined } from "@mui/icons-material";
import Footer from "../components/common/Footer";
import { useAuth } from "../auth/AuthContext";

export default function MainLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  const dashboardPath =
    user?.role === "ADMIN"
      ? "/admin"
      : user?.role === "TEACHER"
        ? "/teacher"
        : "/my-courses";

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#fff",
          color: "#16324f",
          borderBottom: "1px solid #e8edf3",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ gap: 2, minHeight: 76 }}>
            <Box
              onClick={() => navigate("/")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                mr: 3,
              }}
            >
              <SchoolOutlined sx={{ color: "#005baa", fontSize: 38 }} />
              <Box
                component="span"
                sx={{ fontSize: 22, fontWeight: 900, color: "#005baa" }}
              >
                IIG
              </Box>
              <Box
                component="span"
                sx={{ fontSize: 13, fontWeight: 700, lineHeight: 1 }}
              >
                TRAINING
                <br />
                CENTER
              </Box>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, flex: 1 }}>
              <Button onClick={() => navigate("/")}>Trang chủ</Button>
              <Button onClick={() => navigate("/courses")}>Khóa học</Button>
              <Button onClick={() => navigate("/schedule")}>
                Lịch khai giảng
              </Button>
              <Button onClick={() => navigate("/about")}>Về IIG</Button>
              <Button onClick={() => navigate("/news")}>Tin tức</Button>
            </Box>

            {user ? (
              <>
                <Button onClick={() => navigate(dashboardPath)}>
                  {user.fullName}
                </Button>
                <Chip
                  label={user.role}
                  size="small"
                  color={
                    user.role === "ADMIN"
                      ? "error"
                      : user.role === "TEACHER"
                        ? "warning"
                        : "primary"
                  }
                />
                <Button variant="outlined" color="error" onClick={handleLogout}>
                  Đăng xuất
                </Button>
              </>
            ) : (
              <>
                <Button variant="outlined" onClick={() => navigate("/login")}>
                  Đăng nhập
                </Button>
                <Button
                  variant="contained"
                  onClick={() => navigate("/register")}
                >
                  Đăng ký
                </Button>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}
