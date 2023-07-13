import React, { useEffect, useState } from "react";
import { Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from "antd";
import LabeledInput from "../labeled-input/LabeledInput";
import CloseIcon from "../../../assets/images/Exit.svg";
import { useTranslation } from "react-i18next";
import {
  useGetCountriesGeneralQuery,
  useGetCountriesQuery,
  useGetRegionsQuery,
} from "src/store/api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setFamilyDrawerData } from "src/store/resume.slice";
import { usePostRelativeMutation } from "src/store/api/resumeApiSlice";

const FamiliarInsideDrawer = ({
  open,
  setOpen,
  getFamilyFn,
  familyValues,
  setFamilyValues,
}) => {
  const [form] = Form.useForm();

  const [date, setDate] = useState(new Date());
  const [address, setAddress] = useState({ countryId: null, cityId: null });

  const { familyDrawerData, experienceData } = useSelector(
    (state) => state.createResumeSlice
  );

  console.log(familyDrawerData);

  const dispatch = useDispatch();

  const { data: countries } = useGetCountriesQuery();
  const { data: countriesGeneral } = useGetCountriesGeneralQuery();
  const { data: regions, isFetching: isRegionsFetching } = useGetRegionsQuery(
    { davlatId: address.countryId },
    { skip: !address.countryId }
  );
  const [postRelative] = usePostRelativeMutation();

  let isFamilyEditValues = JSON.parse(localStorage.getItem("isFamilyEdit"));

  useEffect(() => {
    form.setFieldValue(familyDrawerData);
  }, [open, isFamilyEditValues, form]);

  // []da faqat open qolishi kerak, netlifyga deploy qilishda xato bermasligi uchun qoyilgan qolganlari

  const onChildrenDriwerFinish = (values) => {
    console.log("Success:", values);
    // dispatch(setFamilyDrawerData({}));
    // form.resetFields();
    // setOpen(false);
    postRelative({
      ...values,
      typeOfKinshipId: 0,
      birthDate: values?.birthDate?.format("YYYY-MM-DDTHH:mm:ss.SSS[Z]"),
      resumeId: 0,
    });
  };

  function onClose() {
    // if (isFamilyEditValues !== null) {
    //   localStorage.removeItem("isFamilyEdit");
    // }
    form.resetFields();

    setOpen(false);
  }

  const onChildrenDriwerFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (date) => {
    setDate(date);
  };

  function onChangeCountry(value, a, b, c) {
    form.setFieldsValue({
      countries: value,
      regions: undefined,
      cities: undefined,
    });
    setAddress({ ...address, countryId: value });
  }

  const { t } = useTranslation();

  return (
    <>
      <Drawer
        title={t("aFamilyMember")}
        width={603}
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
            initialValues={familyDrawerData}
            onFinish={onChildrenDriwerFinish}
            // onValuesChange={onRequiredTypeChange}
            // requiredMark={requiredMark}
            onFinishFailed={onChildrenDriwerFinishFailed}
            autoComplete="off"
          >
            <Row gutter={[24, 0]}>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("aFamilyMember")}
                  labelFor="typeOfKinshipId"
                  req={true}
                  input={
                    <Select
                      // defaultValue="full"
                      size="large"
                      placeholder={t("choose")}
                      // onChange={onChange}
                      options={[
                        {
                          value: "father",
                          label: "Otasi",
                        },
                        {
                          value: "mother",
                          label: "Onasi",
                        },
                      ]}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("fullNameOfFather")}
                  labelFor="fio"
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
                  labelName={t("citizenship")}
                  labelFor="citizenshipId"
                  req={true}
                  input={
                    <Select
                      // defaultValue="full"
                      size="large"
                      placeholder={t("choose")}
                      // onChange={onChange}
                      options={(countriesGeneral?.result ?? [])?.map(
                        (option) => ({
                          value: option.id.toString(),
                          label: option.name,
                        })
                      )}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("birthday")}
                  labelFor="birthDate"
                  req={true}
                  input={
                    <DatePicker
                      size="large"
                      picker="date"
                      format={"DD/MM/YYYY"}
                      placeholder="kun/oy/yil"
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={12}>
                <LabeledInput
                  labelName={t("country")}
                  labelFor="countryId"
                  req={true}
                  input={
                    <Select
                      size="large"
                      placeholder={t("choose")}
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
                  labelFor="cityId"
                  req={true}
                  input={
                    <Select
                      size="large"
                      placeholder={t("choose")}
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
                  labelName={t("workplace")}
                  labelFor="workplace"
                  req={true}
                  input={<Input size="large" />}
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName={t("position")}
                  labelFor="position"
                  req={true}
                  input={<Input size="large" />}
                />
              </Col>
            </Row>
            <div className="footer__resume">
              <button size="large" className="primary-btn" type="submit">
                {t("save")}
              </button>
            </div>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

export default FamiliarInsideDrawer;
