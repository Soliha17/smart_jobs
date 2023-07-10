import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedRole } from "src/store/selectRole.slice";
import { GetSmsCodeThunk, setPhone, setSmsCode } from "src/store/auth.slice";
import { useTranslation } from "react-i18next";
import PrivacyIcon from "src/assets/images/privacy-icon.svg";
import {
  emailPattern,
  phonePattern,
  restrictedKeysInSignUpForm,
} from "src/assets/constants/inputConstants";
import "./modal.css";
import "./JobSeekerStyle.css";

const JobSeekerModal = ({ next }) => {
  const [errorText, setErrorText] = useState("");
  const [errorApiText, setErrorApiText] = useState("");
  const [inputType, setInputType] = useState("email");

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const phoneInputRef = useRef(null);
  const emailInputRef = useRef(null);

  const { selectedRole } = useSelector((state) => state.selectRoleSlice);
  const { phoneNumber } = useSelector((state) => state.authSlice);

  function callback(status, errorMessage) {
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

    dispatch(setSmsCode(["", "", "", ""]));

    if (emailPattern.test(phoneNumber)) {
      dispatch(
        GetSmsCodeThunk({
          phone: phoneNumber,
          role: selectedRole === "Worker" ? "worker" : "organizator",
          callback,
        })
      );
    } else if (phonePattern.test(phoneNumber)) {
      dispatch(
        GetSmsCodeThunk({
          phone: `+${phoneNumber}`,
          role: selectedRole === "Worker" ? "worker" : "organizator",
          callback,
        })
      );
    }
  };

  const onInputValueChange = (e) => {
    console.log(e.key);
    // setInputType("text");
    if (restrictedKeysInSignUpForm.includes(e.key)) {
      e.preventDefault();
    }
    // else if (e.key === "Backspace") {
    //   dispatch(
    //     setPhone(
    //       phoneNumber.slice(0, e.target.selectionStart - 1) +
    //         phoneNumber.slice(e.target.selectionStart, phoneNumber.length)
    //     )
    //   );
    // } else {
    //   if (!isNaN(e.key - 0) && phoneNumber.slice(0, 1) !== "+") {
    //     dispatch(setPhone("+998 " + e.key));
    //   } else if (!isNaN(e.key - 0)) {
    //     dispatch(setPhone(phoneNumber + e.key));
    //   } else {
    //     dispatch(setPhone(phoneNumber));
    //   }
    // }
  };

  useEffect(() => {
    if (selectedRole) {
      phoneInputRef.current?.focus();
      emailInputRef.current?.focus();
    }

    // if (
    //   phoneNumber.length &&
    //   phoneNumber.slice(0, 1) !== "+" &&
    //   !phoneNumber.includes(".") &&
    //   !phoneNumber.includes("@")
    // ) {
    //   setInputType("email");
    //   setErrorText("Bu e-mail orqali ro'yxatdan o'tilmagan");
    // } else if (
    //   (phoneNumber.slice(0, 1) === "+" && phoneNumber.length > 14) ||
    //   (phoneNumber.length > 4 && phoneNumber.length < 14)
    // ) {
    //   setErrorText("Raqam formati noto'g'ri");
    // } else if (
    //   phoneNumber.length &&
    //   phoneNumber.slice(0, 1) !== "+" &&
    //   phoneNumber.includes(".") &&
    //   phoneNumber.includes("@")
    // ) {
    //   setErrorText("");
    // } else if (phoneNumber.slice(0, 1) === "+" && phoneNumber.length === 14) {
    //   setErrorText("");
    //   // callback();
    // } else if (phoneNumber === "") {
    //   setErrorText("");
    // }
  }, [phoneNumber, errorText, errorApiText, selectedRole]);

  const handleButtonClick = (role) => {
    dispatch(setSelectedRole(role));
  };

  function handleChange(e) {
    const input = e.target.value;

    if (emailPattern.test(input)) {
      dispatch(setPhone(input));
      setErrorText("");
    } else if (phonePattern.test(input)) {
      dispatch(setPhone(input));
      setErrorText("");
    } else {
      setErrorText("Invalid input");
    }

    dispatch(setPhone(input));
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
          <label htmlFor="input" className="input_label">
            {t("enterYourPhoneOrEmail")}
          </label>{" "}
          <br />
          {/* {phoneNumber.slice(0, 1) !== "+" ? (
            <input
              type="text"
              value={phoneNumber}
              ref={phoneInputRef}
              onChange={handleChange}
              onKeyDown={onInputValueChange}
              autoComplete="off"
            />
          ) : ( */}
          <input
            // name="mail"
            type={inputType}
            value={phoneNumber}
            ref={phoneInputRef}
            onChange={handleChange}
            onKeyDown={onInputValueChange}
            autoComplete="off"
          />
          {/* // )} */}
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
