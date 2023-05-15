import React from "react";

import "./companies.css";
import SearchFeed from "../../components/atoms/search-feed/SearchFeed";
import CompaniesCard from "../../components/atoms/companies-card/CompaniesCard";

import { CompaniesDatas } from "../../mock/companies";
import { Col, Row } from "antd";

import Footer from "../../components/layout/footer/Footer";

import PaginationCompany from "../../components/molecules/pagination/Pagination";

const Companies = () => {
  return (
    <>
      <div className="companies container">
        <SearchFeed
          text={"Barcha kompaniyalar: "}
          number={"1250"}
          style={{ display: "flex" }}
        />
        <Row gutter={[24, 24]} className="content__companies">
          {CompaniesDatas.map((item) => (
            <Col xs={24} sm={12} lg={8}>
              <CompaniesCard
                image={item.companyLogo}
                company={item.companyName}
                number={item.vacancyNumber}
              />
            </Col>
          ))}
        </Row>

        <PaginationCompany />
      </div>
      <Footer />
    </>
  );
};

export default Companies;
