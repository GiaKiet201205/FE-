import React from "react";
import { AccessTime, CalendarMonth, LocationOn, Repeat, School } from "@mui/icons-material";
import { Box, Button, Chip, LinearProgress, Typography } from "@mui/material";

export function getAvailabilityState(classItem) {
    if (classItem.slotAvailable <= 0) return "full";
    if (classItem.slotAvailable / classItem.maxSlot <= 0.5) return "almost-full";
    return "available";
}

export default function ClassScheduleCard({ classItem, onEnroll }) {
    const availability = getAvailabilityState(classItem);
    const filledPercent = Math.round(((classItem.maxSlot - classItem.slotAvailable) / classItem.maxSlot) * 100);
    const isClosed = classItem.status !== "OPEN" || availability === "full";

    return (
        <Box className={`schedule-card schedule-card-${classItem.accent}`}>
            <Box className="schedule-card-accent" />
            <Box className="schedule-card-header">
                <Box><Typography className="schedule-card-course">{classItem.course}</Typography><Typography className="schedule-card-code">{classItem.id}</Typography></Box>
                <Chip label={classItem.format} size="small" className={`schedule-format-chip ${classItem.format.toLowerCase()}`} />
            </Box>
            <Box className="schedule-card-status-row">
                <Chip label={classItem.status === "OPEN" ? "Đang mở đăng ký" : "Đã đóng"} size="small" className={`schedule-status-chip ${classItem.status.toLowerCase()}`} />
                {availability === "almost-full" && <Typography className="schedule-hot-label">Sắp đầy</Typography>}
            </Box>
            <Box className="schedule-card-details">
                <Box><CalendarMonth /><span><strong>Khai giảng</strong>{classItem.startDate}</span></Box>
                <Box><Repeat /><span><strong>Lịch học</strong>{classItem.weekday}</span></Box>
                <Box><AccessTime /><span><strong>Thời gian</strong>{classItem.time}</span></Box>
                <Box><LocationOn /><span><strong>Địa điểm</strong>{classItem.location}</span></Box>
            </Box>
            <Box className="schedule-card-instructor"><School /> Giảng viên: <strong>{classItem.instructor}</strong></Box>
            <Box className="schedule-capacity">
                <Box className="schedule-capacity-label"><Typography>Chỗ đã đăng ký</Typography><strong>{classItem.maxSlot - classItem.slotAvailable}/{classItem.maxSlot}</strong></Box>
                <LinearProgress variant="determinate" value={filledPercent} className={`schedule-progress ${availability}`} />
                <Typography className={`schedule-available-text ${availability}`}>{availability === "full" ? "Đã hết chỗ" : `${classItem.slotAvailable} chỗ trống`}</Typography>
            </Box>
            <Button fullWidth variant="contained" disabled={isClosed} className="schedule-enroll-button" onClick={() => onEnroll(classItem)}>{isClosed ? "Đã đầy chỗ" : "Đăng ký giữ chỗ"}</Button>
        </Box>
    );
}
