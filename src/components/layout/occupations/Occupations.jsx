import React from "react";

import "./occupations.css";

import SectionsHeader from "../../atoms/sections-header/SectionsHeader";
import OccupationCarousel from "../../atoms/occupation-carousel/OccupationCarousel";

import ShadowOccupation from "../../../assets/images/shadow-occupation.png";

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
        <img
          src={ShadowOccupation}
          alt="ShadowOccupation"
          className="shadow__occupation"
        />
      </div>
    </div>
  );
};

export default Occupations;
