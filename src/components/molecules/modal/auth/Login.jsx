import { Col, Input, Row, Form } from "antd";

import "./modal.css";

import PrivacyIcon from "src/assets/images/privacy-icon.svg";
import LabeledInput from "../../labeled-input/LabeledInput";
import BackIcon from "src/assets/images/arrow-back-modal.svg";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setSmsCode } from "src/store/auth.slice";
import {
  useLazyGetOrganizationQuery,
  useLazyGetWorkerQuery,
  useLoginOrganizationMutation,
  useLoginWorkerMutation,
} from "src/store/api/authApiSlice";
import { setIsUserLoggedIn } from "src/store/selectRole.slice";

const Login = ({ next, prev, setOpen }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [errorText, setErrorText] = useState("");

  const { phoneNumber } = useSelector((state) => state.authSlice);

  const { selectedRole } = useSelector((state) => state.selectRoleSlice);
  // console.log(phoneNumber);

  const [loginOrganization, { isLoading: orgLoading }] =
    useLoginOrganizationMutation();
  const [loginWorker, { isLoading: workerLoading }] = useLoginWorkerMutation();
  const [getOrganization, { data: organizationMe }] =
    useLazyGetOrganizationQuery();
  const [getWorker, { data: workerMe }] = useLazyGetWorkerQuery();

  const onFinish = (values) => {
    // console.log("Success:", values);

    if (selectedRole === "Organization") {
      let resultInputValue = phoneNumber
        .split("")
        .filter((item) => item !== " ")
        .join("");

      loginOrganization({
        login: resultInputValue,
        password: values.password,
      })
        .unwrap()
        .then((res) => {
          console.log("neeeeddd", res.result.token.accessToken);
          localStorage.setItem("accessToken", res.result.token.accessToken);
          localStorage.setItem("refreshToken", res.result.token.refreshToken);
          setErrorText("");
          getOrganization();
          dispatch(setSmsCode(["", "", "", ""]));
          dispatch(setIsUserLoggedIn(true));
          setOpen(false);
        })
        .catch((error) => {
          console.log(error);
          if (error.status === 404) {
            setErrorText("Parolni xato kiritdingiz");
          } else {
            setErrorText("Siz boshqa role bilan ro'yxatdan o'tgansiz!");
          }
        });
    } else {
      loginWorker({
        login: phoneNumber
          .split("")
          .filter((item) => item !== " ")
          .join(""),
        password: values.password,
      })
        .unwrap()
        .then((res) => {
          // console.log(res);
          localStorage.setItem("accessToken", res.result.token.accessToken);
          localStorage.setItem("refreshToken", res.result.token.refreshToken);
          setErrorText("");
          getWorker();
          dispatch(setSmsCode(["", "", "", ""]));
          dispatch(setIsUserLoggedIn(true));
          setOpen(false);
        })
        .catch((error) => {
          if (error.status === 404) {
            setErrorText("Parolni xato kiritdingiz");
          } else {
            setErrorText("Muammo bo'ldi aylanib keling!");
          }
        });
    }

    // if (values.parolOfLogin === "solya") {
    //   // navigate("/dashboard");
    //   // setOpen(false);
    // }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleBack() {
    prev(2);
  }

  const { t } = useTranslation();

  return (
    <div className="signin-modal">
      <span className="back-icon__modal">
        <img src={BackIcon} onClick={handleBack} alt="BackIcon" />
      </span>

      <h3 className="header__modal">{t("entrance")}</h3>
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
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24}>
              <LabeledInput
                labelName={t("enterYourPassword")}
                labelFor="password"
                className={"parol-input__modal"}
                req={true}
                input={<Input.Password size="large" />}
              />
              <span className="error-text">{errorText}</span>
            </Col>
            <Col xs={24} sm={24}>
              <button
                disabled={orgLoading || workerLoading}
                className="primary-btn"
              >
                {t("continue")}
              </button>
            </Col>
          </Row>
        </Form>
        <span className="text__login-modal">
          <img src={PrivacyIcon} alt="privacy-icon" />
          <p>{t("allYourInformationIsProtected")}</p>
        </span>
      </div>
    </div>
  );
};
export default Login;
