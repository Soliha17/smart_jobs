import React from "react";

import "./occupationCarousel.css";

import { occupationDatas } from "../../../mock/occupation";
import OccupationCard from "../occupation-card/OccupationCard";
import { Carousel } from "antd";

const items = occupationDatas.map(({ id, title, cost, text }) => {
  return (
    <OccupationCard key={id} id={id} title={title} text={text} cost={cost} />
  );
});

const OccupationCarousel = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Carousel {...settings}>{items}</Carousel>
    </>
  );
};
export default OccupationCarousel;
