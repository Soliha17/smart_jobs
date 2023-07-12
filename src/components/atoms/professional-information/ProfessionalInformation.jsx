import React, { useEffect, useState } from "react";

import { Button, Col, Divider, Form, Input, Row, Select } from "antd";
import "./professionalInformation.css";

import { useTranslation } from "react-i18next";

import LabeledInput from "../../molecules/labeled-input/LabeledInput";

import Trash from "src/assets/images/trash-icon.svg";
import Edit from "src/assets/images/edit-icon.svg";
import AddCircle from "src/assets/images/add-circle.svg";
import JobDrawer from "../../molecules/drawer/JobDrawer";
import StudyDrawer from "../../molecules/drawer/StudyDrawer";
import SkillSelect from "./SkillSelect";
import { useDispatch, useSelector } from "react-redux";
import {
  setExperienceData,
  setExperienceDrawerData,
} from "src/store/resume.slice";
import { useGetAllWorkFormatQuery } from "src/store/api/resumeApiSlice";
import { useGetAllSkillQuery, useGetAllTypeOfOrganizationQuery, useGetCurrenciesQuery } from "src/store/api/apiSlice";

const ProfessionalInformation = ({ props }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [openJobDrawer, setOpenJobDrawer] = useState(false);
  const [openStudyDrawer, setOpenStudyDrawer] = useState(false);

  const { data: workFormat } = useGetAllWorkFormatQuery();
  const { data: typeOfOrganization } = useGetAllTypeOfOrganizationQuery();
  const { data: currencies } = useGetCurrenciesQuery();
  const { data: skill } = useGetAllSkillQuery();

  const { experienceData } = useSelector((state) => state.createResumeSlice);

  console.log(experienceData);

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
      <div className="header__resume">
        <h3> {t("professionalAndEducationalInformation")} </h3>
        <p> {t("enterYourBasicInformation")} </p>
      </div>
      <div className="content__resume">
        <Form
          form={form}
          layout="vertical"
          initialValues={{ experience: jobValues.workedCompany }}
          // validateMessages={validateMessages}
          name="basic"
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[24, 8]}>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("profession")}
                labelFor="profession"
                req={true}
                input={<Input maxLength={70} size="large" />}
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("yourWorkExperience")}
                labelFor="experience"
                // req="true"
                input={experienceData?.map((item, index) => (
                  <div key={index} className="field__resume">
                    <span>
                      <h4>{item?.workedPosition}</h4>•
                      <p>{item?.workedCompany}</p>•
                      <p>
                        {item?.beginsMonthOfJob} {item?.beginsYearOfJob}
                      </p>
                      {item.workingUntilNow ? (
                        <p>- hozirgacha</p>
                      ) : (
                        <>
                          <p>- {item?.finishMonthOfJob}</p>
                          <p>{item?.finishYearOfJob}</p>
                        </>
                      )}
                      •<p>{item?.workedType}</p>•<p>{item?.format}</p>
                    </span>
                    <span className="action-group__resume">
                      <img
                        src={Edit}
                        alt="Edit icon"
                        onClick={() => {
                          // localStorage.setItem(
                          //   "isJobEdit",
                          //   JSON.stringify(item)
                          // );
                          dispatch(setExperienceDrawerData(item));
                          setOpenJobDrawer(true);
                        }}
                      />
                      <img
                        src={Trash}
                        onClick={() => {
                          let newArray = [
                            ...experienceData.slice(0, index),
                            ...experienceData.slice(index + 1),
                          ];
                          dispatch(setExperienceData(newArray));
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
                        {t("add")}
                      </Button>
                    }
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("theFormatYouWantToWorkWith")}
                labelFor="workFormat"
                req={true}
                input={
                  <Select
                    // defaultValue="masofadan"
                    placeholder={t("choose")}
                    size="large"
                    onChange={onChange}
                    options={workFormat?.result?.map((option) => ({
                      value: option.id.toString(),
                      label: option.name,
                    }))}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("theTypeOfWorkYouWantToDo")}
                labelFor="jobType"
                req={true}
                input={
                  <Select
                    // defaultValue="full"
                    placeholder={t("choose")}
                    size="large"
                    onChange={onChange}
                    options={typeOfOrganization?.result?.map((option) => ({
                      value: option.id.toString(),
                      label: option.name,
                    }))}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("theSalaryYouWantToReceive")}
                labelFor="salary"
                input={<Input size="large" type="number" min={0} />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName="Valyutani tanlang"
                labelFor="valyuteType"
                req={true}
                input={
                  <Select
                    // defaultValue="uzbekistan"
                    placeholder="Valyutani tanlang"
                    size="large"
                    onChange={onChange}
                    options={currencies?.result?.map((option) => ({
                      value: option.id.toString(),
                      label: option.name,
                    }))}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("enterTheEducationalInstitution")}
                labelFor="education"
                input={studyValues?.map((item) => (
                  <div key={item?.id} className="field__resume">
                    <span>
                      <h4>{item?.facultyName}</h4>•<p>{item?.studySchool}</p>•
                      <p>{item?.studyLevel}</p>•
                      <p>
                        {item?.beginsMonthOfStudy} {item?.beginsYearOfStudy}
                      </p>
                      {item.studyingUntilNow ? (
                        <p>- hozirgacha</p>
                      ) : (
                        <>
                          <p>- {item?.finishMonthOfStudy}</p>
                          <p>{item?.finishYearOfStudy}</p>
                        </>
                      )}
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
                    {t("add")}
                  </Button>
                </Col>
              </Row>
            </Col>

            <Col xs={24} sm={24} style={{ marginTop: "20px" }}>
              <SkillSelect form={form} />
            </Col>
          </Row>
          <div className="footer__resume">
            <Button size="large" onClick={() => prev(1)}>
              {t("back")}
            </Button>
            <button
              size="large"
              className="primary-btn"
              type="submit"
              style={{ marginLeft: "auto" }}
            >
              {t("continue")}
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
