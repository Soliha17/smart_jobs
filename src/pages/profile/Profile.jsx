import React from "react";

import "./profile.css";
import { Tabs } from "antd";
import SavedProfile from "./SavedProfile";

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
      children: `Content of Tab Pane 5`,
    },
  ];

  return (
    <div className="profile">
      <div className="container">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Profile;
