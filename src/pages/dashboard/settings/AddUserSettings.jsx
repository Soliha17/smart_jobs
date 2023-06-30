import React, { useEffect, useState } from "react";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import { useTranslation } from "react-i18next";

import LabeledInput from "../../../components/molecules/labeled-input/LabeledInput";

const AddUserSettings = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const { t } = useTranslation();

  const [data, setData] = useState("");

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

  const [inputValue, setInputValue] = useState("");
  const [errorText, setErrorText] = useState("");

  const onSubmit = (values) => {
    values.preventDefault();
    // console.log("data",data)

    if (
      (inputValue.length &&
        inputValue.slice(0, 1) !== "+" &&
        !inputValue.includes(".") &&
        !inputValue.includes("@")) ||
      (inputValue.length &&
        inputValue.slice(0, 1) === "+" &&
        inputValue.length === 14)
    ) {
      setData(inputValue);
      console.log("data", data);
      handleCancel();
    }
  };

  const onInputValueChange = (e) => {
    if (
      e.key === "*" ||
      e.key === "/" ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "_" ||
      e.key === "(" ||
      e.key === ")" ||
      e.key === "&" ||
      e.key === "%" ||
      e.key === "$" ||
      e.key === "!" ||
      e.key === "^" ||
      e.key === "~" ||
      e.key === "#" ||
      e.key === "," ||
      e.key === "Shift" ||
      e.key === " " ||
      e.key === "Alt"
    ) {
      e.preventDefault();
    } else if (e.key === "Backspace") {
      setInputValue(inputValue.slice(0, inputValue.length - 1));
    } else {
      if (!isNaN(e.key - 0) && inputValue.slice(0, 1) !== "+") {
        setInputValue("+998 " + e.key);
      } else if (!isNaN(e.key - 0)) {
        setInputValue(inputValue + e.key);
      } else {
        setInputValue(inputValue + e.key);
      }
    }
  };

  useEffect(() => {
    if (
      inputValue.length &&
      inputValue.slice(0, 1) !== "+" &&
      !inputValue.includes(".") &&
      !inputValue.includes("@")
    ) {
      setErrorText("Bu e-mail orqali ro'yxatdan o'tilmagan");
    } else if (
      (inputValue.slice(0, 1) === "+" && inputValue.length > 14) ||
      (inputValue.length > 4 && inputValue.length < 14)
    ) {
      setErrorText("Raqam formati noto'g'ri");
    } else if (
      inputValue.length &&
      inputValue.slice(0, 1) !== "+" &&
      inputValue.includes(".") &&
      inputValue.includes("@")
    ) {
      setErrorText("");
    } else if (inputValue.slice(0, 1) === "+" && inputValue.length === 14) {
      setErrorText("");
    } else if (inputValue === "") {
      setErrorText("");
    }
  }, [inputValue, errorText]);

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
        <Row gutter={[20, 0]}>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Ism"
              labelFor="name"
              req={true}
              input={<Input size="large" />}
            />
            <LabeledInput
              labelName="Familiyasi"
              labelFor="surname"
              req={true}
              input={<Input size="large" />}
            />
            <form
              onSubmit={(e) => e.preventDefault()}
              className={
                errorText ? "email_phone_form error_form" : "email_phone_form"
              }
            >
              <label htmlFor="input" className="input_label">
                Taklif qilish uchun E-mail yoki Telefon kiritish
              </label>{" "}
              <br />
              {inputValue.slice(0, 1) !== "+" ? (
                <input
                  type="text"
                  value={inputValue}
                  // control={control}
                  // {...register("phone")}
                  onKeyDown={onInputValueChange}
                  autoComplete="off"
                />
              ) : (
                <input
                  name="mail"
                  type="email"
                  value={inputValue}
                  // control={control}
                  // {...register("email")}
                  onKeyDown={onInputValueChange}
                  autoComplete="off"
                />
              )}
              {errorText && <span className="error-text">{errorText}</span>}
              <br />
              <br />
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
              <input type="submit" value={t("save")} onClick={onSubmit} />
            </form>
          </Col>

          {/* <button type="submit" className="primary-btn">
            {t("save")}
          </button> */}
        </Row>
      </Form>
    </Modal>
  );
};

export default AddUserSettings;
