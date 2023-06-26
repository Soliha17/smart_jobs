import React from "react";
import { Col, Form, Row, Select, Tabs } from "antd";

import "./generalSettings.css";

import LabeledInput from "../../../components/molecules/labeled-input/LabeledInput";

const GeneralSettings = () => {
  const [form] = Form.useForm();

  const items = [
    {
      key: "1",
      label: "Umumiy",
      // children: <Information />,
    },
    {
      key: "2",
      label: "Kompaniya ma'lumotlari",
      // children: <MyApplications />,
    },
    {
      key: "3",
      label: "Foydalanuvchilar",
      // children: <MyResumes />,
    },
    {
      key: "4",
      label: "Bildirishnomalar",
      // children: <SavedProfile />,
    },
    {
      key: "5",
      label: "Parolni o'zgartirish",
      // children: <SettingsProfile />,
    },
  ];

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
    <div className="general-settings">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      <h6>Umumiy sozlamalar</h6>
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
