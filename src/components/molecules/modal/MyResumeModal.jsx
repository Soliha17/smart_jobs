import React from "react";
import { Col, Form, Modal, Radio, Row } from "antd";
import { useTranslation } from "react-i18next";

import LabeledInput from "../labeled-input/LabeledInput";
import TextArea from "antd/es/input/TextArea";

const MyResumeModal = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    setOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <Modal
      title="Statusni tanlash"
      open={open}
      onCancel={handleCancel}
      maskStyle={{ background: " rgba(28, 25, 23, 0.56)" }}
      wrapClassName="report-modal"
      footer={null}
    >
      <Form
        form={form}
        layout="vertical"
        className="report-form"
        // validateMessages={validateMessages}
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
        <Row gutter={[20, 8]}>
          <Col xs={24} sm={24}>
            <Form.Item className="radio-item__settings-profile">
              <Radio.Group className="radio-group__report-modal">
                <Radio value="wrongContact" size="large">
                  {t("wrongContactsAreGiven")}
                </Radio>
                <Radio value="noAnswer" size="large">
                  {t("theyDidNotAnswer")}
                </Radio>
                <Radio value="fakeCompany" size="large">
                  {t("scamNetworkMarketingCompany")}
                </Radio>
                <Radio value="noCompany" size="large">
                  {t("suchACompanyDoesNotExist")}
                </Radio>
                <Radio value="vacancyClosed" size="large">
                  {t("theVacancyIsClosed")}
                </Radio>
                <Radio value="other" size="large">
                  {t("other")}
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>

          <button type="submit" className="primary-btn">
            {t("save")}
          </button>
        </Row>
      </Form>
    </Modal>
  );
};

export default MyResumeModal;
