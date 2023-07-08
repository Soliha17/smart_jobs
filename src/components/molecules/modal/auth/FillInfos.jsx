import {
  Col,
  Input,
  Row,
  Form,
  DatePicker,
  Radio,
  Select,
  Checkbox,
} from "antd";

import "./modal.css";

import LabeledInput from "../../labeled-input/LabeledInput";
import BackIcon from "../../../../assets/images/arrow-back-modal.svg";

import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  useRegisterOrganizationMutation,
  useRegisterWorkerMutation,
} from "../../../../store/api/authApiSlice";
import {
  useGetAddressQuery,
  useGetCitiesQuery,
  useGetCompanyDirectionsQuery,
  useGetCompanySizesQuery,
  useGetCountriesQuery,
  useGetRegionsQuery,
} from "../../../../store/api/apiSlice";

const InfoFills = ({ open, setOpen, prev, next }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();
  const [address, setAddress] = useState({ countryId: null, regionId: null });

  const {selectedRole} = useSelector(
    (state) => state.selectRoleSlice
  );
  const phoneNumber = useSelector((state) => state.authSlice.phoneNumber);

  const [registerOrganization] = useRegisterOrganizationMutation();
  const [registerWorker] = useRegisterWorkerMutation();
  const { data: companyDirections } = useGetCompanyDirectionsQuery();
  const { data: getCompanySizes } = useGetCompanySizesQuery();
  const { data: getAddress } = useGetAddressQuery();
  const { data: countries } = useGetCountriesQuery();
  const { data: regions, isFetching: isRegionsFetching } = useGetRegionsQuery(
    { davlatId: address.countryId },
    { skip: !address.countryId }
  );
  const { data: cities, isFetching: isCitiesFetching } = useGetCitiesQuery(
    { viloyatId: address.regionId },
    { skip: !address.regionId }
  );

  console.log(form.getFieldValue("countries"));

  const onFinish = (values) => {
    console.log("Success:", values.countries);

    if (selectedRole === "Organization") {
      registerOrganization({
        description: "",
        logo: "",
        webSiteUrl: "",
        addressId: values.countries,
        name: values.name,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: phoneNumber
          .split("")
          .filter((item) => item !== " ")
          .join(""),
        password: values.password,
        companySizeId: Number(values.companySizeId),
        companyDirectionId: Number(values.companyDirectionId),
      })
        .unwrap()
        .then((res) => {
          // setOpen(false);
          prev(1);
          console.log("res:", res);
        });
    } else {
      const formattedBirthDate = values.bithDate.format(
        "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
      );

      registerWorker({
        addressId: values.countries,
        phoneNumber: phoneNumber
          .split("")
          .filter((item) => item !== " ")
          .join(""),
        bithDate: formattedBirthDate,
        firstName: values.firstName,
        lastName: values.lastName,
        sex: values.sex === "male" ? true : false,
        email: values.email,
        password: values.password,
      })
        .unwrap()
        .then((res) => {
          // setOpen(false);
          prev(1);
        });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleBack() {
    prev(3);
  }

  function onChange() {
    console.log("inpiut changing");
  }

  function onChangeCountry(value, a, b, c) {
    form.setFieldsValue({
      countries: value,
      regions: undefined,
      cities: undefined,
    });
    setAddress({ ...address, countryId: value });
  }

  function onChangeRegion(value) {
    form.setFieldsValue({ regions: value, cities: undefined });
    setAddress({ ...address, regionId: value });
  }

  return (
    <div className="body__login-modal full-infos-modal">
      <span className="back-icon__modal">
        <img src={BackIcon} onClick={handleBack} alt="BackIcon" />
      </span>
      <h3>{t("enterYourInformation")}</h3>
      <p className="info__modal">
        {t("theFollowingAreRequiredForRegistration")}
      </p>
      <div className="content__login-modal">
        <Form
          form={form}
          layout="vertical"
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
          <Row gutter={[24, 5]}>
            {selectedRole === "Organization" && (
              <>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName={t("enterYourCompanyName")}
                    labelFor="name"
                    req={true}
                    input={<Input maxLength={32} size="large" />}
                  />
                </Col>

                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName={t("numberOfEmployees")}
                    labelFor="companySizeId"
                    req={true}
                    input={
                      <Select
                        // defaultValue="full"
                        placeholder={t("choose")}
                        size="large"
                        // onChange={onChange}
                        options={getCompanySizes?.result.map((option) => ({
                          value: option.id.toString(),
                          label: option.name,
                        }))}
                      />
                    }
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName="Kompaniyangiz yo'nalishi"
                    labelFor="companyDirectionId"
                    req={true}
                    input={
                      <Select
                        // defaultValue="full"
                        placeholder={t("choose")}
                        size="large"
                        // onChange={onChange}
                        options={companyDirections?.result.map((option) => ({
                          value: option.id.toString(),
                          label: option.name,
                        }))}
                      />
                    }
                  />
                </Col>
              </>
            )}

            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("enterYourName")}
                labelFor="firstName"
                req={true}
                input={
                  <Input maxLength={32} size="large" placeholder="Nodir" />
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("enterYourLastName")}
                labelFor="lastName"
                req={true}
                input={
                  <Input maxLength={32} size="large" placeholder="Karimov" />
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("birthday")}
                labelFor="bithDate"
                req={true}
                input={
                  <DatePicker
                    // onChange={onChange}
                    size="large"
                    picker="date"
                    format={"DD/MM/YYYY"}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("gender")}
                labelFor="sex"
                req={true}
                input={
                  <Radio.Group
                    // onChange={onChange}
                    // defaultValue="male"
                    size="large"
                  >
                    <Radio.Button value="male">{t("male")}</Radio.Button>
                    <Radio.Button value="female">{t("female")}</Radio.Button>
                  </Radio.Group>
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("country")}
                labelFor="countries"
                req={true}
                input={
                  <Select
                    // defaultValue="uzbekistan"
                    placeholder={t("choose")}
                    size="large"
                    onChange={onChangeCountry}
                    options={countries?.result.map((option) => ({
                      value: option.id.toString(),
                      label: option.name,
                    }))}
                  />
                }
              />
            </Col>

            <Col xs={24} sm={24}>
              <LabeledInput
                labelName="Viloyat"
                labelFor="regions"
                req={true}
                input={
                  <Select
                    // defaultValue="buxoro"
                    placeholder={t("choose")}
                    size="large"
                    onChange={onChangeRegion}
                    options={
                      isRegionsFetching
                        ? []
                        : regions?.result.map((option) => ({
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
                labelName={t("city")}
                labelFor="cities"
                req={true}
                input={
                  <Select
                    // defaultValue="buxoro"
                    placeholder={t("choose")}
                    size="large"
                    onChange={onChange}
                    options={
                      isCitiesFetching
                        ? []
                        : cities?.result.map((option) => ({
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
                labelName={t("email")}
                labelFor="email"
                req={true}
                input={<Input size="large" />}
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("comeUpWithAPassword")}
                labelFor="password"
                req={true}
                input={<Input.Password minLength={8} size="large" />}
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("enterThePasswordAgain")}
                labelFor="confirmPassword"
                req={true}
                input={<Input.Password size="large" />}
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName=""
                labelFor="agreementOfInfo"
                valuePropName="checked"
                input={
                  <Checkbox>
                    {t("byContinuing")} <a href="/">{t("universalContract")}</a>{" "}
                    {t("iConfirmThatIHaveReadAndAcceptedIt")}
                  </Checkbox>
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <button type="submit" className="primary-btn">
                {t("signUp")}
              </button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};
export default InfoFills;
