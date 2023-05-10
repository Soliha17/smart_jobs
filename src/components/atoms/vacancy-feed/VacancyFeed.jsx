import React, { useState } from "react";

import "./vacancyFeed.css";
import { Button, Dropdown, Space, message } from "antd";
import { DownOutlined } from "@ant-design/icons";

import LeftLayoutIcon from "../../../assets/images/left-layout-btn.svg";
import RightLayoutIcon from "../../../assets/images/right-layout-btn.svg";

const VacancyFeed = ({ state, setState }) => {
  // const [selectedButton, setSelectedButton] = useState("btn2");

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
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_117_797)">
                  <path
                    d="M3 15C3 15.4583 3.375 15.8333 3.83333 15.8333H8V14.1667H3.83333C3.375 14.1667 3 14.5417 3 15ZM3 5C3 5.45833 3.375 5.83333 3.83333 5.83333H11.3333V4.16667H3.83333C3.375 4.16667 3 4.54167 3 5ZM11.3333 16.6667V15.8333H17.1667C17.625 15.8333 18 15.4583 18 15C18 14.5417 17.625 14.1667 17.1667 14.1667H11.3333V13.3333C11.3333 12.875 10.9583 12.5 10.5 12.5C10.0417 12.5 9.66667 12.875 9.66667 13.3333V16.6667C9.66667 17.125 10.0417 17.5 10.5 17.5C10.9583 17.5 11.3333 17.125 11.3333 16.6667ZM6.33333 8.33333V9.16667H3.83333C3.375 9.16667 3 9.54167 3 10C3 10.4583 3.375 10.8333 3.83333 10.8333H6.33333V11.6667C6.33333 12.125 6.70833 12.5 7.16667 12.5C7.625 12.5 8 12.125 8 11.6667V8.33333C8 7.875 7.625 7.5 7.16667 7.5C6.70833 7.5 6.33333 7.875 6.33333 8.33333ZM18 10C18 9.54167 17.625 9.16667 17.1667 9.16667H9.66667V10.8333H17.1667C17.625 10.8333 18 10.4583 18 10ZM13.8333 7.5C14.2917 7.5 14.6667 7.125 14.6667 6.66667V5.83333H17.1667C17.625 5.83333 18 5.45833 18 5C18 4.54167 17.625 4.16667 17.1667 4.16667H14.6667V3.33333C14.6667 2.875 14.2917 2.5 13.8333 2.5C13.375 2.5 13 2.875 13 3.33333V6.66667C13 7.125 13.375 7.5 13.8333 7.5Z"
                    fill="#555351"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_117_797">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown menu={menuProps}>
          <Button size="large" type="primary" ghost>
            <Space>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_12_4070)">
                  <path
                    d="M14.7083 5.29159C13.5 4.08325 11.8417 3.33325 10 3.33325C6.31667 3.33325 3.34167 6.31659 3.34167 9.99992C3.34167 13.6833 6.31667 16.6666 10 16.6666C13.1083 16.6666 15.7 14.5416 16.4417 11.6666H14.7083C14.025 13.6083 12.175 14.9999 10 14.9999C7.24167 14.9999 5.00001 12.7583 5.00001 9.99992C5.00001 7.24159 7.24167 4.99992 10 4.99992C11.3833 4.99992 12.6167 5.57492 13.5167 6.48325L10.8333 9.16658H16.6667V3.33325L14.7083 5.29159Z"
                    fill="#40AAFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_4070">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
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
          <Button size="large" type="primary" ghost>
            <Space>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_12_4070)">
                  <path
                    d="M14.7083 5.29159C13.5 4.08325 11.8417 3.33325 10 3.33325C6.31667 3.33325 3.34167 6.31659 3.34167 9.99992C3.34167 13.6833 6.31667 16.6666 10 16.6666C13.1083 16.6666 15.7 14.5416 16.4417 11.6666H14.7083C14.025 13.6083 12.175 14.9999 10 14.9999C7.24167 14.9999 5.00001 12.7583 5.00001 9.99992C5.00001 7.24159 7.24167 4.99992 10 4.99992C11.3833 4.99992 12.6167 5.57492 13.5167 6.48325L10.8333 9.16658H16.6667V3.33325L14.7083 5.29159Z"
                    fill="#40AAFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_4070">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              O’chirish
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
