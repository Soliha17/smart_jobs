import React from "react";
import "./blogCard.css";
export default function BlogCard({ title, date, text, img }) {
  return (
    <div className="card___blog">
      <img src={img} alt="BlogImg" />
      <div className="inner__blog">
        <p className="blog__date">{date} </p>
        <p className="blog__title">{title}</p>
        <p className="blog__text">{text}</p>
      </div>
    </div>
  );
}
