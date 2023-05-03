import React from "react";

import "./occupations.css";

import SectionsHeader from "../../atoms/sections-header/SectionsHeader";
import OccupationCarousel from "../../atoms/occupation-carousel/OccupationCarousel";

const Occupations = () => {
  return (
    <div className="occupations container">
      <SectionsHeader
        children={{
          title: "Kasblar",
          btnText: "kompaniyalar",
        }}
      />
      <div className="occupations__content">
        <OccupationCarousel />
      </div>
    </div>
  );
};

export default Occupations;
