import { useEffect, useState } from "react";

import "./modal.css";
import "./JobSeekerStyle.css";

// import InfoFills from "./FillInfos";

import PrivacyIcon from "../../../assets/images/privacy-icon.svg";
import { useTranslation } from "react-i18next";

// import { Form, Input } from 'antd'

import { useSelector, useDispatch } from "react-redux";
import { selectButton } from "../../../store/selectRole.slice";
import { GetSmsCodeThunk } from "../../../store/auth.slice";
import { useNavigate } from "react-router-dom";

const JobSeekerModal = ({ next, dataHandler }) => {
  // const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [errorText, setErrorText] = useState("");

  const { selectedButton } = useSelector((state) => state.selectRoleSlice);

  const { data, setData } = dataHandler;

  const { t } = useTranslation();
  const navigate = useNavigate();

  // const selectButton = (btn) => {
  //   setSelectedButton(btn);
  // };

  const onSubmit = (values) => {
    values.preventDefault();

    // console.log("data",data)
    function callback(status) {
      if (status == 200) {
        next(1);
      } else {
        console.log("Xatolik yuz berdi!");
      }
    }

    if (
      (inputValue.length &&
        inputValue.slice(0, 1) !== "+" &&
        !inputValue.includes(".") &&
        !inputValue.includes("@")) ||
      (inputValue.length &&
        inputValue.slice(0, 1) === "+" &&
        inputValue.length === 14) //is not working stop, 1 minute
    ) {
      let resultInputValue = inputValue
        .split("")
        .filter((item) => item !== " ")
        .join("");
      console.log(resultInputValue);
      dispatch(
        GetSmsCodeThunk({
          phone: resultInputValue,
          role: selectedButton,
          callback,
        })
      );
      setData(inputValue);
      console.log("data", data);
      console.log(1);
      // ;
    }
  };

  const onInputValueChange = (e) => {
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
      setInputValue(inputValue.slice(0, inputValue.length - 1));
    } else {
      if (!isNaN(e.key - 0) && inputValue.slice(0, 1) !== "+") {
        setInputValue("+998 " + e.key);
      } else if (!isNaN(e.key - 0)) {
        setInputValue(inputValue + e.key);
      } else {
        setInputValue(inputValue + e.key);
      }
    }
  };

  useEffect(() => {
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
    } else if (inputValue === "") {
      setErrorText("");
    }
  }, [inputValue, errorText]);

  const handleButtonClick = (button) => {
    dispatch(selectButton(button));
  };

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
              // control={control}
              // {...register("phone")}
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
              onKeyDown={onInputValueChange}
              autoComplete="off"
            />
          )}
          {errorText && <span className="error-text">{errorText}</span>}
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
