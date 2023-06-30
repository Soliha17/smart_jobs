import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, Select } from "antd";

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
import LanguageIcon from "../../../assets/images/language-select-icon.svg";
import LightmodeIcon from "../../../assets/images/light-mode-icon.svg";
import ProfilIcon from "../../../assets/images/profil-icon-dashboard.svg";

import "./sidebar.css";
// import { useTranslation } from "react-i18next";
import VacancyList from "../../../pages/dashboard/vacancy-list/VacancyList";
// import CreateVacancy from "../../../pages/dashboard/create-vacancy/CreateVacancy";
import Candidates from "../../../pages/dashboard/candidates/Candidates";
import TestList from "../../../pages/dashboard/test-list/TestList";
import TestStatistic from "../../../pages/dashboard/test-statistic/TestStatistic";
import CreateTest from "../../../pages/dashboard/create-test/CreateTest";
import TestResult from "../../../pages/dashboard/test-result/TestResult";
import JobSeekers from "../../../pages/dashboard/job-seekers/JobSeekers";
// import JobSeekerPage from "../../../pages/dashboard/job-seekers/JobSeekerPage";
// import Orders from "../../../pages/dashboard/orders/Orders";
import CreateOrder from "../../../pages/dashboard/create-order/CreateOrder";
import Chat from "../../../pages/dashboard/chat/Chat";
import Notifications from "../../../pages/dashboard/notifications/Notifications";
import Settings from "../../../pages/dashboard/settings/Settings";

const { Header, Sider, Content } = Layout;
const { Search } = Input;

const languageOptions = [
  { value: "en", label: "English" },
  { value: "ru", label: "Russian" },
  { value: "uz", label: "Uzbek" },
  // Add more language options as needed
];

const items = [
  {
    key: "1",
    label: (
      <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img src={ProfilIcon} alt="ProfilIcon" />
        Profil
      </span>
    ),
  },
  {
    key: "2",
    label: (
      <span style={{ display: "flex", alignItems: "center" }}>
        <img src={LanguageIcon} alt="LanguageIcon" />
        <Select
          defaultValue="en"
          bordered={false}
          onClick={(e) => e.stopPropagation()}
          style={{ width: "100%" }}
        >
          {languageOptions.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </span>
    ),
  },
  {
    key: "3",
    label: (
      <span style={{ display: "flex", alignItems: "center" }}>
        <img src={LightmodeIcon} alt="LightmodeIcon" />

        <Select
          defaultValue="day"
          bordered={false}
          style={{ width: "100%" }}
          onClick={(e) => e.stopPropagation()}
        >
          <Select.Option value="day">Kunduzgi rejim</Select.Option>
          <Select.Option value="night">Qorong'i rejim</Select.Option>
        </Select>
      </span>
    ),
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [collapsed1, setCollapsed1] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("1");
  const [selectedInsideMenuItem, setSelectedInsideMenuItem] = useState("7.1");
  const [dropdownVisible, setDropdownVisible] = useState(false); // Add dropdownVisible state

  // const handleInsideMenuSelect = ({ key }) => {
  //   setSelectedInsideMenuItem(key);
  // };

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
      dropdown: true,
      dropdownContent: (
        <Menu>
          <Menu.Item key="4.1">Option 1</Menu.Item>
          <Menu.Item key="4.2">Option 2</Menu.Item>
          <Menu.Item key="4.3">Option 3</Menu.Item>
        </Menu>
      ),
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
      dropdown: true,
      dropdownContent: (
        <Menu>
          <Menu.Item
            key="7.1"
            onClick={(e) => setSelectedInsideMenuItem(e.key)}
          >
            Test statistikasi
          </Menu.Item>
          <Menu.Item
            key="7.2"
            onClick={(e) => setSelectedInsideMenuItem(e.key)}
          >
            Test natijalari
          </Menu.Item>
          <Menu.Item
            key="7.3"
            onClick={(e) => setSelectedInsideMenuItem(e.key)}
          >
            Option 3
          </Menu.Item>
        </Menu>
      ),
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

  console.log("selectedMenuItem: ", selectedMenuItem);
  console.log("selectedInsideMenuItem: ", selectedInsideMenuItem);

  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  // const { i18n, t } = useTranslation();

  const onSearch = (value) => console.log(value);

  // const currentLanguage = i18n.language;

  // const handleLanguageChange = (value) => {
  //   i18n.changeLanguage(value);
  // };

  // const items = [
  //   {
  //     label: (
  //       <a href="https://www.antgroup.com">
  //         <img src="" alt="" />
  //         Profil
  //       </a>
  //     ),
  //     key: "0",
  //   },
  //   {
  //     label: (
  //       <Select
  //         value={currentLanguage}
  //         onChange={handleLanguageChange}
  //         bordered={false}
  //       >
  //         {languageOptions.map((option) => (
  //           <Select.Option key={option.value} value={option.value}>
  //             {option.label}
  //           </Select.Option>
  //         ))}
  //       </Select>
  //     ),
  //     key: "1",
  //   },
  //   {
  //     label: <a href="https://www.aliyun.com">{t("professions")}</a>,
  //     key: "2",
  //   },
  //   {
  //     label: <a href="https://www.aliyun.com">{t("areas")}</a>,
  //     key: "3",
  //   },
  //   {
  //     label: <a href="https://www.aliyun.com">{t("aboutUs")}</a>,
  //     key: "4",
  //   },
  //   {
  //     label: <a href="https://www.aliyun.com">{t("help")}</a>,
  //     key: "5",
  //   },
  // ];

  const handleDropdownVisibleChange = (visible) => {
    setDropdownVisible(visible);
  };

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
            // items={itemsOfMenu}
          >
            {itemsOfMenu.map((item) =>
              item.dropdown ? (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Dropdown overlay={item.dropdownContent}>
                    <span
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      {item.label} <DownOutlined />
                    </span>
                  </Dropdown>
                </Menu.Item>
              ) : (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              )
            )}
          </Menu>
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
                visible={dropdownVisible} // Pass the dropdownVisible state
                onVisibleChange={handleDropdownVisibleChange} // Handle visibility change
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
          {selectedMenuItem === "1" && <Notifications />}
          {/* {selectedMenuItem === "1" && <CreateVacancy />} */}
          {selectedMenuItem === "2" && <VacancyList />}
          {selectedMenuItem === "3" && <Chat />}
          {/* {selectedMenuItem === "3" && <Orders />} */}
          {selectedMenuItem === "4" && <Candidates />}
          {selectedMenuItem === "5" && <JobSeekers />}
          {selectedMenuItem === "6" && <TestList />}
          {selectedMenuItem === "7" && selectedInsideMenuItem === "7.1" && (
            <TestStatistic />
          )}
          {selectedMenuItem === "7" && selectedInsideMenuItem === "7.2" && (
            <TestResult />
          )}
          {selectedMenuItem === "8" && <CreateTest />}
          {selectedMenuItem === "9" && <CreateOrder />}
          {selectedMenuItem === "10" && <Settings />}

          {/* {selectedMenuItem === "10" && <JobSeekerPage />} */}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
