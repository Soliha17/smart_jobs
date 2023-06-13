import React, { useEffect, useState } from "react";

import "./testHeader.css";

import NewSmartjobLogo from "../../../assets/images/new-smartjob-logo.png";
import TimerIcon from "../../../assets/images/timer-black.svg";
import { Outlet } from "react-router-dom";
import { message } from "antd";

const TestHeader = () => {
  const [time, setTime] = useState("00:15");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const [minutes, seconds] = prevTime.split(":").map(Number);
        let newMinutes = minutes;
        let newSeconds = seconds - 1;

        if (newSeconds < 0) {
          newMinutes -= 1;
          newSeconds = 59;
        }

        const formattedTime = `${String(newMinutes).padStart(2, "0")}:${String(
          newSeconds
        ).padStart(2, "0")}`;

        if (formattedTime === "00:00") {
          clearInterval(interval);
          message.error("Timer has reached zero!");
        }

        return formattedTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header-wrapper__take-test">
      <div className="header__take-test container">
        <img src={NewSmartjobLogo} alt="NewSmartjobLogo" />
        <h2>Test</h2>
        <span>
          <img src={TimerIcon} alt="TimerIcon" />
          <p>{time}</p>
        </span>
      </div>
      <Outlet />
    </div>
  );
};

export default TestHeader;
