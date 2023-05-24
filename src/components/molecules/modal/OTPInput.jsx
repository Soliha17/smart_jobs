import React, { useRef } from "react";
import { Input } from "antd";

const OTPInput = () => {
  const inputRefs = useRef([]);

  const handleOTPChange = (e, index) => {
    const value = e.target.value;
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && !inputRefs.current[index].value) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="code-group__modal">
      {Array.from({ length: 4 }, (_, index) => (
        <Input
          className="code-input__modal"
          key={index}
          maxLength={1}
          onChange={(e) => handleOTPChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
