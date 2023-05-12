import React from "react";

import "./vacancyFeed.css";
import { Button, Dropdown, Space, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

import LeftLayoutIcon from "../../../assets/images/left-layout-btn.svg";
import RightLayoutIcon from "../../../assets/images/right-layout-btn.svg";

const VacancyFeed = ({ state, setState }) => {
  const selectButton = (btn) => {
    setState(btn);
  };

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div className="vacancy-feed container">
      <div className="mobile__vacancy-feed">
        <Dropdown menu={menuProps}>
          <Button size="large">
            <Space>
              Filterlar
              {/* <img src={FilterIcon} alt="filter icon" /> */}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown menu={menuProps}>
          <Button size="large" className="clear-btn__vacancy-feed">
            <Space>
              {/* <img src={ClearIcon} alt="clear icon" /> */}
              O’chirish
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="left__vacancy-feed">
        <Dropdown menu={menuProps}>
          <Button size="large">
            <Space>
              Yo’nalishlar
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown menu={menuProps}>
          <Button size="large">
            <Space>
              Ishlash vaqti
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown menu={menuProps}>
          <Button size="large">
            <Space>
              Ishlash turi
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown menu={menuProps}>
          <Button size="large">
            <Space>
              Tajriba darajasi
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown menu={menuProps}>
          <Button size="large">
            <Space>
              E’lon qilingan sana
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown menu={menuProps}>
          <Button size="large" className="clear-btn__vacancy-feed">
            <Space>
              O'chirish
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="right__vacancy-feed">
        <button
          className={`${state === "btn1" && "selected-btn__vacancy-feed"}`}
          onClick={() => selectButton("btn1")}
        >
          <img src={LeftLayoutIcon} alt="LeftLayoutIcon" />
        </button>
        <button
          className={`${state === "btn2" && "selected-btn__vacancy-feed"}`}
          onClick={() => selectButton("btn2")}
        >
          <img src={RightLayoutIcon} alt="RightLayoutIcon" />
        </button>
      </div>
    </div>
  );
};

export default VacancyFeed;
