import { useEffect, useRef, useState } from "react";

import "./modal.css";
import "./JobSeekerStyle.css";

// import InfoFills from "./FillInfos";

import PrivacyIcon from "../../../../assets/images/privacy-icon.svg";
import { useTranslation } from "react-i18next";

// import { Form, Input } from 'antd'

import { useSelector, useDispatch } from "react-redux";
import { setSelectedRole } from "../../../../store/selectRole.slice";
import { GetSmsCodeThunk, setPhone } from "../../../../store/auth.slice";

const JobSeekerModal = ({ next, dataHandler }) => {
  // const [form] = Form.useForm();
  const dispatch = useDispatch();
  // const [phoneNumber, setInputValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const [errorApiText, setErrorApiText] = useState("");
  const [inputType, setInputType] = useState("email");

  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const { selectedRole } = useSelector((state) => state.selectRoleSlice);
  const { phoneNumber } = useSelector((state) => state.authSlice);

  const { setData } = dataHandler;

  const { t } = useTranslation();

  function callback(status, errorMessage) {
    console.log("status here:", status);
    if (status === 200) {
      next(1);
    } else if (status === 400) {
      setErrorApiText(errorMessage || "");
      next(2);
    } else {
      setErrorApiText("");
    }
  }

  const onSubmit = (values) => {
    values.preventDefault();

    // console.log("data",data)

    if (
      (phoneNumber.length &&
        phoneNumber.slice(0, 1) !== "+" &&
        !phoneNumber.includes(".") &&
        !phoneNumber.includes("@")) ||
      (phoneNumber.length &&
        phoneNumber.slice(0, 1) === "+" &&
        phoneNumber.length === 14)
    ) {
      let resultInputValue = phoneNumber
        .split("")
        .filter((item) => item !== " ")
        .join("");
      console.log(resultInputValue);
      dispatch(
        GetSmsCodeThunk({
          phone: resultInputValue,
          role: selectedRole === "Worker" ? "worker" : "organizator",
          callback,
        })
      );
      // dispatch(setPhone(resultInputValue));
      setData(phoneNumber);
      // console.log("data", data);
      // console.log(1);
      // ;
    }
  };

  const onInputValueChange = (e) => {
    setInputType("text");

    if (
      e.key === "*" ||
      e.key === "/" ||
      e.key === "+" ||
      e.key === "-" ||
      e.key === "_" ||
      e.key === "(" ||
      e.key === ")" ||
      e.key === "&" ||
      e.key === "%" ||
      e.key === "$" ||
      e.key === "!" ||
      e.key === "^" ||
      e.key === "~" ||
      e.key === "#" ||
      e.key === "," ||
      e.key === "Shift" ||
      e.key === " " ||
      e.key === "Alt"
    ) {
      e.preventDefault();
    } else if (e.key === "Backspace") {
      dispatch(
        setPhone(
          phoneNumber.slice(0, e.target.selectionStart - 1) +
            phoneNumber.slice(e.target.selectionStart, phoneNumber.length)
        )
      );
    } else {
      if (!isNaN(e.key - 0) && phoneNumber.slice(0, 1) !== "+") {
        dispatch(setPhone("+998 " + e.key));
      } else if (!isNaN(e.key - 0)) {
        dispatch(setPhone(phoneNumber + e.key));
      } else {
        dispatch(setPhone(phoneNumber));
      }
    }
  };

  useEffect(() => {
    if (selectedRole === "Worker" || selectedRole === "Organization") {
      phoneInputRef.current?.focus();
      emailInputRef.current?.focus();
    }

    if (
      phoneNumber.length &&
      phoneNumber.slice(0, 1) !== "+" &&
      !phoneNumber.includes(".") &&
      !phoneNumber.includes("@")
    ) {
      setInputType("email");
      setErrorText("Bu e-mail orqali ro'yxatdan o'tilmagan");
    } else if (
      (phoneNumber.slice(0, 1) === "+" && phoneNumber.length > 14) ||
      (phoneNumber.length > 4 && phoneNumber.length < 14)
    ) {
      setErrorText("Raqam formati noto'g'ri");
    } else if (
      phoneNumber.length &&
      phoneNumber.slice(0, 1) !== "+" &&
      phoneNumber.includes(".") &&
      phoneNumber.includes("@")
    ) {
      setErrorText("");
    } else if (phoneNumber.slice(0, 1) === "+" && phoneNumber.length === 14) {
      setErrorText("");
      // callback();
    } else if (phoneNumber === "") {
      setErrorText("");
    }
  }, [phoneNumber, errorText, errorApiText, selectedRole]);

  const handleButtonClick = (role) => {
    dispatch(setSelectedRole(role));
  };

  function handleChange() {
    // console.log(phoneNumber);
  }

  return (
    <div className="body__login-modal">
      <div className="select-btn-group__login-modal">
        <button
          className={` ${
            selectedRole === "Worker" && "selected-button____login-modal"
          }`}
          onClick={() => handleButtonClick("Worker")}
        >
          {t("theApplicant")}
        </button>
        <button
          className={` ${
            selectedRole === "Organization" && "selected-button____login-modal"
          }`}
          onClick={() => handleButtonClick("Organization")}
        >
          {t("employer")}
        </button>
      </div>
      <h3>{t("loginAndRegistration")}</h3>
      <div className="content__login-modal">
        <form
          onSubmit={(e) => e.preventDefault()}
          className={
            errorText ? "email_phone_form error_form" : "email_phone_form"
          }
        >
          {/* <input type={inputType} onKeyDown={handleShow} /> */}
          <label htmlFor="input" className="input_label">
            {t("enterYourPhoneOrEmail")}
          </label>{" "}
          <br />
          {phoneNumber.slice(0, 1) !== "+" ? (
            <input
              type="text"
              value={phoneNumber}
              ref={phoneInputRef}
              // control={control}
              // {...register("phone")}
              onChange={handleChange}
              onKeyDown={onInputValueChange}
              autoComplete="off"
            />
          ) : (
            <input
              name="mail"
              type={inputType}
              value={phoneNumber}
              // control={control}
              // {...register("email")}
              onChange={handleChange}
              ref={phoneInputRef}
              onKeyDown={onInputValueChange}
              autoComplete="off"
            />
          )}
          {(errorText || errorApiText) && (
            <span className="error-text">{errorText || errorApiText}</span>
          )}
          <br />
          <input type="submit" value={t("continue")} onClick={onSubmit} />
        </form>
        <span className="text__login-modal">
          <img src={PrivacyIcon} alt="privacy-icon" />
          <p>{t("allYourInformationIsProtected")}</p>
        </span>
      </div>
    </div>
  );
};
export default JobSeekerModal;
