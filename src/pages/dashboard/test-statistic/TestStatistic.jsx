import React from "react";
import { Table, Tag } from "antd";

import "./testStatistic.css";

import BackIcon from "../../../assets/images/back-bg-white-dashboard.svg";
import DownloadIcon from "../../../assets/images/download-icon-white-dashboard.svg";
import ForwardIcon from "../../../assets/images/forward-arrow-white.svg";

const columns = [
  {
    title: "Kondidat",
    dataIndex: "candidate",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Vaqti",
    dataIndex: "time",
  },
  {
    title: "Ball",
    dataIndex: "score",
  },
  {
    title: "Foizi",
    dataIndex: "percent",
  },
];

const data = [
  {
    key: "1",
    candidate: "John Rakhimiy",
    status: <Tag color="green">Bajarildi</Tag>,
    time: "20 min",
    score: "68/100",
    percent: "68%",
  },
  {
    key: "2",
    candidate: "John Rakhimiy",
    status: <Tag color="lime">Jarayonda</Tag>,
    time: "20 min",
    score: "68/100",
    percent: "68%",
  },
  {
    key: "3",
    candidate: "John Rakhimiy",
    status: <Tag color="green">Bajarildi</Tag>,
    time: "20 min",
    score: "68/100",
    percent: "68%",
  },
];

const TestStatistic = () => {
  return (
    <div className="test-statistic">
      <div className="top__test">
        <span>Savollar</span>
        <span>Hisobotlar</span>
      </div>
      <div className="header__test-statistic">
        <span>
          <img src={BackIcon} alt="BackIcon" />
          Statistika
        </span>
        <div>
          <button className="primary-btn">
            Yuklash <img src={DownloadIcon} alt="DownloadIcon" />
          </button>
          <button className="primary-btn">
            Testni ko'rish <img src={ForwardIcon} alt="ForwardIcon" />
          </button>
        </div>
      </div>
      <div className="cards__test-statistic">
        <div className="card__test-statistic">
          <h6>Status</h6>
          <p>Nashr qilingan</p>
        </div>
        <div className="card__test-statistic">
          <h6>Vaqt limit</h6>
          <p>25 min</p>
        </div>
        <div className="card__test-statistic">
          <h6>Savollar soni</h6>
          <p>23</p>
        </div>
        <div className="card__test-statistic">
          <h6>O'rtacha ball</h6>
          <p>56</p>
        </div>
        <div className="card__test-statistic">
          <h6>O'tish ball</h6>
          <p>86</p>
        </div>
        <div className="card__test-statistic">
          <h6>Kondidatlar</h6>
          <p>12</p>
        </div>
      </div>
      <div className="table__test-statistic" style={{ overflow: "auto" }}>
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          style={{ minWidth: "100%" }}
        />
      </div>
    </div>
  );
};

export default TestStatistic;
