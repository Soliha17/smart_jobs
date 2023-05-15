import { Pagination } from "antd";

import "./pagination.css";

import PrevIcon from "../../../assets/images/prev.svg";

const itemRender = (_, type, originalElement) => {
  if (type === "prev") {
    return (
      <div className="button-group">
        <img src={PrevIcon} className="prev-img" alt="prev icon" />
        <a>Orqaga</a>
      </div>
    );
  }
  if (type === "next") {
    return (
      <div className="button-group">
        <a>Keyingisi</a>
        <img src={PrevIcon} alt="prev icon" />
      </div>
    );
  }
  return originalElement;
};

const PaginationCompany = () => (
  <div className="pagination-company">
    <Pagination total={100} responsive={true} itemRender={itemRender} />
  </div>
);
export default PaginationCompany;
