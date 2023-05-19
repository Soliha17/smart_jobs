import React from "react";
import { Checkbox, Col, Form, Input, Row, Select } from "antd";
import LabeledInput from "../labeled-input/LabeledInput";
import TextArea from "antd/es/input/TextArea";

const JobInsideDrawer = ({ open, setOpen }) => {
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
              labelName="Qaysi kompaniyada ishlagansiz?"
              labelFor="nameOfCompanyWorked"
              req={true}
              input={<Input size="large" />}
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Qaysi lavozimda ishlagansiz?"
              labelFor="positionOfWorked"
              req={true}
              input={<Input size="large" />}
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Bandlik Turi"
              labelFor="busyType"
              req={true}
              input={
                <Select
                  // defaultValue="full"
                  placeholder="Tanlang"
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
              labelName="Joylashuv"
              labelFor="locationOfWorkedCompany"
              req={true}
              input={
                <Select
                  // defaultValue="buxoro"
                  placeholder="Tanlang"
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
              labelName="Format"
              labelFor="formatOfWorkedCompany"
              req={true}
              input={
                <Select
                  // defaultValue="masofadan"
                  placeholder="Tanlang"
                  size="large"
                  // onChange={onChange}
                  options={[
                    {
                      value: "masofadan",
                      label: "Masofadan",
                    },
                    {
                      value: "offisda",
                      label: "Offisda",
                    },
                  ]}
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Ishdagi yutuqlaringiz haqida yozing"
              labelFor="aboutAwardsOfWorkedCompany"
              input={<TextArea rows={4} />}
            />
          </Col>
          <Col xs={24} sm={12}>
            <LabeledInput
              labelName="Boshlash vaqti"
              labelFor="beginsOfWorkedCompany"
              input={
                <Row gutter={[12, 5]}>
                  <Col xs={12}>
                    <Select
                      // defaultValue="oy"
                      placeholder="Oy"
                      size="large"
                      // onChange={onChange}
                      options={[
                        {
                          value: "dekabr",
                          label: "Dekabr",
                        },
                        {
                          value: "yanvar",
                          label: "Yanvar",
                        },
                        {
                          value: "fevral",
                          label: "Fevral",
                        },
                        {
                          value: "mart",
                          label: "Mart",
                        },
                        {
                          value: "iyun",
                          label: "Iyun",
                        },
                      ]}
                    />
                  </Col>
                  <Col xs={12}>
                    <Select
                      // defaultValue="uzbek"
                      placeholder="Yil"
                      size="large"
                      // onChange={onChange}
                      options={[
                        {
                          value: "2020",
                          label: "2020",
                        },
                        {
                          value: "2021",
                          label: "2021",
                        },
                        {
                          value: "2022",
                          label: "2022",
                        },
                        {
                          value: "2023",
                          label: "2023",
                        },
                      ]}
                    />
                  </Col>
                </Row>
              }
            />
          </Col>
          <Col xs={24} sm={12}>
            <LabeledInput
              labelName="Tugash vaqti"
              labelFor="finishOfWorkedCompany"
              input={<Checkbox checked={true}>Hozirgacha</Checkbox>}
            />
          </Col>
        </Row>
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24}>
            <h3 className="title__job-drawer">
              Kompaniyada qo’shimcha tajriba
            </h3>
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Qaysi lavozimda ishlagansiz?"
              labelFor="positionOfThatCompany"
              req={true}
              input={<Input size="large" />}
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Bandlik Turi"
              labelFor="busyTypeOfThatCompany"
              req={true}
              input={
                <Select
                  // defaultValue="full"
                  placeholder="Tanlang"
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
              labelName="Joylashuv"
              labelFor="locationOfThatCompany"
              req={true}
              input={
                <Select
                  // defaultValue="buxoro"
                  placeholder="Tanlang"
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
              labelName="Format"
              labelFor="formatOfThatCompany"
              req={true}
              input={
                <Select
                  // defaultValue="masofadan"
                  placeholder="Tanlang"
                  size="large"
                  // onChange={onChange}
                  options={[
                    {
                      value: "masofadan",
                      label: "Masofadan",
                    },
                    {
                      value: "offisda",
                      label: "Offisda",
                    },
                  ]}
                />
              }
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName="Ishdagi yutuqlaringiz haqida yozing"
              labelFor="aboutAwardsOfThatCompany"
              input={<TextArea rows={4} />}
            />
          </Col>
          <Col xs={24} sm={12}>
            <LabeledInput
              labelName="Boshlash vaqti"
              labelFor="beginsOfThatCompany"
              input={
                <Row gutter={[12, 5]}>
                  <Col xs={12}>
                    <Select
                      // defaultValue="oy"
                      placeholder="Oy"
                      size="large"
                      // onChange={onChange}
                      options={[
                        {
                          value: "dekabr",
                          label: "Dekabr",
                        },
                        {
                          value: "yanvar",
                          label: "Yanvar",
                        },
                        {
                          value: "fevral",
                          label: "Fevral",
                        },
                        {
                          value: "mart",
                          label: "Mart",
                        },
                        {
                          value: "iyun",
                          label: "Iyun",
                        },
                      ]}
                    />
                  </Col>
                  <Col xs={12}>
                    <Select
                      // defaultValue="uzbek"
                      placeholder="Yil"
                      size="large"
                      // onChange={onChange}
                      options={[
                        {
                          value: "2020",
                          label: "2020",
                        },
                        {
                          value: "2021",
                          label: "2021",
                        },
                        {
                          value: "2022",
                          label: "2022",
                        },
                        {
                          value: "2023",
                          label: "2023",
                        },
                      ]}
                    />
                  </Col>
                </Row>
              }
            />
          </Col>
          <Col xs={24} sm={12}>
            <LabeledInput
              labelName="Tugash vaqti"
              labelFor="finishOfThatCompany"
              input={<Checkbox checked={true}>Hozirgacha</Checkbox>}
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

export default JobInsideDrawer;
