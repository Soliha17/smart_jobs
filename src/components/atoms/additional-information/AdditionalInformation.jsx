import React, { useState } from "react";

import "./additionalInformation.css";
import { Button, Col, Form, Row, Select, message } from "antd";
import LabeledInput from "../../molecules/labeled-input/LabeledInput";

import Trash from "../../../assets/images/trash-icon.svg";
import AddCircle from "../../../assets/images/add-circle.svg";
import AcademicResultDrawer from "../../molecules/drawer/AcademicResult";
import FamilyInformationDrawer from "../../molecules/drawer/FamiliyInformation";
import PortfolioDrawer from "../../molecules/drawer/PortfolioDrawer";
import LicenseDrawer from "../../molecules/drawer/LicenseDrawer";

const AdditionalInformation = ({ props }) => {
  const [form] = Form.useForm();

  const [openAcademicResDrawer, setOpenAcademicResDrawer] = useState(false);

  const [openFamiliyInformationDrawer, setOpenFamiliyInformationDrawer] =
    useState(false);

  const [openPortfolioDrawer, setOpenPortfolioDrawer] = useState(false);

  const [openLicense, setOpenLicense] = useState(false);

  // const [requiredMark, setRequiredMarkType] = useState("optional");
  // const onRequiredTypeChange = ({ requiredMarkValue }) => {
  //   setRequiredMarkType(requiredMarkValue);
  // };

  const next = props.next;
  const prev = props.prev;

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("Muvaffaqiyatli saqlandi!");
    next(0);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="header__resume">
        <h3>Qo’shimcha ma’lumotlar</h3>
        <p>O’zingiz haqingizda asosiy ma’lumotlani kiriting</p>
      </div>
      <div className="content__resume">
        <Form
          form={form}
          layout="vertical"
          // validateMessages={validateMessages}
          name="basic"
          initialValues={
            {
              // remember: true,
              // requiredMarkValue: requiredMark,
            }
          }
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[24, 34]}>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="Biladigan tillaringizni kiriting"
                labelFor="languages"
                req={true}
                input={
                  <span className="language-group">
                    <div>
                      <Select
                        defaultValue={"uzb"}
                        size="large"
                        onChange={onChange}
                        options={[
                          {
                            value: "uzb",
                            label: "O'zbek tili",
                          },
                          {
                            value: "russian",
                            label: "Rus tili",
                          },
                          {
                            value: "english",
                            label: "Ingliz tili",
                          },
                        ]}
                      />
                      <Select
                        defaultValue={"b1"}
                        size="large"
                        onChange={onChange}
                        options={[
                          {
                            value: "b1",
                            label: "B1",
                          },
                          {
                            value: "a2",
                            label: "A2",
                          },
                        ]}
                      />
                      <img src={Trash} width={24} alt="Trash icon" />
                    </div>
                    <div>
                      <Select
                        placeholder="Til"
                        size="large"
                        onChange={onChange}
                        options={[
                          {
                            value: "uzb",
                            label: "O'zbek",
                          },
                          {
                            value: "russian",
                            label: "Rus",
                          },
                        ]}
                      />
                      <Select
                        placeholder="Daraja"
                        size="large"
                        onChange={onChange}
                        options={[
                          {
                            value: "b1",
                            label: "B1",
                          },
                          {
                            value: "a2",
                            label: "A2",
                          },
                        ]}
                      />
                    </div>
                  </span>
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="Akademik natijalar"
                labelFor="languages"
                input={
                  <Button
                    block
                    size="large"
                    onClick={() => setOpenAcademicResDrawer(true)}
                    icon={<img src={AddCircle} alt="" />}
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    Qo'shish
                  </Button>
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="Litsenizya va sertifikatlar"
                labelFor="languages"
                input={
                  <Button
                    block
                    size="large"
                    onClick={() => setOpenLicense(true)}
                    icon={<img src={AddCircle} alt="" />}
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    Qo'shish
                  </Button>
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="Oila ma'lumotlari"
                labelFor="languages"
                input={
                  <Button
                    block
                    size="large"
                    onClick={() => setOpenFamiliyInformationDrawer(true)}
                    icon={<img src={AddCircle} alt="" />}
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    Qo'shish
                  </Button>
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="Portfolio"
                labelFor="languages"
                input={
                  <Button
                    block
                    size="large"
                    onClick={() => setOpenPortfolioDrawer(true)}
                    icon={<img src={AddCircle} alt="" />}
                    style={{
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    Qo'shish
                  </Button>
                }
              />
            </Col>
          </Row>
          <div className="footer__resume">
            <Button size="large" onClick={() => prev(2)}>
              Orqaga
            </Button>
            <button
              size="large"
              className="primary-btn"
              type="submit"
              style={{ marginLeft: "auto" }}
            >
              Saqlash
            </button>
          </div>
        </Form>
      </div>
      <AcademicResultDrawer
        open={openAcademicResDrawer}
        setOpen={setOpenAcademicResDrawer}
      />
      <FamilyInformationDrawer
        open={openFamiliyInformationDrawer}
        setOpen={setOpenFamiliyInformationDrawer}
      />
      <PortfolioDrawer
        open={openPortfolioDrawer}
        setOpen={setOpenPortfolioDrawer}
      />

      <LicenseDrawer open={openLicense} setOpen={setOpenLicense} />
    </>
  );
};

export default AdditionalInformation;
