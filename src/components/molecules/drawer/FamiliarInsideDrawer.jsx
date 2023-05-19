import React from "react";
import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import LabeledInput from "../labeled-input/LabeledInput";

const FamiliarInsideDrawer = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const onChildrenDriwerFinish = (values) => {
    console.log("Success:", values);
    setOpen(false);
  };
  const onChildrenDriwerFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
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
        onFinish={onChildrenDriwerFinish}
        // onValuesChange={onRequiredTypeChange}
        // requiredMark={requiredMark}
        onFinishFailed={onChildrenDriwerFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Oila a’zosi"
              labelFor="familiarPerson"
              req={true}
              input={
                <Select
                  defaultValue="full"
                  size="large"
                  // onChange={onChange}
                  options={[
                    {
                      value: "full",
                      label: "To'liq stavka",
                    },
                    {
                      value: "part",
                      label: "Part time",
                    },
                  ]}
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Otasinging F.I.Osi"
              labelFor="fullNameOfFather"
              req={true}
              input={
                <Input
                  size="large"
                  placeholder="Masalan, Karimov Nodirjon Hotamovich"
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Fuqaroligi"
              labelFor="citizenship"
              req={true}
              input={
                <Select
                  defaultValue="full"
                  size="large"
                  // onChange={onChange}
                  options={[
                    {
                      value: "full",
                      label: "To'liq stavka",
                    },
                    {
                      value: "part",
                      label: "Part time",
                    },
                  ]}
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Tug'ilgan sana"
              labelFor="workedLevel"
              req={true}
              input={
                <DatePicker
                  // onChange={onChange}
                  size="large"
                  picker="date"
                  placeholder="kun/oy/yil"
                />
              }
            />
          </Col>
          <Col xs={24} sm={12}>
            <LabeledInput
              labelName="Mamlakat"
              labelFor="countryFamily"
              req={true}
              input={
                <Select
                  defaultValue="uzbekistan"
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
          <Col xs={24} sm={12}>
            <LabeledInput
              labelName="Shahar"
              labelFor="cityFamily"
              req={true}
              input={
                <Select
                  defaultValue="buxoro"
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
            <LabeledInput
              labelName="Ish joyi"
              labelFor="workFamily"
              req={true}
              input={<Input size="large" />}
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Lavozimi"
              labelFor="positionFamily"
              req={true}
              input={<Input size="large" />}
            />
          </Col>
        </Row>
        <div className="footer__resume">
          <button size="large" className="primary-btn" type="submit">
            Saqlash
          </button>
        </div>
      </Form>
    </>
  );
};

export default FamiliarInsideDrawer;
