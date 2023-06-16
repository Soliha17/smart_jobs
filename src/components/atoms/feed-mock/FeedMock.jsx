import React, { useEffect, useState } from "react";

import "./feedMock.css";

import StartIcon from "../../../assets/images/start-icon-mock.svg";

const FeedMock = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => prevOffset + 1);
    }, 50); // Adjust the speed of the marquee by changing the interval duration

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="marquee-container__mock">
      <div
        className="marquee-text__mock"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        <p>Product dizayn</p>
        <img src={StartIcon} alt="StartIcon" />
        <p>Fronted dasturlash</p>
        <img src={StartIcon} alt="StartIcon" />
        <p>Mobil dasturlash</p>
        <img src={StartIcon} alt="StartIcon" />
        <p>Fronted dasturlash</p>
        <img src={StartIcon} alt="StartIcon" />
        <p>Mobil dasturlash</p>
        <img src={StartIcon} alt="StartIcon" />
        <p>Backend dasturlash</p>
        <img src={StartIcon} alt="StartIcon" />
        <p>Mahsulot dizayni</p>
        <img src={StartIcon} alt="StartIcon" />
        <p>Boshqaruv</p>
        <img src={StartIcon} alt="StartIcon" />
      </div>
    </div>
  );
};

export default FeedMock;
