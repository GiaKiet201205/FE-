import React from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { useAuth } from "../auth/AuthContext";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <Container maxWidth="md" sx={{ py: 7 }}>
      <Typography variant="h3" fontWeight={900}>
        Hồ sơ cá nhân
      </Typography>
      <Paper sx={{ p: 4, mt: 4 }}>
        <Box sx={{ display: "grid", gap: 2.5 }}>
          <TextField label="Họ và tên" defaultValue={user?.fullName || ""} />
          <TextField label="Email" defaultValue={user?.email || ""} disabled />
          <TextField label="Vai trò" defaultValue={user?.role || ""} disabled />
          <TextField label="Số điện thoại" />
          <TextField
            label="Ngày sinh"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained">Lưu thay đổi</Button>
        </Box>
      </Paper>
    </Container>
  );
}
