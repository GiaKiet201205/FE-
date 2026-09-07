import React, { useState } from "react";

import writeImage from "../../assets/images/write.jpg";
import advisoryImage from "../../assets/images/advisory.jpg";
import trainingImage from "../../assets/images/training.jpg";

import "../about/ActivitySection.css";

const activityItems = [
  {
    id: 1,
    image: writeImage,
    number: "01",
    title: (
      <>
        Tổ Chức Các Bài Thi
        <br />
        Quốc Tế
      </>
    ),
    description:
      "Là Đại diện quốc gia của các Tổ chức hàng đầu thế giới như Viện Khảo thí Giáo dục Hoa Kỳ (ETS), Tổ chức Khảo thí Tin học CERTIPORT, IIG Việt Nam được ủy quyền thực hiện các bài thi quốc tế uy tín về ngoại ngữ và tin học.",
    alt: "Tổ chức các bài thi quốc tế",
  },
  {
    id: 2,
    image: advisoryImage,
    number: "02",
    title: (
      <>
        Tư Vấn Các Giải Pháp
        <br />
        Giáo Dục
      </>
    ),
    description:
      "Đồng hành cùng nhà trường, doanh nghiệp và cơ quan quản lý giáo dục để xây dựng các giải pháp giáo dục và khảo thí phù hợp, hiệu quả và bền vững.",
    alt: "Tư vấn các giải pháp giáo dục",
  },
  {
    id: 3,
    image: trainingImage,
    number: "03",
    title: "Đào Tạo",
    description:
      "Với bề dày kinh nghiệm hơn 20 năm hình thành và phát triển, IIG Việt Nam là đơn vị hàng đầu trong việc tổ chức đào tạo toàn diện về tiếng Anh và Tin học chuẩn quốc tế cho mọi đối tượng.",
    alt: "Đào tạo",
  },
];

export default function ActivitySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = activityItems.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const orderedItems = Array.from(
    { length: total },
    (_, i) => activityItems[(activeIndex + i) % total]
  );

  return (
    <section className="activity-section">
      <div className="activity-decoration activity-decoration-1"></div>
      <div className="activity-decoration activity-decoration-2"></div>
      <div className="activity-decoration activity-decoration-3"></div>

      <div className="activity-container">
        <div className="activity-header">
          <span className="activity-small-title">IIG VIỆT NAM</span>
          <h2>Lĩnh vực hoạt động</h2>
          <div className="activity-title-line"></div>
        </div>

        <div className="activity-slider">
          <button
            className="activity-arrow activity-arrow-left"
            aria-label="Previous"
            onClick={handlePrev}
          >
            ‹
          </button>

          {orderedItems.map((item, idx) => {
            if (idx === 0) {
              return (
                <div
                  className="activity-card activity-card-featured"
                  key={`${item.id}-${activeIndex}`}
                >
                  <div className="activity-card-image">
                    <img src={item.image} alt={item.alt} />
                  </div>

                  <div className="activity-card-content">
                    <span className="activity-card-number">
                      {item.number}
                    </span>
                    <h3>{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                    <button className="activity-read-more">
                      Xem thêm
                      <span>→</span>
                    </button>
                  </div>
                </div>
              );
            }

            const originalIndex = activityItems.findIndex(
              (a) => a.id === item.id
            );

            return (
              <div
                className="activity-card activity-card-image-only"
                key={`${item.id}-${activeIndex}`}
                onClick={() => setActiveIndex(originalIndex)}
              >
                <img src={item.image} alt={item.alt} />
                <div className="activity-card-overlay"></div>
                <div className="activity-overlay-content">
                  <span className="activity-card-number">
                    {item.number}
                  </span>
                  <h3>{item.title}</h3>
                  <span className="activity-overlay-arrow">→</span>
                </div>
              </div>
            );
          })}

          <button
            className="activity-arrow activity-arrow-right"
            aria-label="Next"
            onClick={handleNext}
          >
            ›
          </button>
        </div>

        <div className="activity-pagination">
          {activityItems.map((item, idx) => (
            <span
              key={item.id}
              className={`activity-dot${idx === activeIndex ? " active" : ""}`}
              onClick={() => setActiveIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}