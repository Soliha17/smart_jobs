import React, { useState } from "react";
import { Table, Tag } from "antd";

import "./testList.css";

import AddTestModal from "./AddTestModal";

const { CheckableTag } = Tag;

const tagsData = ["Barchasi", "Aktiv", "Arxivdagilar"];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Test nomi",
    dataIndex: "testName",
  },
  {
    title: "Test kategoriyasi",
    dataIndex: "testCategory",
  },
  {
    title: "Savollar soni",
    dataIndex: "emountOfQuestions",
  },
  {
    title: "Vaqti",
    dataIndex: "time",
  },
  {
    title: "O'rtacha bal",
    dataIndex: "averageScore",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const data = [
  {
    key: "1",
    id: 1234,
    testName: "UX/UI dizayner",
    testCategory: "Dizayn",
    emountOfQuestions: "123",
    time: "20 min",
    averageScore: "68%",
    status: <Tag color="lime">Ko'rish</Tag>,
  },
  {
    key: "2",
    id: 1234,
    testName: "UX/UI dizayner",
    testCategory: "Dizayn",
    emountOfQuestions: "123",
    time: "20 min",
    averageScore: "68%",
    status: <Tag color="purple">Ko'rish</Tag>,
  },
  {
    key: "3",
    id: 1234,
    testName: "UX/UI dizayner",
    testCategory: "Dizayn",
    emountOfQuestions: "123",
    time: "20 min",
    averageScore: "68%",
    status: <Tag color="green">Ko'rish</Tag>,
  },
  {
    key: "4",
    id: 1234,
    testName: "UX/UI dizayner",
    testCategory: "Dizayn",
    emountOfQuestions: "123",
    time: "20 min",
    averageScore: "68%",
    status: <Tag color="magenta">Ko'rish</Tag>,
  },
  {
    key: "5",
    id: 1234,
    testName: "UX/UI dizayner",
    testCategory: "Dizayn",
    emountOfQuestions: "123",
    time: "20 min",
    averageScore: "68%",
    status: <Tag color="gold">Ko'rish</Tag>,
  },
];

const TestList = () => {
  const [selectedTags, setSelectedTags] = useState(["Barchasi"]);
  const [isAddTestModalOpen, setIsAddTestModalOpen] = useState(false);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className="candidates">
      <div className="header__test-list">
        <h2>Testlar</h2>
        <button
          className="primary-btn"
          onClick={() => setIsAddTestModalOpen(!isAddTestModalOpen)}
        >
          Test qo'shish
        </button>
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
            columns={columns}
            dataSource={data}
            pagination={false}
            style={{ minWidth: "100%" }}
          />
        </div>
      </div>
      {
        <AddTestModal
          open={isAddTestModalOpen}
          setOpen={setIsAddTestModalOpen}
        />
      }
    </div>
  );
};

export default TestList;
