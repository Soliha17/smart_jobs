import React, { useState } from "react";

import "./basicInfoResume.css";
import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import LabeledInput from "../../molecules/labeled-input/LabeledInput";
import TextArea from "antd/es/input/TextArea";
import { useTranslation } from "react-i18next";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  linkPattern,
  restrictedKeysInSignUpForm,
} from "src/assets/constants/inputConstants";

import {
  useGetCountriesGeneralQuery,
  useGetCountriesQuery,
  useGetRegionsQuery,
} from "src/store/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setResumeFormData } from "src/store/resume.slice";

const BasicInfoResume = ({ props }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [address, setAddress] = useState({ countryId: null, cityId: null });

  const { resumeFormData } = useSelector((state) => state.createResumeSlice);

  const { data: countries } = useGetCountriesQuery();
  const { data: countriesGeneral } = useGetCountriesGeneralQuery();

  const { data: regions, isFetching: isRegionsFetching } = useGetRegionsQuery(
    { davlatId: address.countryId },
    { skip: !address.countryId }
  );

  const next = props.next;

  const onFinish = (values) => {
    console.log("Success:", values);

    const formattedBirthDate = values?.birthDate?.format(
      "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
    );

    dispatch(setResumeFormData(values));
    next(1);
  };

  console.log("resumeFormData:", resumeFormData);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    next(1);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  function onChangeCountry(value, a, b, c) {
    form.setFieldsValue({
      countries: value,
      regions: undefined,
      cities: undefined,
    });
    setAddress({ ...address, countryId: value });
  }

  const handleKeyDown = (e) => {
    if (restrictedKeysInSignUpForm.includes(e.key)) {
      e.preventDefault();
    }
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

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="numberPrefix" noStyle>
      <Select style={{ width: 100 }} defaultValue={"998"}>
        <Option value="998">+998</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  const handleAdd = (add) => {
    add({ type: null, value: "" });
  };

  return (
    <>
      <div className="header__resume">
        <h3>{t("basicInformation")}</h3>
        <p>{t("enterYourBasicInformation")}</p>
      </div>
      <div className="content__resume">
        <Form
          form={form}
          layout="vertical"
          // validateMessages={validateMessages}
          name="basic"
          initialValues={resumeFormData}
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[24, 8]}>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("name")}
                labelFor="firstName"
                req={true}
                input={<Input size="large" maxLength={32} />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("surname")}
                labelFor="lastName"
                req={true}
                input={<Input size="large" maxLength={32} />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("birthday")}
                labelFor="birthDate"
                req={true}
                input={
                  <DatePicker
                    // onChange={onChange}
                    size="large"
                    picker="date"
                    format={"DD/MM/YYYY"}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("gender")}
                labelFor="sex"
                req={true}
                input={
                  <Radio.Group
                    onChange={onChange}
                    // defaultValue="male"
                    size="large"
                  >
                    <Radio.Button value="male">Erkak</Radio.Button>
                    <Radio.Button value="female">Ayol</Radio.Button>
                  </Radio.Group>
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
                    placeholder={t("choose")}
                    size="large"
                    onChange={onChangeCountry}
                    options={countries?.result?.map((option) => ({
                      value: option.id.toString(),
                      label: option.name,
                    }))}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("province")}
                labelFor="regions"
                req={true}
                input={
                  <Select
                    // defaultValue="buxoro"
                    placeholder={t("choose")}
                    size="large"
                    onChange={onChange}
                    options={
                      isRegionsFetching
                        ? []
                        : regions?.result?.map((option) => ({
                            value: option.id.toString(),
                            label: option.name,
                          }))
                    }
                  />
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("citizenship")}
                labelFor="citizenship"
                input={
                  <Select
                    // defaultValue="uzbek"
                    placeholder={t("choose")}
                    size="large"
                    onChange={onChange}
                    options={countriesGeneral?.result?.map((option) => ({
                      value: option.id.toString(),
                      label: option.name,
                    }))}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("describeYourself")}
                labelFor="about"
                input={<TextArea rows={4} />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                className={"phone-input"}
                labelName={t("phoneNumber")}
                labelFor="number"
                req={true}
                input={
                  <Input
                    addonBefore={prefixSelector}
                    size="large"
                    type="number"
                    // value={value}
                    onKeyDown={handleKeyDown}
                    maxLength={9}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("email")}
                labelFor="email"
                req={true}
                input={<Input size="large" />}
              />
            </Col>
            {/* start */}
            <Col xs={24}>
              <p className="language-label">{t("addLinks")}</p>

              <Form.List name="files">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map((field, index) => (
                      <Row gutter={[15, 12]} key={field.key}>
                        <Col xs={24} sm={11}>
                          <Form.Item
                            {...field}
                            name={[field.name, "type"]}
                            // fieldKey={[field.fieldKey, "type"]}
                          >
                            <Select
                              placeholder="Choose Link or Image"
                              size="large"
                              options={[
                                { value: "image", label: "Image" },
                                { value: "link", label: "Link" },
                              ]}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={11}>
                          <Form.Item
                            {...field}
                            name={[field.name, "value"]}
                            rules={[
                              {
                                pattern: linkPattern,
                                message: "Enter valid url",
                              },
                            ]}
                            // // fieldKey={[field.fieldKey, "value"]}
                          >
                            <Input
                              placeholder="Enter File or Link"
                              size="large"
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={2}>
                          {index === fields.length - 1 ? (
                            <Button
                              className="action-btn__lan-resume"
                              size="large"
                              htmlType="button"
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
                              htmlType="button"
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
            {/* end */}
          </Row>
          <div className="footer__resume">
            <button
              size="large"
              className="primary-btn"
              type="submit"
              style={{ marginLeft: "auto" }}
              // onClick={handleAddFile}
            >
              {t("continue")}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default BasicInfoResume;
