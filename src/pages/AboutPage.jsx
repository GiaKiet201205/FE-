import React from "react";

import VisionMissionCard from "../components/about/VisionMissionCard";

import visionImage from "../assets/images/vision.png";
import missionImage from "../assets/images/mission.png";
import corevalueImage from "../assets/images/corevalues.png";
import introductionImage from "../assets/images/introduction.jpg";
import introductionImage2 from "../assets/images/introduction2.jpg";
import bannerImage from "../assets/images/banner.jpg";
import writeImage from "../assets/images/write.jpg";
import advisoryImage from "../assets/images/advisory.jpg";
import trainingImage from "../assets/images/training.jpg";

import "../styles/AboutPage.css";
function AboutPage() {
  return (
    <div className="about-page">
      {/* =====================================================
          HERO BANNER
      ===================================================== */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <img src={bannerImage} alt="IIG Việt Nam" />
        </div>

        <div className="about-hero-overlay"></div>

        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>

        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1>Giới thiệu</h1>

            <div className="about-hero-line"></div>

            <p>Tổ chức Giáo dục IIG Việt Nam</p>
          </div>
        </div>

        <div className="about-hero-corner"></div>
      </section>

      {/* =========================
          PHẦN GIỚI THIỆU
      ========================= */}
      <section className="about-introduction">
        <h2 className="about-intro-title">Giới thiệu chung</h2>

        {/* ----- Hàng 1: Chữ trái - Ảnh phải ----- */}
        <div className="about-intro-row">
          <div className="about-intro-content">
            <p>
              Được thành lập vào năm 2000, Tổ chức Giáo dục IIG Việt Nam là đơn
              vị hàng đầu tại Việt Nam, Lào, Campuchia và Myanmar về khảo thí,
              đào tạo toàn diện và tư vấn các giải pháp giáo dục. IIG Việt Nam
              hiện đang là đại diện quốc gia của nhiều tổ chức hàng đầu thế giới
              như Viện Khảo thí Giáo dục Hoa Kỳ (ETS), Tổ chức Khảo thí Tin học
              Certiport, và là đại diện triển khai các bài thi quốc tế của nhiều
              tổ chức uy tín khác.
            </p>

            <p>
              Tại Việt Nam, với mạng lưới chi nhánh trải dài cả 3 miền đất nước,
              IIG Việt Nam ngày càng khẳng định uy tín trong các lĩnh vực hoạt
              động như: Tổ chức các bài thi tiếng Anh quốc tế (hệ thống bài thi
              TOEIC, hệ thống bài thi TOEFL), các bài thi Tin học quốc tế (MOS,
              IC3, IC3 Spark, MCE, Adobe Certified Professional, Apple Swift) và
              các bài thi khác như PSAT, SAT, AP, The SSAT, GRE, ESB, PMI-PMR,
              Meta, Generative AI Foundations, ITS, …; cung cấp giải pháp đào
              tạo tiếng Anh cho các doanh nghiệp, trường học, cơ quan quản lý
              giáo dục, …
            </p>
          </div>

          <div className="about-intro-image">
            <div className="about-intro-image-bg"></div>
            <img src={introductionImage} alt="IIG Việt Nam" />
          </div>
        </div>

        {/* ----- Hàng 2: Ảnh trái - Chữ phải ----- */}
        <div className="about-intro-row reverse">
          <div className="about-intro-image">
            <div className="about-intro-image-bg"></div>
            <img src={introductionImage2} alt="Hợp tác IIG Việt Nam" />
          </div>

          <div className="about-intro-content">
            <p>
              Trong những năm qua, Tổ chức Giáo dục IIG Việt Nam vinh dự nhận
              được sự tin tưởng và hợp tác của các Bộ và cơ quan Trung ương như
              Trung ương Đoàn TNCS Hồ Chí Minh, Bộ Giáo dục & Đào tạo, Bộ Công
              an. Đồng thời, IIG Việt Nam đã và đang cung cấp dịch vụ khảo thí
              và đào tạo cho các tổ chức/doanh nghiệp lớn như: Viettel,
              Vinaphone, MobiFone, FPT Software, Techcombank, VPBank, Microsoft
              Việt Nam, Samsung Việt Nam, Canon Việt Nam, LG Electronics Việt
              Nam, Fujitsu, Vietnam Airlines, Vietjet Air, … và hàng trăm trường
              Đại học, Cao đẳng, Phổ thông trên cả nước.
            </p>

            <p>
              Với sứ mệnh đồng hành nâng cao chất lượng nền giáo dục nước nhà,
              Tổ chức Giáo dục IIG Việt Nam luôn nỗ lực đưa những tiêu chuẩn và
              giải pháp giáo dục tiên tiến nhất vào Việt Nam, từ đó nâng cao
              trình độ và kỹ năng của nguồn nhân lực Việt ngang tầm thế giới,
              đáp ứng yêu cầu khắt khe của nền kinh tế thời kỳ hội nhập sâu
              rộng.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          TẦM NHÌN - SỨ MỆNH - GIÁ TRỊ
      ========================= */}
      <section className="vision-mission-section">
        <VisionMissionCard
          image={visionImage}
          icon="🏔️"
          title="Tầm Nhìn"
          description="IIG Việt Nam định hướng trở thành Tổ chức Giáo dục hàng đầu trong nước và khu vực về khảo thí, giải pháp giáo dục và hệ sinh thái giáo dục số."
        />

        <VisionMissionCard
          image={missionImage}
          icon="💡"
          title="Sứ Mệnh"
          description="Cung cấp các giải pháp giáo dục và khảo thí chất lượng cao, góp phần nâng cao năng lực học tập và phát triển nguồn nhân lực."
        />

        <VisionMissionCard
          image={corevalueImage}
          icon="💎"
          title="Giá trị cốt lõi"
          description={`- Tiên phong đổi mới
- Chất lượng quốc tế
- Hoạt động chuyên nghiệp
- Hợp tác bền vững
- Đạo đức, Uy tín`}
        />
      </section>

      {/* =====================================================
    LĨNH VỰC HOẠT ĐỘNG
===================================================== */}

      <section className="activity-section">
        {/* Background decorative lines */}
        <div className="activity-decoration activity-decoration-1"></div>
        <div className="activity-decoration activity-decoration-2"></div>
        <div className="activity-decoration activity-decoration-3"></div>

        <div className="activity-container">
          {/* TITLE */}
          <div className="activity-header">
            <span className="activity-small-title">IIG VIỆT NAM</span>

            <h2>Lĩnh vực hoạt động</h2>

            <div className="activity-title-line"></div>
          </div>

          {/* CONTENT */}
          <div className="activity-slider">
            {/* ARROW LEFT */}
            <button
              className="activity-arrow activity-arrow-left"
              aria-label="Previous"
            >
              ‹
            </button>

            {/* CARD 1 */}
            <div className="activity-card activity-card-featured">
              <div className="activity-card-image">
                <img
                  src={writeImage}
                  alt="Tổ chức các bài thi quốc tế"
                />
              </div>

              <div className="activity-card-content">
                <span className="activity-card-number">01</span>

                <h3>
                  Tổ Chức Các Bài Thi
                  <br />
                  Quốc Tế
                </h3>

                <p>
                  Là Đại diện quốc gia của các Tổ chức hàng đầu thế giới như
                  Viện Khảo thí Giáo dục Hoa Kỳ (ETS), Tổ chức Khảo thí Tin học
                  CERTIPORT, IIG Việt Nam được ủy quyền thực hiện các bài thi
                  quốc tế uy tín về ngoại ngữ và tin học.
                </p>

                <button className="activity-read-more">
                  Xem thêm
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="activity-card activity-card-image-only">
              <img
                src={advisoryImage}
                alt="Tư vấn các giải pháp giáo dục"
              />

              <div className="activity-card-overlay"></div>

              <div className="activity-overlay-content">
                <span className="activity-card-number">02</span>

                <h3>
                  Tư Vấn Các Giải Pháp
                  <br />
                  Giáo Dục
                </h3>

                <span className="activity-overlay-arrow">→</span>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="activity-card activity-card-image-only">
              <img src={trainingImage} alt="Đào tạo" />

              <div className="activity-card-overlay"></div>

              <div className="activity-overlay-content">
                <span className="activity-card-number">03</span>

                <h3>Đào Tạo</h3>

                <span className="activity-overlay-arrow">→</span>
              </div>
            </div>

            {/* ARROW RIGHT */}
            <button
              className="activity-arrow activity-arrow-right"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          {/* PAGINATION */}
          <div className="activity-pagination">
            <span className="activity-dot"></span>

            <span className="activity-dot active"></span>

            <span className="activity-dot"></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
