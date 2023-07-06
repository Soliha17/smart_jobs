import React, { useState, useRef, useEffect } from "react";
import { Input } from "antd";

const OTPInput = ({ length, autoFocus, onValueChange }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  useEffect(() => {
    if (autoFocus) {
      inputs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      newOtp[index] = value;
      setOtp(newOtp);

      if (newOtp.length === 4) {
        onValueChange(newOtp);
      }

      if (value && index < length - 1) {
        inputs.current[index + 1].focus();
      }
    } else if (!value && index > 0) {
      newOtp[index] = value;
      setOtp(newOtp);
      inputs.current[index - 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    } else if (e.key === "Delete" && !otp[index] && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <>
      {otp.map((digit, index) => (
        <Input
          className="code-input__modal"
          key={index}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputs.current[index] = el)}
          style={{ width: "50px", marginRight: "10px" }}
          maxLength={1}
        />
      ))}
    </>
  );
};

export default OTPInput;
