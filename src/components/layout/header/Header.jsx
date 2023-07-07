import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Drawer, Dropdown, Select, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import "./header.css";

import Logo from "../../../assets/images/new-header-logo.svg";
import DrawerLogo from "../../../assets/images/drawer-smartjob-logo.svg";
import BlackMenu from "../../../assets/images/black-menu-header.svg";
import WhiteMenu from "../../../assets/images/white-menu-header.svg";
import Bell from "../../../assets/images/bell-icon-header.svg";
import LogoBlack from "../../../assets/images/logo-header-black.png";
import ProfileImg from "../../../assets/images/profile-icon-header.svg";

import VacancyInput from "../../atoms/vacancy-input/VacancyInput";
import Modals from "../../molecules/modal/Modals";
import TestHeader from "../test-header/TestHeader";
import CloseIcon from "./CloseIcon";
import LogOutModal from "../../molecules/modal/LogOut";
import { useDispatch } from "react-redux";
import { setPhone } from "../../../store/auth.slice";
import {
  useGetOrganizationQuery,
  useGetWorkerQuery,
} from "../../../store/api/apiSlice";

const languageOptions = [
  { value: "en", label: "En" },
  { value: "ru", label: "Ru" },
  { value: "uz", label: "Uz" },
  // Add more language options as needed
];

const drawerLanguageOptions = [
  { value: "en", label: "English" },
  { value: "ru", label: "Russian" },
  { value: "uz", label: "Uzbek" },
  // Add more language options as needed
];

function Header() {
  const [visible, setVisible] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isHeroPage, setIsHeroPage] = useState(false);
  const dispatch = useDispatch();

  const { data: organizationMe } = useGetOrganizationQuery();
  const { data: workerMe } = useGetWorkerQuery();

  console.log("organizationMe", organizationMe);
  console.log("workerMe", workerMe);

  const location = useLocation();
  const navigate = useNavigate();

  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHeroPage(true);
    } else {
      setIsHeroPage(false);
    }

    if (organizationMe || workerMe) {
      setIsUser(true);
    }
  }, [location.pathname]);

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

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
    setVisible(false);
    dispatch(setPhone(""));
  }

  function openLogoutModal() {
    setVisible(false);
    setIsLogoutModalOpen(!isLogoutModalOpen);
  }

  const items = [
    {
      label: <Link to="/dashboard">{t("companies")}</Link>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">{t("articles")}</a>,
      key: "1",
    },
    {
      label: <a href="https://www.aliyun.com">{t("professions")}</a>,
      key: "2",
    },
    {
      label: <a href="https://www.aliyun.com">{t("areas")}</a>,
      key: "3",
    },
    {
      label: <a href="https://www.aliyun.com">{t("aboutUs")}</a>,
      key: "4",
    },
    {
      label: <a href="https://www.aliyun.com">{t("help")}</a>,
      key: "5",
    },
  ];

  function goToHomePage() {
    navigate("/");
  }

  const accessToken = localStorage.getItem("accessToken");

  return (
    <>
      {!isTestPage ? (
        <div className="header-wrapper">
          <div
            className={
              isHeroPage ? "hero__header-wrapper" : "not-hero__header-wrapper"
            }
          >
            <header className="header container">
              <div className="logo__header">
                <img
                  src={isHeroPage ? Logo : LogoBlack}
                  alt="Smart Jobs' Logo"
                  onClick={goToHomePage}
                />
              </div>
              <nav className="mobileHidden">
                <ul>
                  <li>
                    <NavLink to="/vacancy">{t("vacancies")}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/resume">{t("resumeConstructor")}</NavLink>
                  </li>
                  <li>
                    <NavLink to="/help">{t("help")}</NavLink>
                  </li>
                  <li>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      trigger={["click"]}
                    >
                      <a href="/" onClick={(e) => e.preventDefault()}>
                        <Space>
                          {t("supplements")}
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </li>
                </ul>
              </nav>
              <div className="actions__header">
                {!isUser && (
                  <button className="employer-btn__header">
                    {t("forEmployers")}
                  </button>
                )}
                <Select
                  className="select__header"
                  value={currentLanguage}
                  onChange={handleLanguageChange}
                  bordered={false}
                >
                  {languageOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
                {isUser ? (
                  <>
                    <button className="reminder-btn__header">
                      <img src={Bell} alt="bell icon" />
                    </button>
                    <div className="profile__header">
                      <Dropdown
                        menu={{
                          items,
                        }}
                        trigger={["click"]}
                      >
                        <button onClick={(e) => e.preventDefault()}>
                          <Space className="profile__name">
                            <img src={ProfileImg} alt="Pofile Img" width={43} />
                            {organizationMe.result.fistName}
                            {organizationMe.result.lastName}
                            <DownOutlined />
                          </Space>
                        </button>
                      </Dropdown>
                    </div>
                  </>
                ) : accessToken ? (
                  <button
                    className="enter-btn__header"
                    onClick={() => setIsLogoutModalOpen(!isLogoutModalOpen)}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="enter-btn__header"
                    onClick={handleOpenModal}
                  >
                    {t("entrance")}
                  </button>
                )}
                <div className="mobileVisible">
                  <img
                    src={isHeroPage ? WhiteMenu : BlackMenu}
                    onClick={showDrawer}
                    className="hamburger-btn__header"
                    alt=""
                  />
                  <Drawer
                    placement="right"
                    onClose={onClose}
                    open={visible}
                    closeIcon={<CloseIcon />}
                    headerStyle={{
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                    }}
                    className="drawer__header"
                    extra={<img src={DrawerLogo} alt="DrawerLogo" />}
                  >
                    <Select
                      className="drawer-select__header"
                      value={currentLanguage}
                      onChange={handleLanguageChange}
                      bordered={false}
                    >
                      {drawerLanguageOptions.map((option) => (
                        <Select.Option key={option.value} value={option.value}>
                          {option.label}
                        </Select.Option>
                      ))}
                    </Select>

                    {isUser ? (
                      <div className="profile__header drawer-profile__header">
                        <Dropdown
                          menu={{
                            items,
                          }}
                          trigger={["click"]}
                        >
                          <button onClick={(e) => e.preventDefault()}>
                            <Space className="profile__name">
                              <img
                                src={ProfileImg}
                                alt="Pofile Img"
                                width={43}
                              />
                              {organizationMe.result.fistName}
                              {organizationMe.result.lastName}
                              <DownOutlined />
                            </Space>
                          </button>
                        </Dropdown>
                      </div>
                    ) : (
                      <div className="login-buttons__header">
                        <button
                          className="primary-btn"
                          onClick={handleOpenModal}
                        >
                          Kirish
                        </button>
                        <button className="job-seeker-btn__header">
                          Ish qidiruvchilar uchun
                        </button>
                      </div>
                    )}

                    <nav>
                      <ul>
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
                          <Dropdown
                            menu={{
                              items,
                            }}
                            trigger={["click"]}
                          >
                            <a href="/" onClick={(e) => e.preventDefault()}>
                              <Space>
                                {t("supplements")}
                                <DownOutlined />
                              </Space>
                            </a>
                          </Dropdown>
                        </li>
                      </ul>
                    </nav>
                    {isUser && (
                      <button
                        className="default-btn default-btn--user"
                        onClick={openLogoutModal}
                      >
                        {t("exit")}
                      </button>
                    )}
                  </Drawer>
                </div>
              </div>
            </header>
            {location.pathname === "/vacancy" && <VacancyInput />}
          </div>
          <Outlet />
          <Modals open={isModalOpen} setOpen={setIsModalOpen} />
          <LogOutModal
            open={isLogoutModalOpen}
            setOpen={setIsLogoutModalOpen}
          />
        </div>
      ) : (
        <TestHeader />
      )}
    </>
  );
}

export default Header;
