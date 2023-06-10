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

import LabeledInput from "../labeled-input/LabeledInput";
import BackIcon from "../../../assets/images/arrow-back-modal.svg";
import { useTranslation } from "react-i18next";

const InfoFills = ({ open, setOpen, prev, next, selectedButton }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    setOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleBack() {
    prev(2);
  }

  console.log(selectedButton);

  const { t } = useTranslation();

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
            {selectedButton === "btn2" && (
              <>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName={t("enterYourCompanyName")}
                    labelFor="nameOfCompanyInfo"
                    req={true}
                    input={<Input maxLength={32} size="large" />}
                  />
                </Col>
                <Col xs={24} sm={24}>
                  <LabeledInput
                    labelName={t("numberOfEmployees")}
                    labelFor="amountOfCompanyInfo"
                    req={true}
                    input={
                      <Select
                        // defaultValue="full"
                        placeholder={t("choose")}
                        size="large"
                        // onChange={onChange}
                        options={[
                          {
                            value: "1-20",
                            label: "1-20",
                          },
                          {
                            value: "21-30",
                            label: "21-30",
                          },
                          {
                            value: "31-50",
                            label: "31-50",
                          },
                          {
                            value: "51-70",
                            label: "51-70",
                          },
                          {
                            value: "71-100",
                            label: "71-100",
                          },
                          {
                            value: "101-150",
                            label: "101-150",
                          },
                          {
                            value: "151-300",
                            label: "151-300",
                          },
                          {
                            value: "301-500",
                            label: "301-500",
                          },
                          {
                            value: "501-800",
                            label: "501-800",
                          },
                          {
                            value: "801-2000",
                            label: "801-2000",
                          },
                        ]}
                      />
                    }
                  />
                </Col>
              </>
            )}

            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("enterYourName")}
                labelFor="nameOfInfo"
                req={true}
                input={
                  <Input maxLength={32} size="large" placeholder="Nodir" />
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("enterYourLastName")}
                labelFor="surnameOfInfo"
                req={true}
                input={
                  <Input maxLength={32} size="large" placeholder="Karimov" />
                }
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("birthday")}
                labelFor="birthdayOfInfo"
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
                labelFor="genderOfInfo"
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
                labelFor="countryOfInfo"
                req={true}
                input={
                  <Select
                    // defaultValue="uzbekistan"
                    placeholder={t("choose")}
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
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("city")}
                labelFor="cityOfInfo"
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
                labelName={t("email")}
                labelFor="emailOfInfo"
                req={true}
                input={<Input size="large" />}
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("comeUpWithAPassword")}
                labelFor="parolOfInfo"
                req={true}
                input={<Input.Password size="large" />}
              />
            </Col>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("enterThePasswordAgain")}
                labelFor="confirmParolOfInfo"
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
