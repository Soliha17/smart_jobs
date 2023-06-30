import React from "react";
import { Col, Form, Row, Select } from "antd";

import "./settings.css";

import LabeledInput from "../../../components/molecules/labeled-input/LabeledInput";

const GeneralSettings = () => {
  const [form] = Form.useForm();

  function onChange() {
    console.log("onchange");
  }

  const onFinish = (values) => {
    console.log("Success:", values);

    // next(1);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <h6 className="title__general-settings">Umumiy sozlamalar</h6>
      <div className="content__general-settings">
        <Form
          form={form}
          layout="vertical"
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
          <Row gutter={[32, 16]}>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Tilni tanlash"
                labelFor="selectLanguage"
                input={
                  <Select
                    // defaultValue="uzbek"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
                    options={[
                      {
                        value: "uzbek",
                        label: "O'zbek",
                      },
                      {
                        value: "rus",
                        label: "Rus",
                      },
                      {
                        value: "qozoq",
                        label: "Qozoq",
                      },
                    ]}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Valyutani tanlash"
                labelFor="selectCoin"
                input={
                  <Select
                    // defaultValue="uzbek"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
                    options={[
                      {
                        value: "uzbek",
                        label: "O'zbek",
                      },
                      {
                        value: "rus",
                        label: "Rus",
                      },
                      {
                        value: "qozoq",
                        label: "Qozoq",
                      },
                    ]}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Sana formatini tanlash"
                labelFor="selectCoin"
                input={
                  <Select
                    // defaultValue="uzbek"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
                    options={[
                      {
                        value: "uzbek",
                        label: "O'zbek",
                      },
                      {
                        value: "rus",
                        label: "Rus",
                      },
                      {
                        value: "qozoq",
                        label: "Qozoq",
                      },
                    ]}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Vaqt formatini tanlang"
                labelFor="selectTime"
                input={
                  <Select
                    // defaultValue="uzbek"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
                    options={[
                      {
                        value: "uzbek",
                        label: "O'zbek",
                      },
                      {
                        value: "rus",
                        label: "Rus",
                      },
                      {
                        value: "qozoq",
                        label: "Qozoq",
                      },
                    ]}
                  />
                }
              />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default GeneralSettings;
