import React from "react";
import "./VisionMissionCard.css";

function VisionMissionCard({ image, icon, title, description }) {
  return (
    <div className="vision-card">
      {/* Hình ảnh */}
      <img src={image} alt={title} className="vision-card-image" />

      {/* Nội dung khi hover */}
      <div className="vision-card-overlay">
        <div className="vision-card-icon">{icon}</div>

        <div className="vision-card-content">
          <h2>{title}</h2>

          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default VisionMissionCard;
