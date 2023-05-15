import React from "react";

import "./companiesCard.css";

const CompaniesCard = ({ image, company, number }) => {
  return (
    <div className="companies-card">
      <img src={image} alt="company" />
      <span>
        <h6>{company}</h6>
        <p>{number}</p>
      </span>
    </div>
  );
};

export default CompaniesCard;
