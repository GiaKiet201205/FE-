import React from "react";
import { AccessTime, CalendarMonth, Repeat } from "@mui/icons-material";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

export default function EnrollConfirmModal({ classItem, open, onClose, onConfirm }) {
    if (!classItem) return null;

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle className="enroll-dialog-title">Xác nhận giữ chỗ</DialogTitle>
            <DialogContent>
                <Typography color="text.secondary">Bạn đang đăng ký giữ chỗ cho lớp:</Typography>
                <Typography variant="h5" fontWeight={900} sx={{ mt: 1, color: "#16324f" }}>{classItem.course}</Typography>
                <Typography className="enroll-dialog-code">{classItem.id}</Typography>
                <Box className="enroll-dialog-details">
                    <span><CalendarMonth /> {classItem.startDate}</span>
                    <span><Repeat /> {classItem.weekday}</span>
                    <span><AccessTime /> {classItem.time}</span>
                </Box>
                <Typography className="enroll-dialog-notice">Chỗ học sẽ được giữ trong <strong>15 phút</strong>. Vui lòng hoàn tất ký hợp đồng và thanh toán để kích hoạt đăng ký chính thức.</Typography>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 1 }}>
                <Button onClick={onClose}>Để sau</Button>
                <Button variant="contained" onClick={onConfirm}>Xác nhận giữ chỗ</Button>
            </DialogActions>
        </Dialog>
    );
}
