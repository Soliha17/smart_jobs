import React, { useState, useRef, useEffect } from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSmsCode } from "../../../../store/auth.slice";

const OTPInput = ({ length, autoFocus, onValueChange, error }) => {
  // const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);
  const dispatch = useDispatch();

  const smsCode = useSelector((state) => state.authSlice.smsCode);

  console.log(smsCode);

  useEffect(() => {
    if (autoFocus) {
      inputs.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (e, index) => {
    const newSmsCode = [...smsCode];
    let value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      newSmsCode[index] = value;
      dispatch(setSmsCode(newSmsCode));

      let resValue = newSmsCode.join("");

      if (newSmsCode.length === 4) {
        onValueChange(resValue);
        // dispatch(setSmsCode(resValue))
      }

      if (value && index < length - 1) {
        inputs.current[index + 1].focus();
      }
    } else if (!value && index > 0) {
      newSmsCode[index] = value;
      dispatch(setSmsCode(newSmsCode));
      inputs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !smsCode[index] && index > 0) {
      inputs.current[index - 1].focus();
    } else if (e.key === "Delete" && !smsCode[index] && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <>
      {smsCode.map((digit, index) => (
        <Input
          className={`code-input__modal ${
            error !== "" ? "code-input--error" : ""
          }`}
          key={index}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputs.current[index] = el)}
          maxLength={1}
        />
      ))}
    </>
  );
};

export default OTPInput;
