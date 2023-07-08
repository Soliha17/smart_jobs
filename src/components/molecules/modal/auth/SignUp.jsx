import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetSmsCodeThunk, setSmsCode } from "src/store/auth.slice";
import { useVerifySmsCodeMutation } from "src/store/api/authApiSlice";

import { Col, Row, Form } from "antd";
import { useTranslation } from "react-i18next";

import "./modal.css";

import BackIcon from "src/assets/images/arrow-back-modal.svg";
import ResendIcon from "src/assets/images/resend-icon.svg";

import OTPInput from "./OTP";

const SignUp = ({ next, prev }) => {
  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState("");
  const [errorText, setErrorText] = useState("");

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();

  const isLanguageEnglish = i18n.language === "en";
  const isLanguageRussian = i18n.language === "ru";

  const { selectedRole } = useSelector((state) => state.selectRoleSlice);
  const { phoneNumber } = useSelector((state) => state.authSlice);

  const [verifySmsCode] = useVerifySmsCodeMutation();

  const { smsId } = useSelector((state) => state.authSlice);

  const onFinish = (values) => {
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleBack() {
    prev(1);
    dispatch(setSmsCode(["", "", "", ""]));
  }

  const onInputValueChange = (value) => {
    if (value.length < 4) {
      setErrorText("Raqam 4 ta bo'lishi kerak");
      return;
    } else {
      setErrorText("");
    }

    setInputValue(value);

    verifySmsCode({ role: selectedRole, body: { code: value, id: smsId } })
      .unwrap()
      .then((res) => {
        setErrorText("");
        if (res.result?.success) {
          next(2);
        }
      })
      .catch((error) => setErrorText("Xato kod"));
  };

  const initialSeconds = 60;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevCount) => {
        if (prevCount > 1) {
          return prevCount - 1;
        } else {
          clearInterval(interval);
          setIsTimerFinished(true);
          return 0;
        }
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isTimerFinished, inputValue]);

  function handleTimerReset() {
    setSeconds(initialSeconds);
    setIsTimerFinished(false);
    setErrorText("");

    dispatch(setSmsCode(["", "", "", ""]));

    dispatch(
      GetSmsCodeThunk({
        phone: phoneNumber
          .split("")
          .filter((item) => item !== " ")
          .join(""),
        role: selectedRole === "Worker" ? "worker" : "organizator",
      })
    );
  }

  return (
    <div className="body__login-modal">
      <span className="back-icon__modal">
        <img src={BackIcon} onClick={handleBack} alt="BackIcon" />
      </span>
      <h3 className="header__modal">{t("verificationCode")}</h3>
      <p className="info__modal">
        {t("verificationCode")} {phoneNumber} {t("sentToTheNumber")}
      </p>
      <div className="content__login-modal">
        <Form
          form={form}
          layout="vertical"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={24}>
              <div className="code-container__modal">
                <div className="code-group__modal">
                  <OTPInput
                    error={errorText}
                    length={4}
                    autoFocus={true}
                    onValueChange={onInputValueChange}
                  />
                </div>
                <span className="error-text__code-group-modal">
                  {errorText}
                </span>
              </div>
            </Col>
          </Row>
        </Form>
        {isTimerFinished ? (
          <span className="text__login-modal" onClick={handleTimerReset}>
            <img src={ResendIcon} alt="ResendIcon" />
            <p className="resend-text__modal">{t("resend")}</p>
          </span>
        ) : (
          <span className="text__login-modal">
            {isLanguageEnglish || isLanguageRussian ? (
              <p>
                {t("ifTheCodeDoesNotCome")}
                {t("youCanGetANewOneInSeconds")} {seconds}
                {t("seconds")}
              </p>
            ) : (
              <p>
                {t("ifTheCodeDoesNotCome")} {seconds}{" "}
                {t("youCanGetANewOneInSeconds")}
              </p>
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default SignUp;
