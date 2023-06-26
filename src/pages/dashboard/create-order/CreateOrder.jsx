import React, { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

import { useTranslation } from "react-i18next";

import "./createOrder.css";

import TextArea from "antd/es/input/TextArea";
import AddTag from "../../../components/molecules/add-tag/AddTag";
import LabeledInput from "../../../components/molecules/labeled-input/LabeledInput";

const CreateOrder = ({ props }) => {
  const [form] = Form.useForm();

  const [language, setLanguage] = useState("");

  const [level, setLevel] = useState("");

  const [files, setFiles] = useState([]);

  const handleAdd = (add) => {
    add();
    form.validateFields().then((values) => {
      const newFile = { language: language, level: level };
      setFiles([...files, newFile]);
      setLanguage("");
      setLevel("");
      form.resetFields(["language", "level"]);
    });
  };

  const onChangeLanguage = (value) => {
    setLanguage(value);
  };

  const onChangeLevel = (value) => {
    setLevel(value);
  };

  // const next = props.next;
  // console.log(next);

  const onFinish = (values) => {
    console.log("Success:", values);

    // next(1);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
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
      <div className="create-vacancy container">
        <div className="content__create-vacancy create-order-card">
          <div className="header__resume">
            <h3>Buyurtma yaratish</h3>
            <p>{t("enterYourBasicInformation")}</p>
          </div>
          <div className="content__resume">
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
              <Row gutter={[24, 8]}>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Ish lavoziminini kiriting"
                    labelFor="citizenship"
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
                    labelName={t("country")}
                    labelFor="country"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Tanlang"
                        size="large"
                        onChange={onChange}
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
                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName={t("city")}
                    labelFor="city"
                    req={true}
                    input={
                      <Select
                        // defaultValue="buxoro"
                        placeholder="Tanlang"
                        size="large"
                        onChange={onChange}
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

                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Holati"
                    labelFor="conditionFirstStep"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Tanlang"
                        size="large"
                        onChange={onChange}
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

                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Nechta hodim olinadi?"
                    labelFor="employeesCount"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Tanlang"
                        size="large"
                        onChange={onChange}
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

                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Filial"
                    labelFor="filial"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Tanlang"
                        size="large"
                        onChange={onChange}
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
                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Bo'lim"
                    labelFor="bo'lim"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Tanlang"
                        size="large"
                        onChange={onChange}
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
                    labelName="Tashkilot manzili"
                    labelFor="address"
                    req={true}
                    input={<Input size="large" maxLength={32} />}
                  />
                </Col>

                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Ish formati"
                    labelFor="workingFormat"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Tanlang"
                        size="large"
                        onChange={onChange}
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
                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Ishlash turi"
                    labelFor="workingType"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Tanlang"
                        size="large"
                        onChange={onChange}
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
                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Maosh"
                    labelFor="salary"
                    req={true}
                    input={<Input size="large" maxLength={32} />}
                  />
                </Col>
                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="&nbsp;"
                    labelFor="valyuteType"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Valyutani tanlang"
                        size="large"
                        onChange={onChange}
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
                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Ish tajribasi"
                    labelFor="jobExperience"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Tanlang"
                        size="large"
                        onChange={onChange}
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
                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Ta'lim darajasi"
                    labelFor="stydyLevel"
                    req={true}
                    input={
                      <Select
                        // defaultValue="uzbekistan"
                        placeholder="Tanlang"
                        size="large"
                        onChange={onChange}
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
                <Col xs={24}>
                  <p className="language-label">
                    {t("enterTheLanguagesYouKnow")}
                  </p>
                  <Form.List name="files" initialValue={files}>
                    {(fields, { add, remove }) => (
                      <>
                        <Row gutter={[15, 12]} className="main-lan-row__resume">
                          <Col xs={24} sm={11}>
                            <Form.Item>
                              <Select
                                // defaultValue={"uzb"}
                                value={language || undefined}
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
                                value={level || undefined}
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
                                onClick={() => handleAdd(add)}
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
                        {fields.map((field, index) => (
                          <Row gutter={[15, 12]} key={field.key}>
                            <Col xs={24} sm={11}>
                              <Form.Item
                                {...field}
                                name={[field.name, "language"]}
                                fieldKey={[field.fieldKey, "language"]}
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
                                {...field}
                                name={[field.name, "level"]}
                                fieldKey={[field.fieldKey, "level"]}
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
                                onClick={() => remove(field.name)}
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
                      </>
                    )}
                  </Form.List>
                </Col>

                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Ko'nikmalaringiz"
                    labelFor="skills"
                    input={
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column-reverse",
                          gap: "12px",
                        }}
                      >
                        <AddTag />
                      </span>
                    }
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Ish tavsifi"
                    labelFor="desc"
                    input={<TextArea rows={4} />}
                  />
                </Col>
                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Boshlanish sanasi"
                    labelFor="startDay"
                    req={true}
                    input={
                      <DatePicker
                        onChange={onChange}
                        format={"DD/MM/YYYY"}
                        size="large"
                        picker="date"
                      />
                    }
                  />
                </Col>
                <Col xs={24} sm={12}>
                  <LabeledInput
                    labelName="Tugash sanasi"
                    labelFor="finishDay"
                    req={true}
                    input={
                      <DatePicker
                        onChange={onChange}
                        format={"DD/MM/YYYY"}
                        size="large"
                        picker="date"
                      />
                    }
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Izoh"
                    labelFor="comment"
                    input={<TextArea rows={4} />}
                  />
                </Col>
              </Row>
              <div className="footer__resume">
                <button
                  size="large"
                  className="primary-btn"
                  type="submit"
                  style={{ marginLeft: "auto" }}
                  // onClick={handleAddFile}
                >
                  {t("submit")}
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateOrder;
