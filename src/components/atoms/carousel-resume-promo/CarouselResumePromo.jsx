import React from "react";
import { Carousel } from "antd";

import Img1 from "../../../assets/images/resume-info.png";

const ResumePromoCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img src={Img1} alt="resume promo" />
      </div>
      <div>
        <img src={Img1} alt="resume promo" />
      </div>
      <div>
        <img src={Img1} alt="resume promo" />
      </div>
      <div>
        <img src={Img1} alt="resume promo" />
      </div>
    </Carousel>
  );
};
export default ResumePromoCarousel;
