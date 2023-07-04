import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Form, Input } from "antd";

import "./modal.css";

import BackIcon from "../../../assets/images/arrow-back-modal.svg";
import ResendIcon from "../../../assets/images/resend-icon.svg";
import OTPInput from "../../atoms/OTPInput";
import { useDispatch, useSelector } from "react-redux";
import {
  PostOrganizationVerifySmsCode,
  setSmsCode,
} from "../../../store/auth.slice";
import { postOrganizationVerifySmsCode } from "../../../store/request";
import { useVerifyNumberMutation } from "../../../store/api/apiSlice";

const SignUp = ({ next, prev, data }) => {
  const [form] = Form.useForm();
  const [inputValue, setInputValue] = useState("");
  const [errorText, setErrorText] = useState(false);
  const dispatch = useDispatch();

  const [verifyCode] = useVerifyNumberMutation();

  const { smsId } = useSelector((state) => state.authSlice);
  console.log("state", smsId);

  const onFinish = (values) => {
    console.log("Success:", values);
    // dispatch(setSmsCode(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  console.log(data);

  function handleBack() {
    prev(1);
  }

  const onInputValueChange = (e) => {
    const value = e.target.value;

    if (value.length <= 4) {
      setInputValue(value);
      console.log(value);
    }

    if (value.length === 4) {
      verifyCode({ code: value, id: smsId })
        .unwrap()
        .then((res) => {
          if (res.result.success) {
            next(2);
          } else {
            setErrorText("error");
          }
        });
    }

    if (value.length > 1 && value.length < 4) {
      setErrorText(true);
    } else {
      setErrorText(false);
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
                {errorText && (
                  <span className="error-text">
                    4 ta raqamga teng bo'lishi kerak.
                  </span>
                )}
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
