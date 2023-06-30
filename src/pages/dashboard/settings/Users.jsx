import React, { useState } from "react";
import { Button, Dropdown, Table } from "antd";

import "./settings.css";

import GreenDot from "../../../assets/images/green-point.svg";
import ProfileIcon from "../../../assets/images/profile-icon-dashboard.svg";
import ThreeDots from "../../../assets/images/three-dots.svg";
import AddUserSettings from "./AddUserSettings";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
        className="dropdown-item__vacancy-full"
      >
        Explain
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
        className="dropdown-item__vacancy-full"
      >
        Complain
      </a>
    ),
  },
];

const columns = [
  {
    title: "T/r",
    dataIndex: "number",
  },
  {
    title: "Ism Familiyasi",
    dataIndex: "fullname",
  },
  {
    title: "Telefon",
    dataIndex: "phone",
  },
  {
    title: "E-mail",
    dataIndex: "email",
  },
  {
    title: "Roli",
    dataIndex: "roll",
  },
  {
    title: "",
    dataIndex: "dots",
  },
];

const data = [
  {
    key: "1",
    number: 1,
    fullname: (
      <span className="profile-group__candidates">
        <img src={ProfileIcon} alt="ProfileIcon" />
        John Rakhimiy
      </span>
    ),
    phone: "+984 676 12 34",
    email: "Rakhimiy@gmail.com",
    roll: (
      <span className="admin-group__users">
        <img src={GreenDot} alt="GreenDot" />
        Admin
      </span>
    ),
    dots: (
      <span className="three-dots">
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow
          trigger={["click"]}
        >
          <Button>
            <img src={ThreeDots} alt="ThreeDots" />
          </Button>
        </Dropdown>
      </span>
    ),
  },
  {
    key: "2",
    number: 2,
    fullname: (
      <span className="profile-group__candidates">
        <img src={ProfileIcon} alt="ProfileIcon" />
        John Rakhimiy
      </span>
    ),
    phone: "+984 676 12 34",

    email: "Rakhimiy@gmail.com",
    roll: (
      <span className="admin-group__users">
        <img src={GreenDot} alt="GreenDot" />
        Admin
      </span>
    ),
    dots: (
      <span className="three-dots">
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow
          trigger={["click"]}
        >
          <Button>
            <img src={ThreeDots} alt="ThreeDots" />
          </Button>
        </Dropdown>
      </span>
    ),
  },
  {
    key: "3",
    number: 3,
    fullname: (
      <span className="profile-group__candidates">
        <img src={ProfileIcon} alt="ProfileIcon" />
        John Rakhimiy
      </span>
    ),
    phone: "+984 676 12 34",

    email: "Rakhimiy@gmail.com",
    roll: (
      <span className="admin-group__users">
        <img src={GreenDot} alt="GreenDot" />
        Admin
      </span>
    ),
    dots: (
      <span className="three-dots">
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow
          trigger={["click"]}
        >
          <Button>
            <img src={ThreeDots} alt="ThreeDots" />
          </Button>
        </Dropdown>
      </span>
    ),
  },
  {
    key: "4",
    number: 4,
    fullname: (
      <span className="profile-group__candidates">
        <img src={ProfileIcon} alt="ProfileIcon" />
        John Rakhimiy
      </span>
    ),
    phone: "+984 676 12 34",
    email: "Rakhimiy@gmail.com",
    roll: (
      <span className="admin-group__users">
        <img src={GreenDot} alt="GreenDot" />
        Admin
      </span>
    ),
    dots: (
      <span className="three-dots">
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow
          trigger={["click"]}
        >
          <Button>
            <img src={ThreeDots} alt="ThreeDots" />
          </Button>
        </Dropdown>
      </span>
    ),
  },
];

const Users = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

  return (
    <div className="users">
      <div className="header__users">
        <h2>Foydalanuvchilar</h2>
        <button
          className="primary-btn"
          onClick={() => setIsAddUserModalOpen(!isAddUserModalOpen)}
        >
          Foydalanuvchi qo'shish
        </button>
      </div>

      <div className="table__users">
        <div style={{ overflow: "auto" }}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            style={{ minWidth: "100%" }}
          />
        </div>
      </div>
      {
        <AddUserSettings
          open={isAddUserModalOpen}
          setOpen={setIsAddUserModalOpen}
        />
      }
    </div>
  );
};

export default Users;
