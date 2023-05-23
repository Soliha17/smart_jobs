import React from "react";

import "./bigBlogCard.css";

import BlogImg from "../../../assets/images/big-blog-card-img.svg";

const BigBlogCard = () => {
  return (
    <div className="big-card__blog">
      <img src={BlogImg} alt="BlogImg" />
      <div className="inner__blog">
        <p className="blog__date">18-mart, 2023 </p>
        <p className="blog__title">
          MVP qilmasdan turib ham invesitsiyalar jalb qilish mumkinmi
        </p>
        <p className="blog__text">
          Eng birinchi navbatda o’rganishni o’rganish qoidalari muhim
          hisoblanadi. Agar siz bu ko’nikmani egallagan bo’lsangiz reyume
          tayyorlashni ham siz tezda....
        </p>
      </div>
    </div>
  );
};

export default BigBlogCard;
