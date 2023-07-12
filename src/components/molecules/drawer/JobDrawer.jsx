import {
  Button,
  Checkbox,
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { useEffect, useState } from "react";

import CloseIcon from "../../../assets/images/Exit.svg";

import "./drawerResume.css";
import LabeledInput from "../labeled-input/LabeledInput";
import TextArea from "antd/es/input/TextArea";
import AddCircle from "../../../assets/images/add-circle.svg";
import ExtraExperience from "./ExtraExperience";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetAllTypeOfOrganizationQuery,
  useGetAllWorkFormatQuery,
} from "src/store/api/resumeApiSlice";
import {
  useGetCountriesQuery,
  useGetRegionsQuery,
} from "src/store/api/apiSlice";
import {
  setExperienceData,
  setExperienceDrawerData,
} from "src/store/resume.slice";

const JobDrawer = ({
  open,
  setOpen,
  jobValues,
  setJobValues,
  getJobFunction,
}) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const { experienceDrawerData, experienceData } = useSelector(
    (state) => state.createResumeSlice
  );

  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  const { data: workFormat } = useGetAllWorkFormatQuery();
  const { data: typeOfOrganization } = useGetAllTypeOfOrganizationQuery();

  const [address, setAddress] = useState({ countryId: null, cityId: null });

  const { data: countries } = useGetCountriesQuery();

  const { data: regions, isFetching: isRegionsFetching } = useGetRegionsQuery(
    { davlatId: address.countryId },
    { skip: !address.countryId }
  );

  let isJobEditValues = JSON.parse(localStorage.getItem("isJobEdit"));

  useEffect(() => {
    // if (isJobEditValues !== null) {
    // }
    form.setFieldsValue(experienceDrawerData);
  }, [open, form, isJobEditValues]);

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(setExperienceData([...experienceData, values]));
    dispatch(setExperienceDrawerData({}));
    form.resetFields();
    setOpen(false);
  };

  const onClose = () => {
    // if (isJobEditValues !== null) {
    //   localStorage.removeItem("isJobEdit");
    //   form.resetFields();
    // }
    form.resetFields();
    // dispatch(setExperienceDrawerData({}));
    setOpen(false);
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

  function onChangeCountry(value, a, b, c) {
    form.setFieldsValue({
      countries: value,
      regions: undefined,
      cities: undefined,
    });
    setAddress({ ...address, countryId: value });
  }

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

  const finishYearOptions = yearOptions.filter(
    (item) => item.value >= Number(form.getFieldValue("beginsYearOfJob"))
  );

  console.log(finishYearOptions);

  function onChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <>
      <Drawer
        title={t("yourWorkExperience")}
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
            initialValues={experienceDrawerData}
            onFinish={onFinish}
            // onValuesChange={onRequiredTypeChange}
            // requiredMark={requiredMark}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={[24, 0]}>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("whatCompanyDidYouWorkFor")}
                  labelFor="workedCompany"
                  req={true}
                  input={<Input size="large" maxLength={9} />}
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("whatPositionDidYouWorkIn")}
                  labelFor="workedPosition"
                  req={true}
                  input={<Input size="large" maxLength={9} />}
                />
              </Col>
              <Col xs={24} sm={12}>
                <LabeledInput
                  labelName={t("typeOfEmployment")}
                  labelFor="workedType"
                  req={true}
                  input={
                    <Select
                      // defaultValue="full"
                      placeholder={t("selectTheTypeOfEmployment")}
                      size="large"
                      // onChange={onChange}
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
                  labelName={t("format")}
                  labelFor="format"
                  req={true}
                  input={
                    <Select
                      // defaultValue="masofadan"
                      placeholder={t("choose")}
                      size="large"
                      // onChange={onChange}
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
                      // onChange={onChange}
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
                  labelName={t("writeAboutYourAchievementsAtWork")}
                  labelFor="aboutAwardsOfJob"
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
                          options={finishYearOptions}
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
                  onClick={() => setChildrenDrawer(!childrenDrawer)}
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
            <div className="content__drawer">
              {childrenDrawer && (
                <ExtraExperience
                  open={childrenDrawer}
                  setOpen={setChildrenDrawer}
                />
              )}
            </div>
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
export default JobDrawer;
