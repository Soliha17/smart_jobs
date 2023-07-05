import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Form, Input } from "antd";

import "./modal.css";

import BackIcon from "../../../assets/images/arrow-back-modal.svg";
import ResendIcon from "../../../assets/images/resend-icon.svg";
// import OTPInput from "../../atoms/OTPInput";
import { useSelector } from "react-redux";
import {
  useVerifySmsCodeOrganizationMutation,
  useVerifySmsCodeWorkerMutation,
} from "../../../store/api/apiSlice";

const SignUp = ({ next, prev, data }) => {
  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState("");
  const [errorText, setErrorText] = useState("");

  const selectedButton = useSelector(
    (state) => state.selectRoleSlice.selectedButton
  );

  const [verifySmsCodeOrganization] = useVerifySmsCodeOrganizationMutation();
  const [verifySmsCodeWorker] = useVerifySmsCodeWorkerMutation();

  const { smsId } = useSelector((state) => state.authSlice);

  const onFinish = (values) => {
    console.log("Success:", values);
    // dispatch(setSmsCode(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // console.log(data);

  function handleBack() {
    prev(1);
  }

  const onInputValueChange = (e) => {
    const value = e.target.value;

    if (value.length <= 4) {
      setInputValue(value);
      // console.log(value);
    }

    if (value.length === 4) {
      if (selectedButton === "organization") {
        verifySmsCodeOrganization({ code: value, id: smsId })
          .unwrap()
          .then((res) => {
            if (res.result.success) {
              next(2);
            } else {
              setErrorText("Xato kod");
            }
          });
      } else {
        verifySmsCodeWorker({ code: value, id: smsId })
          .unwrap()
          .then((res) => {
            if (res.result.success) {
              next(2);
            } else {
              setErrorText("Xato kod");
            }
          });
      }
    }

    if (value.length > 1 && value.length < 4) {
      setErrorText("4 ta raqam bo'lishi kerak");
    } else {
      setErrorText("");
    }
  };

  const initialSeconds = 60;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  useEffect(() => {
    setErrorText(inputValue.length > 1 || inputValue.length >= 4);

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
    return () => clearInterval(interval);
  }, [isTimerFinished, inputValue]);

  function handleTimerReset() {
    setSeconds(initialSeconds);
    setIsTimerFinished(false);
  }

  const { t, i18n } = useTranslation();

  const isLanguageEnglish = i18n.language === "en";
  const isLanguageRussian = i18n.language === "ru";

  return (
    <div className="body__login-modal">
      <span className="back-icon__modal">
        <img src={BackIcon} onClick={handleBack} alt="BackIcon" />
      </span>
      <h3 className="header__modal">{t("verificationCode")}</h3>
      <p className="info__modal">
        {t("verificationCode")} {data} {t("sentToTheNumber")}
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
              <div className="code-group__modal">
                <Input
                  className="code-input__modal"
                  type="number"
                  maxLength={4}
                  value={inputValue}
                  onChange={onInputValueChange}
                />
                {<span className="error-text">{errorText}</span>}
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
