import React from "react";

import "./searchFeed.css";

import SortIcon from "../../../assets/images/sort-icon.svg";

const SearchFeed = (children) => {
  return (
    <div className="search-result">
      <div className="left__search-result">
        {children.icon && <img src={children.icon} alt="search result icon" />}
        <p>
          {children.text}
          <span className="number__search-result">{children.number}</span>
        </p>
      </div>
      <div className="right__search-result" style={children.style}>
        <button>
          <img src={SortIcon} alt="sort icon" />
          Saralash
        </button>
      </div>
    </div>
  );
};

export default SearchFeed;
