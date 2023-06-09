import React from "react";
import SectionsHeader from "../../atoms/sections-header/SectionsHeader";

import "./companiesSection.css";
import { Col, Row } from "antd";

import Logo1 from "../../../assets/images/logo1.png";
import Logo2 from "../../../assets/images/logo2.png";
import Logo3 from "../../../assets/images/logo3.png";
import Logo4 from "../../../assets/images/logo4.png";
import Logo5 from "../../../assets/images/logo5.png";
import Logo6 from "../../../assets/images/logo6.png";
import Logo7 from "../../../assets/images/logo7.png";
import Logo8 from "../../../assets/images/logo8.png";
import Logo9 from "../../../assets/images/logo9.png";
import Logo10 from "../../../assets/images/logo10.png";
import Logo11 from "../../../assets/images/logo11.png";
import Logo12 from "../../../assets/images/logo12.png";
import Logo13 from "../../../assets/images/logo13.png";
import Logo14 from "../../../assets/images/logo14.png";
import Logo15 from "../../../assets/images/logo15.png";
import Logo16 from "../../../assets/images/logo16.png";
import Logo17 from "../../../assets/images/logo17.png";
import Logo18 from "../../../assets/images/logo18.png";

const CompaniesSection = () => {

  return (
    <div className="companies-section">
      <SectionsHeader
        children={{
          title: "companies",
          text: "chooseTheJobThatSuitsYou",
          btnText: "companies",
          link: "/companies",
        }}
      />
      <div className="content__companies-section container">
        <Row gutter={[40, 40]} justify={"space-between"}>
          <Col
            xs={{ span: 12 }}
            sm={{ span: 5 }}
            lg={{ span: 4 }}
            justify="center"
          >
            <img src={Logo1} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo2} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo3} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo4} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo5} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo6} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo7} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo8} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo9} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo10} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo11} alt="logo of company" />
          </Col>

          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo12} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo13} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo14} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo15} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo16} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo17} alt="logo of company" />
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 5 }} lg={{ span: 4 }}>
            <img src={Logo18} alt="logo of company" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CompaniesSection;
