import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";

const OTPInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorText, setErrorText] = useState(false);

  const dispatch = useDispatch();

  const onInputValueChange = (e) => {
    const value = e.target.value;

    if (value.length <= 4) {
      setInputValue(value);
    }

    if (value.length > 1 && value.length < 4) {
      setErrorText(true);
    } else {
      setErrorText(false);
    }
  };

  useEffect(() => {
    setErrorText(inputValue.length > 1 || inputValue.length >= 4);
  }, [inputValue]);

  return (
    <div className="code-group__modal">
      <Input
        className="code-input__modal"
        type="number"
        maxLength={4}
        value={inputValue}
        onChange={onInputValueChange}
      />
      {errorText && (
        <span className="error-text">4 ta raqamga teng bo'lishi kerak.</span>
      )}
    </div>
  );
};

export default OTPInput;
