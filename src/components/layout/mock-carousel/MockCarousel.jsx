import React from "react";
import { Carousel } from "antd";

import "./mockCarousel.css";

import { mockCardDatas } from "../../../mock/mockCard";
import MockCard from "../../atoms/mock-card/MockCard";
import { useTranslation } from "react-i18next";

const items = mockCardDatas.map(({ id, img, name, position, text }) => {
  return (
    <MockCard key={id} position={position} img={img} text={text} name={name} />
  );
});

const MockCarousel = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { t } = useTranslation();

  return (
    <div className="mock-carousel container">
      <h2>{t("opinionsOfMockInterviewParticipants")}</h2>
      <Carousel {...settings}>{items}</Carousel>
    </div>
  );
};
export default MockCarousel;
