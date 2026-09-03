import React from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import CourseCard from "../components/courses/CourseCard";
import VisionMissionCard from "../components/about/VisionMissionCard";
import visionImage from "../assets/images/vision.png";
import missionImage from "../assets/images/mission.png";
import corevalueImage from "../assets/images/corevalues.png";
import { courses } from "../data/courses";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      <StatsSection />

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            mb: 3,
          }}
        >
          <Box>
            <Typography color="primary" fontWeight={900}>
              KHÓA HỌC NỔI BẬT
            </Typography>
            <Typography variant="h4" fontWeight={900}>
              Chọn lộ trình của bạn
            </Typography>
          </Box>
          <Button onClick={() => navigate("/courses")}>Xem tất cả</Button>
        </Box>

        <Grid container spacing={3}>
          {courses.slice(0, 3).map((course) => (
            <Grid item xs={12} md={4} key={course.id}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="h4" fontWeight={900}>
              Giới thiệu về IIG Việt Nam
            </Typography>
          </Box>
          <Button onClick={() => navigate("/about")}>Xem tất cả</Button>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <VisionMissionCard
              image={visionImage}
              icon="⛰️"
              title="Tầm nhìn"
              description="IIG Việt Nam định hướng trở thành Tổ chức Giáo dục hàng đầu trong nước và khu vực về khảo thí, giải pháp giáo dục và hệ sinh thái giáo dục số."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <VisionMissionCard
              image={missionImage}
              icon="💡"
              title="Sứ mệnh"
              description="IIG Việt Nam cam kết đưa những tiêu chuẩn và giải pháp giáo dục tiên tiến nhất, nhằm nâng cao trình độ và kỹ năng của nguồn nhân lực Việt và khu vực ngang tầm Thế giới."
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <VisionMissionCard
              image={corevalueImage}
              icon="💎"
              title="Giá trị cốt lõi"
              description="- Tiên phong đổi mới
- Chất lượng quốc tế
- Hoạt động chuyên nghiệp
- Hợp tác bền vững
- Đạo đức, Uy tín"
            />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ bgcolor: "#eaf4ff", py: 8 }}>
        <Container maxWidth="xl">
          <Typography color="primary" fontWeight={900}>
            MÔ HÌNH ĐÀO TẠO
          </Typography>
          <Typography variant="h4" fontWeight={900} sx={{ mb: 4 }}>
            Học chủ động, thực hành nhiều hơn
          </Typography>
          <Grid container spacing={3}>
            {[
              [
                "Đường hướng giao tiếp",
                "Tăng hoạt động nhóm, theo đôi và trình bày.",
              ],
              [
                "Dạy học theo tình huống",
                "Gắn nội dung với công việc và cuộc sống.",
              ],
              [
                "Tích hợp kỹ năng",
                "Kết hợp Nghe, Nói, Đọc, Viết thay vì học tách biệt.",
              ],
              [
                "Lớp học đảo ngược",
                "Chủ động học trước, tương tác và mở rộng trên lớp.",
              ],
            ].map(([title, text]) => (
              <Grid item xs={12} md={3} key={title}>
                <Box className="feature-box">
                  <Typography variant="h6" fontWeight={900}>
                    {title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
