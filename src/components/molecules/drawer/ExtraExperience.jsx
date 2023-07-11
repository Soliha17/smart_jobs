import React, { useState } from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import LabeledInput from "../labeled-input/LabeledInput";
import TextArea from "antd/es/input/TextArea";
import AddCircle from "../../../assets/images/add-circle.svg";
import ExtraExtraExperience from "./ExtraExtraExperience";
import { useTranslation } from "react-i18next";

const ExtraExperience = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const [isChecked, setIsChecked] = useState(true);


  const [showExtraExtraExperience, setShowExtraExtraExperience] =
    useState(false);

  const onChildrenDriwerFinish = (values) => {
    console.log("Success:", values);
    // setOpen(false);
  };
  const onChildrenDriwerFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { t } = useTranslation();

  const monthOptions = [
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
      value: "aprel",
      label: "Aprel",
    },
    {
      value: "may",
      label: "May",
    },
    {
      value: "iyun",
      label: "Iyun",
    },
    {
      value: "iyul",
      label: "Iyul",
    },
    {
      value: "avgust",
      label: "Avgust",
    },
    {
      value: "sentyabr",
      label: "Sentyabr",
    },
    {
      value: "oktyabr",
      label: "Oktyabr",
    },
    {
      value: "noyabr",
      label: "Noyabr",
    },
  ];

  const yearOptions = [];

  for (let i = 1970; i <= 2023; i++) {
    yearOptions.push({
      value: i.toString(),
      label: i.toString(),
    });
  }



  function onChange(event) {
    setIsChecked(event.target.checked);
  }

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
        <Row gutter={[24, 0]} style={{ marginTop: "40px" }}>
          <Col xs={24} sm={24}>
            <h3 className="title__job-drawer">
              {t("additionalExperienceInTheCompany")}
            </h3>
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName={t("whatPositionDidYouWorkIn")}
              labelFor="positionOfThatCompany"
              req={true}
              input={<Input size="large" />}
            />
          </Col>
          <Col xs={24} sm={24}>
            <LabeledInput
              labelName={t("typeOfEmployment")}
              labelFor="busyTypeOfThatCompany"
              req={true}
              input={
                <Select
                  // defaultValue="full"
                  placeholder={t("choose")}
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
              labelName={t("location")}
              labelFor="locationOfThatCompany"
              req={true}
              input={
                <Select
                  // defaultValue="buxoro"
                  placeholder={t("choose")}
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
              labelName={t("format")}
              labelFor="formatOfThatCompany"
              req={true}
              input={
                <Select
                  // defaultValue="masofadan"
                  placeholder={t("choose")}
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
              labelName={t("writeAboutYourAchievementsAtWork")}
              labelFor="aboutAwardsOfThatCompany"
              input={<TextArea rows={4} />}
            />
          </Col>
          <Col xs={24} sm={12}>
            <Row gutter={[12, 5]}>
              <Col xs={12}>
                <LabeledInput
                  labelName={t("startTime")}
                  labelFor="beginsMonthOfJob"
                  input={
                    <Select
                      // defaultValue="oy"
                      placeholder="Oy"
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
                  labelFor="beginsYearOfJob"
                  input={
                    <Select
                      // defaultValue="oy"
                      placeholder="Yil"
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
                  labelFor="finishMonthOfJob"
                  input={
                    <Select
                      // defaultValue="oy"
                      placeholder="Oy"
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
                  labelFor="finishYearOfJob"
                  input={
                    <Select
                      // defaultValue="oy"
                      placeholder="Yil"
                      size="large"
                      disabled={isChecked}
                      // onChange={onChange}
                      options={yearOptions}
                    />
                  }
                />
              </Col>
              <Col xs={24}>
                <LabeledInput
                  // labelName="&nbsp;"
                  valuePropName="checked"
                  labelFor="workingUntilNow"
                  input={
                    <Checkbox checked={isChecked} onChange={onChange}>
                      {t("untilNow")}
                    </Checkbox>
                  }
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24}>
            <Button
              block
              size="large"
              icon={<img src={AddCircle} alt="" />}
              onClick={() =>
                setShowExtraExtraExperience(!showExtraExtraExperience)
              }
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
      </Form>
      {showExtraExtraExperience && (
        <ExtraExtraExperience
          open={showExtraExtraExperience}
          setOpen={setShowExtraExtraExperience}
        />
      )}
    </>
  );
};

export default ExtraExperience;
