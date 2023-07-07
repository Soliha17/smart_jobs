import { useEffect, useRef, useState } from "react";

import "./modal.css";
import "./JobSeekerStyle.css";

// import InfoFills from "./FillInfos";

import PrivacyIcon from "../../../assets/images/privacy-icon.svg";
import { useTranslation } from "react-i18next";

// import { Form, Input } from 'antd'

import { useSelector, useDispatch } from "react-redux";
import { selectButton } from "../../../store/selectRole.slice";
import { GetSmsCodeThunk, setPhone } from "../../../store/auth.slice";

const JobSeekerModal = ({ next, dataHandler }) => {
  // const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const [errorApiText, setErrorApiText] = useState("");

  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const { selectedButton } = useSelector((state) => state.selectRoleSlice);
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
      (inputValue.length &&
        inputValue.slice(0, 1) !== "+" &&
        !inputValue.includes(".") &&
        !inputValue.includes("@")) ||
      (inputValue.length &&
        inputValue.slice(0, 1) === "+" &&
        inputValue.length === 14)
    ) {
      let resultInputValue = inputValue
        .split("")
        .filter((item) => item !== " ")
        .join("");
      // console.log(resultInputValue);
      dispatch(
        GetSmsCodeThunk({
          phone: resultInputValue,
          role: selectedButton,
          callback,
        })
      );
      dispatch(setPhone(resultInputValue));
      setData(inputValue);
      // console.log("data", data);
      // console.log(1);
      // ;
    }
  };

  const onInputValueChange = (e) => {
    console.log(e.key);

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
      const currentPosition = e.target.selectionStart;
      if (currentPosition > 0) {
        const newValue =
          inputValue.slice(0, currentPosition - 1) +
          inputValue.slice(currentPosition);
        setInputValue(newValue);
        e.target.setSelectionRange(currentPosition - 1, currentPosition - 1);
      }
      return;
    } else {
      if (!isNaN(e.key - 0) && inputValue.slice(0, 1) !== "+") {
        setInputValue("+998 " + e.key);
      } else if (!isNaN(e.key - 0)) {
        setInputValue(inputValue + e.key);
      } else {
        setInputValue(inputValue);
      }
    }
  };

  useEffect(() => {
    if (selectedButton === "worker" || selectedButton === "organizator") {
      phoneInputRef.current?.focus();
      emailInputRef.current?.focus();
    }

    if (
      inputValue.length &&
      inputValue.slice(0, 1) !== "+" &&
      !inputValue.includes(".") &&
      !inputValue.includes("@")
    ) {
      setErrorText("Bu e-mail orqali ro'yxatdan o'tilmagan");
    } else if (
      (inputValue.slice(0, 1) === "+" && inputValue.length > 14) ||
      (inputValue.length > 4 && inputValue.length < 14)
    ) {
      setErrorText("Raqam formati noto'g'ri");
    } else if (
      inputValue.length &&
      inputValue.slice(0, 1) !== "+" &&
      inputValue.includes(".") &&
      inputValue.includes("@")
    ) {
      setErrorText("");
    } else if (inputValue.slice(0, 1) === "+" && inputValue.length === 14) {
      setErrorText("");
      // callback();
    } else if (inputValue === "") {
      setErrorText("");
    }
  }, [inputValue, errorText, errorApiText, selectedButton]);

  const handleButtonClick = (button) => {
    dispatch(selectButton(button));
  };

  function handleChange() {
    // console.log("changed");
  }

  return (
    <div className="body__login-modal">
      <div className="select-btn-group__login-modal">
        <button
          className={` ${
            selectedButton === "worker" && "selected-button____login-modal"
          }`}
          onClick={() => handleButtonClick("worker")}
        >
          {t("theApplicant")}
        </button>
        <button
          className={` ${
            selectedButton === "organizator" && "selected-button____login-modal"
          }`}
          onClick={() => handleButtonClick("organizator")}
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
          <label htmlFor="input" className="input_label">
            {t("enterYourPhoneOrEmail")}
          </label>{" "}
          <br />
          {inputValue.slice(0, 1) !== "+" ? (
            <input
              type="text"
              value={inputValue}
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
              type="email"
              value={inputValue}
              // control={control}
              // {...register("email")}
              ref={emailInputRef}
              onChange={handleChange}
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
