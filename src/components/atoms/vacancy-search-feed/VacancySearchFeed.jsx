import React from "react";

import "./vacancySearchFeed.css";

import SearchResultIcon from "../../../assets/images/search-result--icon.svg";
import SortIcon from "../../../assets/images/sort-icon.svg";

const VacancySearchFeed = ({ style }) => {
  return (
    <div className="vacancy-result">
      <div className="left__vacancy-result">
        <img src={SearchResultIcon} alt="search result icon" />
        <p>
          Qidiruvlar natijasi:{" "}
          <span className="number__vacancy-result">285</span>
        </p>
      </div>
      <div className="right__vacancy-result" style={style}>
        <button>
          <img src={SortIcon} alt="sort icon" />
          Saralash
        </button>
      </div>
    </div>
  );
};

export default VacancySearchFeed;
