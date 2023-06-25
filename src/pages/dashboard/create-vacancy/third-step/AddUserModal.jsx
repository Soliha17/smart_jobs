import React from "react";
import { Col, Form, Modal, Row, Select } from "antd";
import { useTranslation } from "react-i18next";

import LabeledInput from "../../../../components/molecules/labeled-input/LabeledInput";

const AddUserModal = ({ open, setOpen }) => {
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
      title="Foydalanuvchi qo'shish"
      open={open}
      onCancel={handleCancel}
      maskStyle={{ background: " rgba(28, 25, 23, 0.56)" }}
      wrapClassName="report-modal add-test-modal"
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
            <LabeledInput
              labelName="Ism Familiyasi"
              labelFor="testCategory"
              req={true}
              input={
                <Select
                  // defaultValue="uzbekistan"
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
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Ro'lini kiriting"
              labelFor="testCategory"
              req={true}
              input={
                <Select
                  // defaultValue="uzbekistan"
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
              }
            />
          </Col>

          <button type="submit" className="primary-btn">
            {t("save")}
          </button>
        </Row>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
