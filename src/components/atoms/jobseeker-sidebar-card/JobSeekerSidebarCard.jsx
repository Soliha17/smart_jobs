import React from "react";

import PointIcon from "../../../assets/images/green-point.svg";
import PersonImg from "../../../assets/images/jamshid-qurbonov.png";

const JobSeekerSidebarCard = () => {
  return (
    <div className="card__jobseekers-sidebar">
      <div className="profile-group__jobseekers-sidebar">
        <img src={PersonImg} alt="PersonImg" />
        <span>
          <h3>Jamshi Qodirov</h3>
          <p>Mahsulot menejeri</p>
        </span>
      </div>
      <div className="action-group__jobseekers-sidebar">
        <span>
          <img src={PointIcon} alt="PointIcon" />
        </span>
        <p>12.06.2023</p>
      </div>
    </div>
  );
};

export default JobSeekerSidebarCard;
