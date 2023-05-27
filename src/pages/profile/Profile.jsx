import React from "react";

import { Tabs } from "antd";

import "./profile.css";

import SavedProfile from "./SavedProfile";
import SettingsProfile from "./SettingsProfile";
import Footer from "../../components/layout/footer/Footer";

const Profile = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Profil`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Arizalarim`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Rezyumelarim`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: `Saqlanganlar`,
      children: <SavedProfile />,
    },
    {
      key: "5",
      label: `Sozlamalar`,
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
