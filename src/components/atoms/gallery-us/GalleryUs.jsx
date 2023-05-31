import React from "react";

import "./galleryUs.css";

import Img1 from "../../../assets/images/gallery-1.svg"
import Img2 from "../../../assets/images/gallery-2.svg"
import Img3 from "../../../assets/images/gallery-3.svg"
import Img4 from "../../../assets/images/gallery-4.svg"
import Img5 from "../../../assets/images/gallery-5.svg"
import Img6 from "../../../assets/images/gallery-6.svg"
import Img7 from "../../../assets/images/gallery-7.svg"
import Img8 from "../../../assets/images/gallery-8.svg"
import Img9 from "../../../assets/images/gallery-9.svg"
import Img10 from "../../../assets/images/gallery-10.svg"

const GalleryUs = () => {
  return (
    <div className="gallery-us container">
      <span>
        <h3>
          Orzudagi ishni yoki korxonangizga iqtidorlar izlash da ko’maklashamiz
        </h3>
        <p>
          Biz Smart Jobs jamoasi sizga qulay ish izlash, yoki kopmpaniyalarga
          talantlar qidirishda ko’makalshadi Ish izlovchilar uchun yaratilgan
          ilovamiz, sizning mahsulotingiz yoki xizmatlaringizni jonli ko'rsatib,
          mijozlarga to'g'ri yetkazib beradi.
        </p>
      </span>
      <span className="images__gallery-us">
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <img src={Img5} alt="" />
        <img src={Img6} alt="" />

        <img src={Img10} alt="" />
        <img src={Img8} alt="" />
        <img src={Img7} alt="" />
        <img src={Img8} alt="" />
        <img src={Img9} alt="" />
        <img src={Img10} alt="" />

        <img src={Img7} alt="" />
        <img src={Img5} alt="" />
        <img src={Img9} alt="" />
        <img src={Img10} alt="" />
      </span>
    </div>
  );
};

export default GalleryUs;
