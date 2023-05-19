import React, { useState } from "react";

import { Button, Col, Form, Input, Row, Select } from "antd";
import "./professionalInformation.css";

import LabeledInput from "../../molecules/labeled-input/LabeledInput";

import Trash from "../../../assets/images/trash-icon.svg";
import Edit from "../../../assets/images/edit-icon.svg";
import AddCircle from "../../../assets/images/add-circle.svg";
import AddTag from "../../molecules/add-tag/AddTag";
import JobDrawer from "../../molecules/drawer/JobDrawer";
import StudyDrawer from "../../molecules/drawer/StudyDrawer";

const ProfessionalInformation = ({ props }) => {
  const [form] = Form.useForm();

  const [openJobDrawer, setOpenJobDrawer] = useState(false);
  const [openStudyDrawer, setOpenStudyDrawer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [values, setValues] = useState([]);

  // const [requiredMark, setRequiredMarkType] = useState("optional");
  // const onRequiredTypeChange = ({ requiredMarkValue }) => {
  //   setRequiredMarkType(requiredMarkValue);
  // };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  console.log(values);

  const next = props.next;
  const prev = props.prev;

  const onFinish = (values) => {
    console.log("Success:", values);
    next(2);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleEdit() {
    setOpenJobDrawer(true);
    let jobDrawerValues = JSON.parse(localStorage.getItem("jobDrawerValues"));

    if (jobDrawerValues !== null) {
      setValues(jobDrawerValues);
    }
  }

  const validateMessages = {
    required: "Iltimos, ${label}ni kiriting!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${0} and ${10}",
    },
  };

  return (
    <>
      <div className="header__resume">
        <h3>Kasbiy va ta’lim ma’lumotlari</h3>
        <p>O’zingiz haqingizda asosiy ma’lumotlani kiriting</p>
      </div>
      <div className="content__resume">
        <Form
          form={form}
          layout="vertical"
          initialValues={{ experience: values.workedCompany }}
          validateMessages={validateMessages}
          name="basic"
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="Sohangiz"
                labelFor="profession"
                req={true}
                input={<Input size="large" />}
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="Ish tajribangiz"
                labelFor="experience"
                className={!isVisible ? "d-none" : ""}
                // req="true"
                input={
                  <div className="field__resume">
                    <span>
                      <h4>{values.workedLevel}</h4>
                      <p>{values.workedCompany}</p>
                      <p>
                        {values.beginsMonthOfJob} {values.beginsYearOfJob}
                      </p>
                      <p>- {values.finishOfJob}</p>
                      <p>{values.workedType}</p>
                      <p>{values.format}</p>
                    </span>
                    <span className="action-group__resume">
                      <img src={Edit} alt="Edit icon" onClick={handleEdit} />
                      <img
                        src={Trash}
                        onClick={() => setIsVisible(false)}
                        alt="Trash icon"
                      />
                    </span>
                  </div>
                }
              />
              <Row>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName=""
                    labelFor="experianceAddButton"
                    input={
                      <Button
                        block
                        size="large"
                        onClick={() => setOpenJobDrawer(true)}
                        icon={<img src={AddCircle} alt="" />}
                        style={{
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        Qo'shish
                      </Button>
                    }
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Ishlamoqchi bo’lgan formatingiz"
                labelFor="jobDirection"
                req={true}
                input={
                  <Select
                    // defaultValue="masofadan"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
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
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Ishlamoqchi bo’lgan ish turingiz"
                labelFor="jobType"
                req={true}
                input={
                  <Select
                    // defaultValue="full"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
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
                labelName="Olmoqchi bo’lgan ish haqingiz"
                labelFor="salary"
                input={<Input size="large" />}
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="Ta'lim muassasasini kiriting"
                labelFor="education"
                input={
                  <Input
                    size="large"
                    value="Kompyuter injiniring • TUIT • Bakalavr darajasi • 2019-2023"
                    suffix={
                      <span className="action-group__resume">
                        <img src={Edit} alt="Edit icon" />
                        <img src={Trash} alt="Trash icon" />
                      </span>
                    }
                  />
                }
              />
              <Row>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName=""
                    labelFor="educationAddButton"
                    input={
                      <Button
                        block
                        size="large"
                        onClick={() => setOpenStudyDrawer(true)}
                        icon={<img src={AddCircle} alt="" />}
                        style={{
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        Qo'shish
                      </Button>
                    }
                  />
                </Col>
              </Row>
            </Col>

            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="Ko’nikmalaringiz"
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
          </Row>
          <div className="footer__resume">
            <Button size="large" onClick={() => prev(1)}>
              Orqaga
            </Button>
            <button
              size="large"
              className="primary-btn"
              type="submit"
              style={{ marginLeft: "auto" }}
            >
              Davom etish
            </button>
          </div>
        </Form>
      </div>
      {
        <JobDrawer
          open={openJobDrawer}
          setOpen={setOpenJobDrawer}
          values={values}
          setValues={setValues}
        />
      }
      {<StudyDrawer open={openStudyDrawer} setOpen={setOpenStudyDrawer} />}
    </>
  );
};

export default ProfessionalInformation;
