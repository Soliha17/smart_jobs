import React, { useState } from "react";

import "./signupMock.css";

import { Button, Col, DatePicker, Form, Row, Select, Upload } from "antd";
import { useTranslation } from "react-i18next";

import UploadIcon from "../../../assets/images/upload-icon.svg";
import TextArea from "antd/es/input/TextArea";
import { useTransition } from "react";

const SignupMock = () => {
  const [form] = Form.useForm();

  const [files, setFiles] = useState([]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { t } = useTranslation();

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (!e || !e.fileList) {
      return [];
    }
    if (Array.isArray(e.fileList)) {
      return e.fileList;
    }
    return [e.fileList];
  };

  const handleUpload = (file) => {
    if (file.type === "application/zip" || file.type === "application/pdf") {
      setFiles([file]);
    }
    console.log(files);
  };

  return (
    <div className="sign-mock container">
      {" "}
      <h2> {t("registerForAnInterview")} </h2>
      <div className="sign-content__mock">
        <Form
          form={form}
          layout="vertical"
          name="basic"
          initialValues={
            {
              // require: true,
              // requiredMark: true,
              // requiredMarkValue: requiredMark,
            }
          }
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[0, 5]}>
            <Col xs={24}>
              <Form.Item name="chooseJob" label={t("chooseAProfession")}>
                <Select
                  placeholder={t("choose")}
                  size="large"
                  // onChange={onChange}
                  options={[
                    {
                      value: "uzbekistan",
                      label: "O'zbekiston",
                    },
                    {
                      value: "turkey",
                      label: "Turkiya",
                    },
                    {
                      value: "usa",
                      label: "AQSH",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name="enterDate" label={t("setTheTime")}>
                <DatePicker
                  // onChange={onChange}
                  size="large"
                  picker="date"
                  format={"DD/MM/YYYY"}
                />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name="selectLanguage" label={t("interviewLanguage")}>
                <Select
                  // value={language}
                  // onChange={()=>setLanguage(language)}
                  placeholder={t("choose")}
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
            <Col xs={24}>
              <Form.Item name="addDesc" label={t("additionalComment")}>
                <TextArea rows={4} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="phoneContactUs"
                label={t("uploadAnAdditionalFileResumeCV")}
                getValueFromEvent={normFile}
              >
                <Upload
                  name="logo"
                  action="/upload.do"
                  listType="picture"
                  accept="application/zip, application/x-rar-compressed, application/pdf, image/jpeg"
                  onChange={handleUpload}
                >
                  <Button icon={<img src={UploadIcon} alt="" />} size="large">
                    {t("uploadDocument")}
                  </Button>
                </Upload>
              </Form.Item>
            </Col>

            <Col xs={24}>
              <button className="primary-btn">{t("signUp")}</button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default SignupMock;
