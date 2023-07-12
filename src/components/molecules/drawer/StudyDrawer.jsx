import { useEffect, useState } from "react";
import { Checkbox, Col, Drawer, Form, Input, Row, Select, Space } from "antd";

import CloseIcon from "../../../assets/images/Exit.svg";

import "./drawerResume.css";
import LabeledInput from "../labeled-input/LabeledInput";
import { useTranslation } from "react-i18next";
import { monthOptions } from "src/assets/constants/inputConstants";
import { useGetAllEducationLevelQuery } from "src/store/api/apiSlice";
import { useEducationMutation } from "src/store/api/resumeApiSlice";

const StudyDrawer = ({
  open,
  setOpen,
  studyValues,
  setStudyValues,
  getStudyFunction,
}) => {
  const [form] = Form.useForm();
  const [isChecked, setIsChecked] = useState(false);

  const { data: allEducationLevel } = useGetAllEducationLevelQuery();
  const [createEducation] = useEducationMutation();

  console.log(allEducationLevel);

  let isStudyEditValues = JSON.parse(localStorage.getItem("isStudyEdit"));

  useEffect(() => {
    if (isStudyEditValues !== null) {
      form.setFieldsValue(isStudyEditValues);
    }
  }, [open, form, isStudyEditValues]);
  // []da faqat open qolishi kerak, netlifyga deploy qilishda xato bermasligi uchun qoyilgan qolganlari

  function onChange(event) {
    setIsChecked(event.target.checked);
  }

  const onClose = () => {
    if (isStudyEditValues !== null) {
      localStorage.removeItem("isStudyEdit");
      form.resetFields();
    }

    setOpen(false);
  };

  const onFinish = (data) => {
    console.log("Success:", data);
    setOpen(false);


    // next(2);
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

  const yearOptions = [];

  for (let i = 1970; i <= 2023; i++) {
    yearOptions.push({
      value: i.toString(),
      label: i.toString(),
    });
  }

  const finishYearOptions = yearOptions.filter(
    (item) => item.value >= Number(form.getFieldValue("beginsYearOfJob"))
  );

  return (
    <>
      <Drawer
        title="Ta'lim muassasasi"
        size="large"
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <img src={CloseIcon} onClick={onClose} alt="CloseIcon" />
          </Space>
        }
      >
        <div className="content__drawer">
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
            onFinish={onFinish}
            // onValuesChange={onRequiredTypeChange}
            // requiredMark={requiredMark}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={[24, 0]}>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("educationalInstitution")}
                  labelFor="organization"
                  req={true}
                  input={<Input size="large" placeholder="Masalan, Harvard" />}
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("facultyName")}
                  labelFor="faculty"
                  req={true}
                  input={
                    <Input size="large" placeholder="Masalan, Psixologiya" />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("educationLevel")}
                  labelFor="educationLevelId"
                  req={true}
                  input={
                    <Select
                      // defaultValue="full"
                      placeholder={t("choose")}
                      size="large"
                      // onChange={onChange}
                      options={allEducationLevel?.result?.map((level) => ({
                        id: level.id.toString(),
                        value: level.name,
                      }))}
                    />
                  }
                />
              </Col>

              <Col xs={24} sm={12}>
                <Row gutter={[12, 5]}>
                  <Col xs={12}>
                    <LabeledInput
                      labelName={t("startTime")}
                      labelFor="beginsMonthOfStudy"
                      input={
                        <Select
                          // defaultValue="oy"
                          placeholder={t("month")}
                          size="large"
                          // onChange={onChange}
                          options={monthOptions}
                        />
                      }
                    />
                  </Col>
                  <Col xs={12}>
                    <LabeledInput
                      labelName="&nbsp;"
                      labelFor="beginsYearOfStudy"
                      input={
                        <Select
                          // defaultValue="oy"
                          placeholder={t("year")}
                          size="large"
                          // onChange={onChange}
                          options={yearOptions}
                        />
                      }
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={24} sm={12}>
                <Row gutter={[12, 5]}>
                  <Col xs={12}>
                    <LabeledInput
                      labelName={t("endTime")}
                      labelFor="finishMonthOfStudy"
                      input={
                        <Select
                          // defaultValue="oy"
                          placeholder={t("month")}
                          size="large"
                          disabled={isChecked}
                          // onChange={onChange}
                          options={monthOptions}
                        />
                      }
                    />
                  </Col>
                  <Col xs={12}>
                    <LabeledInput
                      labelName="&nbsp;"
                      labelFor="finishYearOfStudy"
                      input={
                        <Select
                          // defaultValue="oy"
                          placeholder={t("year")}
                          size="large"
                          disabled={isChecked}
                          // onChange={onChange}
                          options={finishYearOptions}
                        />
                      }
                    />
                  </Col>
                  <Col xs={24}>
                    <LabeledInput
                      // labelName="&nbsp;"
                      valuePropName="checked"
                      labelFor="studyingUntilNow"
                      input={
                        <Checkbox checked={isChecked} onChange={onChange}>
                          {t("untilNow")}
                        </Checkbox>
                      }
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <button
              type="submit"
              style={{ marginTop: "32px" }}
              className="primary-btn"
            >
              {t("save")}
            </button>
          </Form>
        </div>
      </Drawer>
    </>
  );
};
export default StudyDrawer;
