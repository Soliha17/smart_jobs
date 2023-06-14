import React from "react";

import { Tabs } from "antd";

import "./profile.css";

import SavedProfile from "./SavedProfile";
import SettingsProfile from "./SettingsProfile";
import Footer from "../../components/layout/footer/Footer";
import Information from "./Information";
import { useTranslation } from "react-i18next";
import MyResumes from "./MyResumes";
import MyApplications from "./MyApplications";

const Profile = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const { t } = useTranslation();

  const items = [
    {
      key: "1",
      label: t("profile"),
      children: <Information />,
    },
    {
      key: "2",
      label: t("myApplications"),
      children: <MyApplications />,
    },
    {
      key: "3",
      label: t("myResumes"),
      children: <MyResumes />,
    },
    {
      key: "4",
      label: t("saved"),
      children: <SavedProfile />,
    },
    {
      key: "5",
      label: t("settings"),
      children: <SettingsProfile />,
    },
  ];

  return (
    <div className="profile">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <Footer />
    </div>
  );
};

export default Profile;
