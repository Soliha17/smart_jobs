import React from "react";

import "./searchFeed.css";

import SortIcon from "../../../assets/images/sort-icon.svg";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";

const SearchFeed = (children) => {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  const { t } = useTranslation();

  return (
    <div className="search-result">
      <div className="left__search-result">
        {children.icon && <img src={children.icon} alt="search result icon" />}
        <p>
          {children.text}:
          <span className="number__search-result"> {children.number}</span>
        </p>
      </div>
      <div className="right__search-result" style={children.style}>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
          <Button size="large" className="btn__search-result">
            <img src={SortIcon} alt="sort icon" />
            {t("sorting")}
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default SearchFeed;
