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
import {
  useAcademicResultMutation,
  useCreateResumeMutation,
  useCreateResumeStep3Mutation,
} from "src/store/api/resumeApiSlice";
import { setAdditionalFormData } from "src/store/resume.slice";
import { useSelector } from "react-redux";
import {
  useGetAllLanguageProficiencyQuery,
  useGetLanguagesQuery,
} from "src/store/api/apiSlice";

const AdditionalInformation = ({ props }) => {
  const [form] = Form.useForm();

  const [createResume, { isLoading: createResumeLoading }] =
    useCreateResumeMutation();
  const { data: allLanguages } = useGetLanguagesQuery();
  const { data: allLanguageProficiency } = useGetAllLanguageProficiencyQuery();

  const [createResumeStep3] = useCreateResumeStep3Mutation();


  const [openAcademicResDrawer, setOpenAcademicResDrawer] = useState(false);

  const [openFamiliyInformationDrawer, setOpenFamiliyInformationDrawer] =
    useState(false);

  const { additionalFormData } = useSelector(
    (state) => state.createResumeSlice
  );

  const [openPortfolioDrawer, setOpenPortfolioDrawer] = useState(false);

  const [openLicense, setOpenLicense] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [selectedLevel, setSelectedLevel] = useState("");

  // const [requiredMark, setRequiredMarkType] = useState("optional");
  // const onRequiredTypeChange = ({ requiredMarkValue }) => {
  //   setRequiredMarkType(requiredMarkValue);
  // };

  const next = props.next;
  const prev = props.prev;

  const [files, setFiles] = useState([]);

  const handleAdd = (add) => {
    add({ language: null, level: null });
  };

  // const onChange = (date, dateString) => {
  //   console.log(date, dateString);
  // };

  const onFinish = (values) => {
    console.log("Success:", values);

    const filteredFiles = values.knowingTheLanguages.filter(
      (item) => item.languagesId !== null && item.languageProficiencyId !== ""
    );

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
          initialValues={additionalFormData}
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[24, 8]}>
            <Col xs={24}>
              <p className="language-label">{t("enterTheLanguagesYouKnow")}</p>
              <Form.List name="knowingTheLanguages">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field, index) => (
                      <Row gutter={[15, 12]} key={field.key}>
                        <Col xs={24} sm={11}>
                          <Form.Item
                            {...field}
                            name={[field.name, "languagesId"]}
                          >
                            <Select
                              placeholder="Tilni tanlang"
                              size="large"
                              options={allLanguages?.result?.map((option) => ({
                                value: option.id.toString(),
                                label: option.name,
                              }))}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={11}>
                          <Form.Item
                            {...field}
                            name={[field.name, "languageProficiencyId"]}
                          >
                            <Select
                              placeholder="Daraja tanlang"
                              size="large"
                              options={allLanguageProficiency?.result?.map(
                                (option) => ({
                                  value: option.id.toString(),
                                  label: option.name,
                                })
                              )}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={2}>
                          {index === fields.length - 1 ? (
                            <Button
                              className="action-btn__lan-resume"
                              size="large"
                              type="dashed"
                              onClick={() => handleAdd(add)}
                              block
                            >
                              <span className="hidden-text__lan-resume">
                                {t("add")}
                              </span>
                              <PlusOutlined />
                            </Button>
                          ) : (
                            <Button
                              type="dashed"
                              size="large"
                              className="action-btn__lan-resume"
                              onClick={() => remove(field.name)}
                              block
                            >
                              <span className="hidden-text__lan-resume">
                                {t("turnOff")}
                              </span>
                              <DeleteOutlined />
                            </Button>
                          )}
                        </Col>
                      </Row>
                    ))}
                  </>
                )}
              </Form.List>
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("academicResults")}
                labelFor="academicResults"
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
                labelFor="licenseAndCertificates"
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
                labelFor="familyInformation"
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
                labelFor="portfolio"
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
