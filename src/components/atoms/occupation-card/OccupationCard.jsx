import React from "react";
import "./occupationCard.css";
export default function OccupationCard({ title, cost, text }) {
  return (
    <div className="occupation__card">
      <p className="occupation__title">{title}</p>
      <p className="occupation__cost">{cost}</p>
      <p className="occupation__text">{text}</p>
    </div>
  );
}
