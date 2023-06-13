import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Button, Drawer, Dropdown, Select, Space } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";

import "./header.css";

import Logo from "../../../assets/images/logo.svg";
import ProfileImg from "../../../assets/images/profile-img.svg";

import VacancyInput from "../../atoms/vacancy-input/VacancyInput";
import Modals from "../../molecules/modal/Modals";
import TestHeader from "../test-header/TestHeader";

const languageOptions = [
  { value: "en", label: "En" },
  { value: "ru", label: "Ru" },
  { value: "uz", label: "Uz" },
  // Add more language options as needed
];

function Header() {
  const [visible, setVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState("btn1");
  const [isUser, setIsUser] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname === "/vacancy" ||
      location.pathname === "/full" ||
      location.pathname === "/builder"
    ) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [location.pathname]);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const isTestPage = location.pathname === "/test";

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const selectButton = (btn) => {
    setSelectedButton(btn);
    console.log(setIsUser);
  };

  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
  ];

  function goToHomePage() {
    navigate("/");
  }

  const { t } = useTranslation();

  return (
    <>
      {!isTestPage ? (
        <div>
          <div className="header-wrapper">
            <header className="header container">
              <div className="header__logo">
                <img src={Logo} alt="Smart Jobs' Logo" onClick={goToHomePage} />
              </div>
              {isUser ? (
                <nav className="mobileHidden">
                  <ul>
                    <li>
                      <NavLink to="/vacancies">{t("vacancies")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/resume">{t("resumeConstructor")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/help">{t("help")}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/addition">{t("supplements")}</NavLink>
                    </li>
                  </ul>
                </nav>
              ) : (
                <div className="select-btn-group__header">
                  <button
                    className={`button__search-group ${
                      selectedButton === "btn1" && "selected-button__header"
                    }`}
                    onClick={() => selectButton("btn1")}
                  >
                    {t("jobSearch")}
                  </button>
                  <button
                    className={`button__search-group ${
                      selectedButton === "btn2" && "selected-button__header"
                    }`}
                    onClick={() => selectButton("btn2")}
                  >
                    {t("employeeSearch")}
                  </button>
                </div>
              )}
              <div
                className={`header__actions ${
                  isUser && "header__actions--auto"
                }`}
              >
                {isUser ? (
                  <>
                    <Space
                      wrap
                      className={`white-select ${
                        !isUser ? "mobileHidden" : ""
                      }`}
                    >
                      <Select
                        className="white-select"
                        value={currentLanguage}
                        onChange={handleLanguageChange}
                        style={{
                          width: 70,
                        }}
                        bordered={false}
                      >
                        {languageOptions.map((option) => (
                          <Select.Option
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Space>
                    <div className="header__profile header__profile--none">
                      <Dropdown
                        menu={{
                          items,
                        }}
                        trigger={["click"]}
                      >
                        <button onClick={(e) => e.preventDefault()}>
                          <Space className="profile__name">
                            <img src={ProfileImg} alt="Pofile Img" width={43} />
                            {t("nameOfUser")}
                            <DownOutlined />
                          </Space>
                        </button>
                      </Dropdown>
                    </div>
                  </>
                ) : (
                  <>
                    <Space
                      wrap
                      className={`white-select ${
                        isUser ? "mobileHidden" : "white-select--none"
                      }`}
                    >
                      <Select
                        className="white-select"
                        value={currentLanguage}
                        onChange={handleLanguageChange}
                        style={{
                          width: 70,
                        }}
                        bordered={false}
                      >
                        {languageOptions.map((option) => (
                          <Select.Option
                            key={option.value}
                            value={option.value}
                          >
                            {option.label}
                          </Select.Option>
                        ))}
                      </Select>
                    </Space>
                    <Button
                      type="primary"
                      className="enter-btn__header"
                      onClick={() => setIsModalOpen(true)}
                    >
                      {t("entrance")}
                    </Button>
                  </>
                )}
              </div>
              {isUser && (
                <div className="mobileVisible">
                  <Space
                    wrap
                    className={`white-select ${
                      isUser ? "mobileHidden" : "white-select--none"
                    }`}
                  >
                    <Select
                      className="white-select"
                      value={currentLanguage}
                      onChange={handleLanguageChange}
                      style={{
                        width: 70,
                      }}
                      bordered={false}
                    >
                      {languageOptions.map((option) => (
                        <Select.Option key={option.value} value={option.value}>
                          {option.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Space>
                  <Button
                    type="primary"
                    onClick={showDrawer}
                    className="header__hamburger-btn"
                  >
                    <MenuOutlined />
                  </Button>
                  <Drawer placement="right" onClose={onClose} visible={visible}>
                    <nav>
                      <ul>
                        <li>
                          <NavLink onClick={onClose} to="/">
                            <div className="header__profile">
                              <h6>{t("nameOfUser")}</h6>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink onClick={onClose} to="/">
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink onClick={onClose} to="/about">
                            About
                          </NavLink>
                        </li>
                        <li>
                          <NavLink onClick={onClose} to="/shop">
                            Shop
                          </NavLink>
                        </li>
                        <li>
                          <NavLink onClick={onClose} to="/faq">
                            FAQ
                          </NavLink>
                        </li>
                        <li>
                          <NavLink onClick={onClose} to="/contact">
                            Contact
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </Drawer>
                </div>
              )}
            </header>
            {location.pathname === "/vacancy" && <VacancyInput />}
          </div>
          <Outlet />
          <Modals open={isModalOpen} setOpen={setIsModalOpen} />
        </div>
      ) : (
        <TestHeader />
      )}
    </>
  );
}

export default Header;
