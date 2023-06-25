import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, theme } from "antd";
import { useState } from "react";

import { DownOutlined } from "@ant-design/icons";

import SmartjobShortLogo from "../../../assets/images/smartjob-logo-short.svg";
import NotificationWhite from "../../../assets/images/notification-white-icon.svg";
import ExpressLogo from "../../../assets/images/dashboard-express-log.svg";
import SmartJobText from "../../../assets/images/smartjob-text-logo.svg";
import AddCircleWhite from "../../../assets/images/add-circle-dashboard.svg";
import SearchIcon from "../../../assets/images/search-icon-black.svg";
import SearchNavIcon from "../../../assets/images/search-icon-dashboard.svg";
import AddboxIcon from "../../../assets/images/add-box-dashboard.svg";
import JobIcon from "../../../assets/images/job-icon-dashboard.svg";
import SmsIcon from "../../../assets/images/sms-icon-dashboard.svg";
import PeopleIcon from "../../../assets/images/people-icon-dashboard.svg";
import PlanIcon from "../../../assets/images/plan-icon-dashboard.svg";
import TestIcon from "../../../assets/images/test-icon-dashboard.svg";
import ReportIcon from "../../../assets/images/report-icon-dashboard.svg";
import HelpIcon from "../../../assets/images/help-icon-dashboard.svg";
import SettingIcon from "../../../assets/images/setting-icon-dashboard.svg";

import "./sidebar.css";
import { useTranslation } from "react-i18next";
import VacancyList from "../../../pages/dashboard/vacancy-list/VacancyList";
import CreateVacancy from "../../../pages/dashboard/create-vacancy/CreateVacancy";
import Candidates from "../../../pages/dashboard/candidates/Candidates";
import TestList from "../../../pages/dashboard/test-list/TestList";
import TestStatistic from "../../../pages/dashboard/test-statistic/TestStatistic";

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const itemsOfMenu = [
  {
    key: "1",
    icon: <img src={AddboxIcon} alt="AddboxIcon" />,
    label: "Dashboard",
  },
  {
    key: "2",
    icon: <img src={JobIcon} alt="JobIcon" />,
    label: "Vakansiyalar",
  },
  {
    key: "3",
    icon: <img src={SmsIcon} alt="SmsIcon" />,
    label: "Xabarlar",
  },
  {
    key: "4",
    icon: <img src={PeopleIcon} alt="PeopleIcon" />,
    label: "Nomzodlar",
  },
  {
    key: "5",
    icon: (
      <img
        src={SearchNavIcon}
        className="last-icon__dashboard-menu"
        alt="SearchNavIcon"
      />
    ),
    label: "Ish qidiruvchilar",
  },
  {
    key: "6",
    icon: (
      <img
        src={TestIcon}
        className="last-icon__dashboard-menu"
        alt="TestIcon"
      />
    ),
    label: "Testlar",
  },
  {
    key: "7",
    icon: (
      <img
        src={ReportIcon}
        className="last-icon__dashboard-menu"
        alt="ReportIcon"
      />
    ),
    label: "Hisobotlar",
  },
  {
    key: "8",
    icon: (
      <img
        src={PlanIcon}
        className="last-icon__dashboard-menu"
        alt="PlanIcon"
      />
    ),
    label: "Buyurtmalar",
  },
  {
    key: "9",
    icon: (
      <img
        src={HelpIcon}
        className="last-icon__dashboard-menu1"
        alt="PlanIcon"
      />
    ),
    label: "Yordam",
  },
  {
    key: "10",
    icon: (
      <img
        src={SettingIcon}
        className="last-icon__dashboard-menu1"
        alt="PlanIcon"
      />
    ),
    label: "Sozlamalar",
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsed1, setCollapsed1] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");

  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  const { t } = useTranslation();

  const onSearch = (value) => console.log(value);

  const items = [
    {
      label: <a href="https://www.antgroup.com">{t("companies")}</a>,
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

  return (
    <Layout className="dashboard-solya" style={{ position: "relative" }}>
      {window.innerWidth <= 992 ? (
        <Sider
          className="dashboard-sider--mobile"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
            setCollapsed1(!collapsed1);
          }}
        >
          <div className="demo-logo-vertical">
            <img
              src={SmartjobShortLogo}
              className="s-logo--mobile"
              alt="SmartjobShortLogo"
            />
            {!collapsed1 && (
              <img
                src={SmartJobText}
                className="text-logo--mobile"
                alt="SmartJobText"
              />
            )}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            selectedKeys={[selectedMenuItem]}
            onClick={(e) => setSelectedMenuItem(e.key)}
            items={itemsOfMenu}
          />
        </Sider>
      ) : (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          className="dashboard-sider"
        >
          <div className="demo-logo-vertical">
            <img src={SmartjobShortLogo} alt="SmartjobShortLogo" />
            {!collapsed && <img src={SmartJobText} alt="SmartJobText" />}
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            selectedKeys={[selectedMenuItem]}
            onClick={(e) => setSelectedMenuItem(e.key)}
            items={itemsOfMenu}
          />
        </Sider>
      )}
      <Layout>
        <Header
          className={`dashboard-header ${
            collapsed || collapsed1
              ? "dashboard-collapsed-header"
              : "dashboard-collapsed-header--mobile"
          }`}
        >
          <div className="left__dashboard-header">
            {window.innerWidth >= "992" && (
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 64,
                  height: 64,
                  color: "white",
                }}
              />
            )}

            <Search
              placeholder="Qidiruv"
              allowClear
              size="large"
              suffix={<img src={SearchIcon} alt="" width={20} />}
              onSearch={onSearch}
            />
          </div>
          <div className="right__dashboard-header">
            <span className="notification__dashboard-header">
              <img src={NotificationWhite} alt="NotificationWhite" />
            </span>
            <button className="add-btn__dashboard-header">
              <p>Qo'shish</p>
              <img src={AddCircleWhite} alt="AddCircleWhite" />
            </button>
            <div className="profile__dashboard-header">
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <button onClick={(e) => e.preventDefault()}>
                  <img src={ExpressLogo} alt="Pofile Img" width={43} />
                  {window.innerWidth >= 700 && "Express 24"}
                  <DownOutlined />
                </button>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content className="dashboard-content">
          {selectedMenuItem === "1" && <CreateVacancy />}
          {selectedMenuItem === "2" && <VacancyList />}
          {selectedMenuItem === "4" && <Candidates />}
          {selectedMenuItem === "6" && <TestList />}
          {selectedMenuItem === "7" && <TestStatistic />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
