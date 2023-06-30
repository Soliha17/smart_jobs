import React from "react";

import "./settings.css";

import { Tabs } from "antd";

import GeneralSettings from "./GeneralSettings";
import NotificationsSettings from "./NotificationsSettings";
import ChangeParol from "./ChangeParol";
import Users from "./Users";
import CompanyDatas from "./CompanyDatas";

const Settings = () => {
  const items = [
    {
      key: "1",
      label: "Umumiy",
      children: <GeneralSettings />,
    },
    {
      key: "2",
      label: "Kompaniya ma'lumotlari",
      children: <CompanyDatas />,
    },
    {
      key: "3",
      label: "Foydalanuvchilar",
      children: <Users />,
    },
    {
      key: "4",
      label: "Bildirishnomalar",
      children: <NotificationsSettings />,
    },
    {
      key: "5",
      label: "Parolni o'zgartirish",
      children: <ChangeParol />,
    },
  ];

  function onChange() {
    console.log("onchange");
  }

  return (
    <div className="settings">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default Settings;
