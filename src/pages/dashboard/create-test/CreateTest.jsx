import React from "react";
import { Input, Table } from "antd";

import BackIcon from "../../../assets/images/bg-white50-back-icon.svg";
import BackIconWhite from "../../../assets/images/back-icon-chat.svg";
import DeleteIcon from "../../../assets/images/delete-icon.svg";
import AddIcon from "../../../assets/images/add-circle.svg";
import AddPhotoIcon from "../../../assets/images/add-photo-icon.svg";

import "./createTest.css";
const columns = [
  {
    title: "To'g'ri javob",
    dataIndex: "rightAnswer",
  },
  {
    title: "Javoblar variantlari",
    dataIndex: "answerVariants",
  },
  {
    title: "",
    dataIndex: "delete",
  },
];

const data = [
  {
    key: "1",
    rightAnswer: "A)",
    answerVariants: "Variant 1",
    delete: <img src={DeleteIcon} alt="DeleteIcon" />,
  },
  {
    key: "2",
    rightAnswer: "B)",
    answerVariants: "Variant 2",
    delete: <img src={DeleteIcon} alt="DeleteIcon" />,
  },
  {
    key: "3",
    rightAnswer: "C)",
    answerVariants: "Variant 3",
    delete: <img src={DeleteIcon} alt="DeleteIcon" />,
  },
  {
    key: "4",
    rightAnswer: "D)",
    answerVariants: (
      <Input placeholder="Variant kiriting..." size="small" bordered={false} />
    ),
  },
];

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

const CreateTest = () => {
  const { TextArea } = Input;

  return (
    <div className="create-test">
      <div className="top__test">
        <span>Savollar</span>
        <span>Hisobotlar</span>
      </div>
      <div className="content__create-test">
        <div className="left__create-test">
          <span>
            <img src={BackIcon} alt="BackIcon" />
            Statistika
          </span>
          <div className="question-card__create-test">
            <span>
              <h6>1</h6>
              <p>UX lawdan misollarni belgilang.</p>
            </span>
            <img src={DeleteIcon} alt="DeleteIcon" />
          </div>
          <div className="question-card__create-test">
            <span>
              <h6>2</h6>
              <p>UX lawdan misollarni belgilang.</p>
            </span>
            <img src={DeleteIcon} alt="DeleteIcon" />
          </div>
          <div className="question-card__create-test">
            <span>
              <h6>3</h6>
              <p>UX lawdan misollarni belgilang.</p>
            </span>
            <img src={DeleteIcon} alt="DeleteIcon" />
          </div>
          <button className="add-question-btn">
            <img src={AddIcon} alt="AddIcon" />
            Yangi savol qo'shish
          </button>
        </div>
        <div className="right__create-test">
          <div className="question-input__create-test">
            <img src={BackIconWhite} alt="BackIconWhite" />
            <h4>Test savoli</h4>
            <TextArea
              autoSize={{
                minRows: 3,
                maxRows: 5,
              }}
            />
          </div>
          <button className="add-img-btn">
            Rasm qo'shish
            <img src={AddPhotoIcon} alt="AddPhotoIcon" />
          </button>
          <div style={{ overflow: "auto" }}>
            <Table
              rowSelection={{
                type: "radio",
                ...rowSelection,
              }}
              columns={columns}
              dataSource={data}
              pagination={false}
              style={{ minWidth: "100%" }}
            />
          </div>
          <div className="footer__create-test">
            <button className="default-btn">Bekor qilish</button>
            <button className="primary-btn" type="submit">
              Saqlash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTest;
