import React, { useState } from "react";

import "./additionalInformation.css";
import { Button, Col, Form, Row, Select, message } from "antd";
import LabeledInput from "../../molecules/labeled-input/LabeledInput";

import AddCircle from "../../../assets/images/add-circle.svg";
import AcademicResultDrawer from "../../molecules/drawer/AcademicResult";
import FamilyInformationDrawer from "../../molecules/drawer/FamiliyInformation";
import PortfolioDrawer from "../../molecules/drawer/PortfolioDrawer";
import LicenseDrawer from "../../molecules/drawer/LicenseDrawer";

import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const AdditionalInformation = ({ props }) => {
  const [form] = Form.useForm();

  const [openAcademicResDrawer, setOpenAcademicResDrawer] = useState(false);

  const [openFamiliyInformationDrawer, setOpenFamiliyInformationDrawer] =
    useState(false);

  const [openPortfolioDrawer, setOpenPortfolioDrawer] = useState(false);

  const [openLicense, setOpenLicense] = useState(false);

  const [language, setLanguage] = useState("");

  const [level, setLevel] = useState("");

  // const [requiredMark, setRequiredMarkType] = useState("optional");
  // const onRequiredTypeChange = ({ requiredMarkValue }) => {
  //   setRequiredMarkType(requiredMarkValue);
  // };

  const next = props.next;
  const prev = props.prev;

  const onChangeLanguage = (date, dateString) => {
    console.log(date, dateString);
    console.log(date);
    setLanguage(date);
  };

  const onChangeLevel = (date, dateString) => {
    console.log(date, dateString);
    console.log(date);
    setLevel(date);
  };

  // const onChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };

  const onFinish = (datas) => {
    console.log("Success:", datas);
    message.success("Muvaffaqiyatli saqlandi!");
    next(0);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="header__resume">
        <h3> {t("additionalInformation")} </h3>
        <p> {t("enterYourBasicInformation")} </p>
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
          <Row gutter={[24, 8]}>
            <Col xs={24}>
              <p className="language-label">{t("enterTheLanguagesYouKnow")}</p>
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Row gutter={[15, 12]}>
                        <Col xs={24} sm={11}>
                          <Form.Item
                            {...restField}
                            name={[name, "first"]}
                            // rules={[
                            //   {
                            //     required: true,
                            //     message: "Missing first name",
                            //   },
                            // ]}
                          >
                            <Select
                              defaultValue={language}
                              // value={language}
                              // onChange={()=>setLanguage(language)}
                              // placeholder="adsnk"
                              size="large"
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
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={11}>
                          <Form.Item
                            {...restField}
                            name={[name, "last"]}
                            // rules={[
                            //   {
                            //     required: true,
                            //     message: "Missing last name",
                            //   },
                            // ]}
                          >
                            <Select
                              defaultValue={level}
                              // placeholder="Daraja tanlang"
                              // value={level}
                              size="large"
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
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={2}>
                          <Button
                            type="dashed"
                            size="large"
                            className="action-btn__lan-resume"
                            onClick={() => remove(name)}
                            block
                          >
                            <span className="hidden-text__lan-resume">
                              {t("turnOff")}
                            </span>
                            <DeleteOutlined />
                          </Button>
                        </Col>
                      </Row>
                    ))}
                    <Row gutter={[15, 12]} className="main-lan-row__resume">
                      <Col xs={24} sm={11}>
                        <Form.Item>
                          <Select
                            // defaultValue={"uzb"}
                            placeholder={t("chooseALanguage")}
                            size="large"
                            onChange={onChangeLanguage}
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
                        </Form.Item>
                      </Col>
                      <Col sm={11} xs={24}>
                        <Form.Item>
                          <Select
                            // defaultValue={"b1"}
                            placeholder={t("selectALevel")}
                            size="large"
                            onChange={onChangeLevel}
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
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={2}>
                        <Form.Item>
                          <Button
                            className="action-btn__lan-resume"
                            size="large"
                            type="dashed"
                            onClick={() => add()}
                            block
                          >
                            <span className="hidden-text__lan-resume">
                              {t("add")}
                            </span>
                            <PlusOutlined />
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                )}
              </Form.List>
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("academicResults")}
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
                    {t("add")}
                  </Button>
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("licenseAndCertificates")}
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
                    {t("add")}
                  </Button>
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("familyInformation")}
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
                    {t("add")}
                  </Button>
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("portfolio")}
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
                    {t("add")}
                  </Button>
                }
              />
            </Col>
          </Row>
          <div className="footer__resume">
            <Button size="large" onClick={() => prev(2)}>
              {t("back")}
            </Button>
            <button
              size="large"
              className="primary-btn"
              type="submit"
              style={{ marginLeft: "auto" }}
            >
              {t("save")}
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
