import React, { useMemo, useState } from "react";
import { EventAvailable, FilterAlt, Groups } from "@mui/icons-material";
import { Alert, Box, Container, Snackbar, Typography } from "@mui/material";
import { classSchedules } from "../data/classSchedules";
import ClassScheduleCard, { getAvailabilityState } from "../components/schedule/ClassScheduleCard";
import EnrollConfirmModal from "../components/schedule/EnrollConfirmModal";
import ScheduleFilterBar from "../components/schedule/ScheduleFilterBar";
import "../styles/SchedulePage.css";

const initialFilters = { keyword: "", course: "all", format: "all", availability: "all" };

export default function SchedulePage() {
    const [filters, setFilters] = useState(initialFilters);
    const [scheduleItems, setScheduleItems] = useState(classSchedules);
    const [selectedClass, setSelectedClass] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const options = useMemo(() => ({
        courses: [...new Set(scheduleItems.map((item) => item.course))],
    }), [scheduleItems]);

    const filteredClasses = useMemo(() => scheduleItems.filter((classItem) => {
        const searchable = `${classItem.id} ${classItem.course}`.toLowerCase();
        const matchesKeyword = searchable.includes(filters.keyword.trim().toLowerCase());
        const matchesCourse = filters.course === "all" || classItem.course === filters.course;
        const matchesFormat = filters.format === "all" || classItem.format === filters.format;
        const matchesAvailability = filters.availability === "all" || getAvailabilityState(classItem) === filters.availability;
        return matchesKeyword && matchesCourse && matchesFormat && matchesAvailability;
    }), [filters, scheduleItems]);

    const handleConfirmReservation = () => {
        setScheduleItems((items) => items.map((item) => item.id === selectedClass.id
            ? { ...item, slotAvailable: Math.max(0, item.slotAvailable - 1) }
            : item));
        setSelectedClass(null);
        setSnackbarOpen(true);
    };

    return (
        <Box className="schedule-page">
            <Box className="schedule-page-intro">
                <Container maxWidth="xl">
                    <Typography className="schedule-kicker">CLASS & SCHEDULE</Typography>
                    <Typography variant="h2" className="schedule-page-title">Lịch khai giảng</Typography>
                    <Typography className="schedule-page-description">Chọn lớp học phù hợp với mục tiêu và lịch trình của bạn. Khi còn chỗ, bạn có thể giữ chỗ tạm thời trước khi hoàn tất hợp đồng và thanh toán.</Typography>
                    <Box className="schedule-summary-row"><Box><EventAvailable /><span><strong>{scheduleItems.filter((item) => item.status === "OPEN").length}</strong> lớp đang mở</span></Box><Box><Groups /><span><strong>{scheduleItems.reduce((total, item) => total + item.slotAvailable, 0)}</strong> chỗ trống</span></Box></Box>
                </Container>
            </Box>
            <Container maxWidth="xl" className="schedule-content">
                <Box className="schedule-filter-heading"><Box><FilterAlt /><Typography variant="h5">Tìm lớp phù hợp</Typography></Box><Typography>{filteredClasses.length} lớp được tìm thấy</Typography></Box>
                <ScheduleFilterBar filters={filters} options={options} onChange={setFilters} onReset={() => setFilters(initialFilters)} />
                {filteredClasses.length ? <Box className="schedule-grid">{filteredClasses.map((classItem) => <ClassScheduleCard key={classItem.id} classItem={classItem} onEnroll={setSelectedClass} />)}</Box> : <Box className="schedule-empty-state"><EventAvailable /><Typography variant="h5">Không tìm thấy lớp học phù hợp</Typography><Typography color="text.secondary">Thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác.</Typography><button type="button" onClick={() => setFilters(initialFilters)}>Xóa bộ lọc</button></Box>}
            </Container>
            <EnrollConfirmModal classItem={selectedClass} open={Boolean(selectedClass)} onClose={() => setSelectedClass(null)} onConfirm={handleConfirmReservation} />
            <Snackbar open={snackbarOpen} autoHideDuration={4500} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}><Alert severity="success" onClose={() => setSnackbarOpen(false)}>Đã giữ chỗ thành công. Vui lòng hoàn tất hợp đồng và thanh toán trong thời hạn.</Alert></Snackbar>
        </Box>
    );
}
