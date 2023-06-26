import React from "react";
import { Input, Table, Tag } from "antd";

import "./orders.css";

import FiltrIcon from "../../../assets/images/filtr-myapplications.svg";
import SearchIcon from "../../../assets/images/search-hero-input.svg";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Lavozimi",
    dataIndex: "position",
  },
  {
    title: "Bo'lim/Filial",
    dataIndex: "fillial",
  },
  {
    title: "Vaqti",
    dataIndex: "time",
  },
  {
    title: "Holati",
    dataIndex: "condition",
  },
  {
    title: "Javobgar",
    dataIndex: "responsible",
  },
  {
    title: "Boshlanish / Tugash",
    dataIndex: "start",
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
    position: "UX/UI dizayner",
    fillial: "Dizayn",
    time: "12.06.2023",
    condition: "Ochiq",
    responsible: "Jonibek Negmurodov Recrutor",
    start: "12.06.2023  / 12.06.2023",
    status: <Tag color="lime">Ko'rish</Tag>,
  },
  {
    key: "2",
    id: 1234,
    position: "UX/UI dizayner",
    fillial: "Dizayn",
    time: "12.06.2023",
    condition: "Ochiq",
    responsible: "Jonibek Negmurodov Recrutor",
    start: "12.06.2023 /  12.06.2023",
    status: <Tag color="lime">Ko'rish</Tag>,
  },
  {
    key: "3",
    id: 1234,
    position: "UX/UI dizayner",
    fillial: "Dizayn",
    time: "12.06.2023",
    condition: "Ochiq",
    responsible: "Jonibek Negmurodov Recrutor",
    start: "12.06.2023 /  12.06.2023",
    status: <Tag color="lime">Ko'rish</Tag>,
  },
  {
    key: "4",
    id: 1234,
    position: "UX/UI dizayner",
    fillial: "Dizayn",
    time: "12.06.2023",
    condition: "Ochiq",
    responsible: "Jonibek Negmurodov Recrutor",
    start: "12.06.2023 /  12.06.2023",
    status: <Tag color="lime">Ko'rish</Tag>,
  },
  {
    key: "5",
    id: 1234,
    position: "UX/UI dizayner",
    fillial: "Dizayn",
    time: "12.06.2023",
    condition: "Ochiq",
    responsible: "Jonibek Negmurodov Recrutor",
    start: "12.06.2023 /  12.06.2023",
    status: <Tag color="lime">Ko'rish</Tag>,
  },
];

const Orders = () => {
  const { Search } = Input;

  return (
    <div className="orders">
      <h2>Buyurtmalar</h2>
      <div className="header__orders">
        <div>
          <Search
            placeholder="Izlash"
            size="large"
            suffix={<img src={SearchIcon} alt="SearchIcon" />}
            // onSearch={onSearch}
            style={{ width: 300 }}
          />
          <button className="white-btn">
            Filter
            <img src={FiltrIcon} alt="filtr" />
          </button>
        </div>
        <button className="primary-btn">Buyurtma yaratish</button>
      </div>
      <div className="table__orders">
        <div style={{ overflow: "auto" }}>
          <Table
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

export default Orders;
