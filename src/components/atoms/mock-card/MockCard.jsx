import React from "react";

import "./mockCard.css";

const MockCard = ({ id, img, name, position, text }) => {
  console.log(text.length);
  return (
    <div className="mock-card">
      <div className="header__mock-card">
        <img src={img} alt="" />
        <span>
          <h4>{name}</h4>
          <p>{position}</p>
        </span>
      </div>
      <p className="feedback__mock-card">{`${text.slice(0, 300)}...`}</p>
    </div>
  );
};

export default MockCard;
