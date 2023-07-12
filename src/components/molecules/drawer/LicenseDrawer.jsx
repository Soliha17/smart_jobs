import { Button, Col, Drawer, Form, Input, Row, Space, Upload } from "antd";

import CloseIcon from "../../../assets/images/Exit.svg";

import "./drawerResume.css";
import LabeledInput from "../labeled-input/LabeledInput";
import UploadIcon from "../../../assets/images/upload-icon.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LicenseDrawer = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const [files, setFiles] = useState([]);

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setOpen(false);

    // next(2);
  };

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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const validateMessages = {
  //   required: "Iltimos, ${label}ni kiriting!",
  //   types: {
  //     email: "${label} is not a valid email!",
  //     number: "${label} is not a valid number!",
  //   },
  //   number: {
  //     range: "${label} must be between ${0} and ${10}",
  //   },
  // };

  const { t } = useTranslation();

  return (
    <>
      <Drawer
        title={t("licenseAndCertificate")}
        size="large"
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <img src={CloseIcon} onClick={onClose} alt="CloseIcon" />
          </Space>
        }
      >
        <div className="content__drawer">
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
                  labelName={t("sertificateName")}
                  labelFor="name"
                  req={true}
                  input={
                    <Input
                      size="large"
                      placeholder="Masalan, Google UX Sertificate"
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("sertificateFrom")}
                  labelFor="organization"
                  req={true}
                  input={<Input size="large" placeholder="Masalan, Google" />}
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("documentConfirmingTheCertificate")}
                  labelFor="document"
                  // req={true}
                  getValueFromEvent={normFile}
                  input={
                    <Upload
                      name="license result"
                      action="/upload.do"
                      listType="picture"
                      accept="application/zip, application/x-rar-compressed, application/pdf, image/jpeg"
                      onChange={handleUpload}
                    >
                      <Button
                        icon={<img src={UploadIcon} alt="" />}
                        size="large"
                      >
                        {t("uploadDocument")}
                      </Button>
                    </Upload>
                  }
                />
              </Col>
            </Row>
            <button
              type="submit"
              style={{ marginTop: "32px" }}
              className="primary-btn"
            >
              {t("save")}
            </button>
          </Form>
        </div>
      </Drawer>
    </>
  );
};
export default LicenseDrawer;
