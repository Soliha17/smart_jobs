import React, { useEffect, useState } from "react";

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

  const [jobValues, setJobValues] = useState([]);
  const [studyValues, setStudyValues] = useState([]);

  // const [studyValues, setStudyValues] = useState([]);
  // const [isEdit, setIsEdit] = useState(null);

  // const [requiredMark, setRequiredMarkType] = useState("optional");
  // const onRequiredTypeChange = ({ requiredMarkValue }) => {
  //   setRequiredMarkType(requiredMarkValue);
  // };

  useEffect(() => {
    getJobFromLocalStorage();
    getStudyFromLocalStorage();
  }, []);

  function getJobFromLocalStorage() {
    let jobDrawerValues = JSON.parse(localStorage.getItem("jobDrawerValues"));
    if (jobDrawerValues !== null) {
      setJobValues(jobDrawerValues);
    }
  }

  function getStudyFromLocalStorage() {
    let studyDrawerValues = JSON.parse(
      localStorage.getItem("studyDrawerValues")
    );
    if (studyDrawerValues !== null) {
      setStudyValues(studyDrawerValues);
    }
  }

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const next = props.next;
  const prev = props.prev;

  const onFinish = (values) => {
    console.log("Success:", values);
    next(2);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
          initialValues={{ experience: jobValues.workedCompany }}
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
                // req="true"
                input={jobValues?.map((item) => (
                  <div key={item?.id} className="field__resume">
                    <span>
                      <h4>{item?.workedLevel}</h4>•<p>{item?.workedCompany}</p>•
                      <p>
                        {item?.beginsMonthOfJob} {item?.beginsYearOfJob}
                      </p>
                      <p>- {item?.finishOfJob}</p>•<p>{item?.workedType}</p>•
                      <p>{item?.format}</p>
                    </span>
                    <span className="action-group__resume">
                      <img
                        src={Edit}
                        alt="Edit icon"
                        onClick={() => {
                          localStorage.setItem(
                            "isJobEdit",
                            JSON.stringify(item)
                          );
                          setOpenJobDrawer(true);
                        }}
                      />
                      <img
                        src={Trash}
                        onClick={() => {
                          let newArray = jobValues.filter(
                            (del) => del.id !== item.id
                          );
                          setJobValues(newArray);
                          localStorage.setItem(
                            "jobDrawerValues",
                            JSON.stringify(newArray)
                          );
                          getJobFromLocalStorage();
                        }}
                        alt="Trash icon"
                      />
                    </span>
                  </div>
                ))}
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
                input={studyValues?.map((item) => (
                  <div key={item?.id} className="field__resume">
                    <span>
                      <h4>{item?.facultyName}</h4>•<p>{item?.studySchool}</p>•
                      <p>{item?.studyLevel}</p>•
                      <p>
                        {item?.beginsMonthOfStudy} {item?.beginsYearOfStudy}
                      </p>
                      <p>- {item?.finishMonthOfStudy}</p>
                      <p>{item?.finishYearOfStudy}</p>
                    </span>
                    <span className="action-group__resume">
                      <img
                        src={Edit}
                        alt="Edit icon"
                        onClick={() => {
                          localStorage.setItem(
                            "isStudyEdit",
                            JSON.stringify(item)
                          );
                          setOpenStudyDrawer(true);
                        }}
                      />
                      <img
                        src={Trash}
                        onClick={() => {
                          let newArray = studyValues.filter(
                            (del) => del.id !== item.id
                          );
                          setStudyValues(newArray);
                          localStorage.setItem(
                            "studyDrawerValues",
                            JSON.stringify(newArray)
                          );
                          getStudyFromLocalStorage();
                        }}
                        alt="Trash icon"
                      />
                    </span>
                  </div>
                ))}
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
          jobValues={jobValues}
          setJobValues={setJobValues}
          getJobFunction={getJobFromLocalStorage}
        />
      }
      {
        <StudyDrawer
          open={openStudyDrawer}
          setOpen={setOpenStudyDrawer}
          studyValues={studyValues}
          setStudyValues={setStudyValues}
          getStudyFunction={getStudyFromLocalStorage}
        />
      }
    </>
  );
};

export default ProfessionalInformation;
