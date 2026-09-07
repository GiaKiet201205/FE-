import React from "react";
import { Clear, Search } from "@mui/icons-material";
import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function ScheduleFilterBar({ filters, options, onChange, onReset }) {
    const update = (field) => (event) => onChange({ ...filters, [field]: event.target.value });

    return (
        <Box className="schedule-filter-panel">
            <TextField className="schedule-search" label="Tìm khóa học hoặc mã lớp" value={filters.keyword} onChange={update("keyword")} InputProps={{ startAdornment: <InputAdornment position="start"><Search /></InputAdornment> }} />
            <FormControl className="schedule-filter-select"><InputLabel>Khóa học</InputLabel><Select value={filters.course} label="Khóa học" onChange={update("course")}><MenuItem value="all">Tất cả khóa học</MenuItem>{options.courses.map((course) => <MenuItem value={course} key={course}>{course}</MenuItem>)}</Select></FormControl>
            <FormControl className="schedule-filter-select"><InputLabel>Hình thức</InputLabel><Select value={filters.format} label="Hình thức" onChange={update("format")}><MenuItem value="all">Online & Offline</MenuItem><MenuItem value="Online">Online</MenuItem><MenuItem value="Offline">Offline</MenuItem></Select></FormControl>
            <FormControl className="schedule-filter-select"><InputLabel>Chỗ trống</InputLabel><Select value={filters.availability} label="Chỗ trống" onChange={update("availability")}><MenuItem value="all">Tất cả trạng thái</MenuItem><MenuItem value="available">Còn chỗ</MenuItem><MenuItem value="almost-full">Sắp đầy</MenuItem><MenuItem value="full">Hết chỗ</MenuItem></Select></FormControl>
            <Button className="schedule-reset-button" startIcon={<Clear />} onClick={onReset}>Xóa lọc</Button>
        </Box>
    );
}
