import React from "react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./occupationCarousel.css";

import { occupationDatas } from "../../../mock/occupation";
import OccupationCard from "../occupation-card/OccupationCard";

const items = occupationDatas.map(({ id, title, cost, text }) => {
  return <OccupationCard id={id} title={title} text={text} cost={cost} />;
});

const OccupationCarousel = () => {
  return (
    <div>
      <AliceCarousel
        autoPlay
        autoPlayInterval={1500}
        mouseTracking
        infinite
        disableButtonsControls
        items={items}
        responsive={{
          0: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 6,
          },
        }}
      />
    </div>
  );
};
export default OccupationCarousel;
