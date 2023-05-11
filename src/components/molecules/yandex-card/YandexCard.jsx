import React from "react";
import "./yandexCard.css";

import LocationIcon from "../../../assets/images/location-icon.svg";

const YandexCard = () => {
  return (
    <div className="yandex-card">
      <h3>P&G</h3>
      <p className="subtitle__yandex-card">University, technical college</p>
      <div className="inner__yandex-card">
        <div className="top__yandex-card">
          <p>No reviews yet</p>
          <p>Closed until 9:00 AM</p>
        </div>
        <div className="middle__yandex-card">
          <img src={LocationIcon} alt="LocationIcon" />
          <p>Khorezm Region, Urgench, Tinchlik Street, 6</p>
        </div>
        <div className="bottom__yandex-card">
          <button>Directions</button>
          <button>About</button>
        </div>
        <p className="report-text__yandex-card">Report an error</p>
      </div>
    </div>
  );
};

export default YandexCard;
