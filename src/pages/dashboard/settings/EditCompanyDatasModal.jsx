import React from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Upload,
  message,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

import LabeledInput from "../../../components/molecules/labeled-input/LabeledInput";

import AddPhotoIcon from "../../../assets/images/add-photo-modal-companyedit.svg";

import TextArea from "antd/es/input/TextArea";

const EditCompanyDatasModal = ({ open, setOpen }) => {
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

  const props = {
    beforeUpload: (file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error(`${file.name} is not a img`);
      }
      return isJpgOrPng || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };

  return (
    <Modal
      title=""
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
            <Upload {...props} listType="picture">
              <button className="add-img-btn">
                <img src={AddPhotoIcon} alt="AddPhotoIcon" />
              </button>
            </Upload>
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Kompaniyangiz nomini kiriting*"
              labelFor="nameOfCompanyInfo"
              req={true}
              input={
                <Input
                  maxLength={32}
                  placeholder="Masalan: EdTEch 24"
                  size="large"
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="E-mail"
              labelFor="nameOfCompanyInfo"
              req={true}
              input={<Input maxLength={32} size="large" />}
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName={t("country")}
              labelFor="countryOfInfo"
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
              labelName={t("city")}
              labelFor="cityOfInfo"
              req={true}
              input={
                <Select
                  // defaultValue="buxoro"
                  placeholder={t("choose")}
                  size="large"
                  // onChange={onChange}
                  options={[
                    {
                      value: "buxoro",
                      label: "Buxoro",
                    },
                    {
                      value: "toshkent",
                      label: "Toshkent",
                    },
                    {
                      value: "istanbul",
                      label: "Istanbul",
                    },
                  ]}
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <Form.List
              initialValue={[{}]}
              name="names"
              rules={[
                {
                  validator: async (_, names) => {
                    if (!names || names.length < 1) {
                      return Promise.reject(new Error("At least 2 passengers"));
                    }
                  },
                },
              ]}
            >
              {(fields, { add, remove }, { errors }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      label={index === 0 ? "Havolalar" : ""}
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={["onChange", "onBlur"]}
                        rules={[
                          {
                            required: false,
                            whitespace: true,
                            message: "Please input link or delete this field.",
                          },
                          {
                            type: "url",
                            warningOnly: true,
                          },
                          {
                            type: "string",
                            min: 6,
                          },
                        ]}
                        noStyle
                      >
                        <Input
                          placeholder=" https://www.facebook.com/"
                          size="large"
                          style={{
                            width: "90%",
                          }}
                        />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button"
                          onClick={() => remove(field.name)}
                          style={{ marginLeft: "10px" }}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      size="large"
                      onClick={() => add()}
                      style={{
                        width: "100%",
                      }}
                      icon={<PlusOutlined />}
                    >
                      Qo'shish
                    </Button>
                    <Form.ErrorList errors={errors} />
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName={t("writeADescriptionOfTheObjection")}
              labelFor="name"
              input={<TextArea rows={4} />}
            />
          </Col>

          <button
            type="submit"
            className="primary-btn"
            style={{ width: "100%" }}
          >
            {t("save")}
          </button>
        </Row>
      </Form>
    </Modal>
  );
};

export default EditCompanyDatasModal;
