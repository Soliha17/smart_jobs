import React, { useState } from "react";
import { Space, Table, Tag } from "antd";

import "./candidates.css";

import FilterIcon from "../../../assets/images/filter-icon.svg";
import ProfileIcon from "../../../assets/images/profile-icon-dashboard.svg";

const { CheckableTag } = Tag;

const tagsData = [
  "Barchasi",
  "Jarrayonda",
  "Qabul qilingan",
  "Rad etilgan",
  "Zahira",
  "Qora ro'yxat",
];

const columns = [
  {
    title: "Ism Familiyasi",
    dataIndex: "fullname",
  },
  {
    title: "Arizasi",
    dataIndex: "application",
  },
  {
    title: "Bosqich",
    dataIndex: "stage",
  },
  {
    title: "Manbaa",
    dataIndex: "source",
  },
  {
    title: "Vaqti",
    dataIndex: "time",
  },
  {
    title: "Kim qo'shgan",
    dataIndex: "whoAdded",
  },
  {
    title: "ID",
    dataIndex: "id",
  },
];

const data = [
  {
    key: "1",
    fullname: (
      <span className="profile-group__candidates">
        <img src={ProfileIcon} alt="ProfileIcon" />
        John Rakhimiy
      </span>
    ),
    application: "Mahsulot dizayneri",
    stage: <Tag color="gold">Ko'rish</Tag>,
    source: "click jobs",
    time: "18.06.2023",
    whoAdded: "John Doe",
    id: 1234,
  },
  {
    key: "2",
    fullname: (
      <span className="profile-group__candidates">
        <img src={ProfileIcon} alt="ProfileIcon" />
        John Rakhimiy
      </span>
    ),
    application: "Mahsulot dizayneri",
    stage: <Tag color="magenta">Ko'rish</Tag>,
    source: "click jobs",
    time: "18.06.2023",
    whoAdded: "John Doe",
    id: 1234,
  },
  {
    key: "3",
    fullname: (
      <span className="profile-group__candidates">
        <img src={ProfileIcon} alt="ProfileIcon" />
        John Rakhimiy
      </span>
    ),
    application: "Mahsulot dizayneri",
    stage: <Tag color="green">Ko'rish</Tag>,
    source: "click jobs",
    time: "18.06.2023",
    whoAdded: "John Doe",
    id: 1234,
  },
  {
    key: "4",
    fullname: (
      <span className="profile-group__candidates">
        <img src={ProfileIcon} alt="ProfileIcon" />
        John Rakhimiy
      </span>
    ),
    application: "Mahsulot dizayneri",
    stage: <Tag color="purple">Ko'rish</Tag>,
    source: "click jobs",
    time: "18.06.2023",
    whoAdded: "John Doe",
    id: 1234,
  },
  {
    key: "5",
    fullname: (
      <span className="profile-group__candidates">
        <img src={ProfileIcon} alt="ProfileIcon" />
        John Rakhimiy
      </span>
    ),
    application: "Mahsulot dizayneri",
    stage: <Tag color="lime">Ko'rish</Tag>,
    source: "click jobs",
    time: "18.06.2023",
    whoAdded: "John Doe",
    id: 1234,
  },
];

const Candidates = () => {
  const [selectedTags, setSelectedTags] = useState(["Barchasi"]);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <div className="candidates">
      <div className="header__candidates">
        <h2>Nomzodlar</h2>
        <div className="btn-group__candidates">
          <button className="white-btn">
            Filter <img src={FilterIcon} alt="FilterIcon" />
          </button>
          <button className="white-btn">Export</button>
          <button className="white-btn">Nomzodlar bazasi</button>
          <button className="primary-btn">Nomzod qo'shish</button>
        </div>
      </div>
      <div className="feed__candidates">
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.includes(tag)}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
      <div className="table__candidates">
        <div style={{ overflow: "auto" }}>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={data}
            pagination={false}
            style={{ minWidth: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Candidates;
