import React from "react";
import { Button, Col, Form, Modal, Row } from "antd";

import { useTranslation } from "react-i18next";

import "./chooseResumeModal.css";
import { useDispatch } from "react-redux";
import { LogOutThunk } from "../../../store/logOut.slice";
import { getLogout } from "../../../store/request";
import axios from "axios";

const LogOutModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    setOpen(false);
  };

  const logOut = async () => {
    // dispatch(getLogout());
    try {
      const res = await axios({
        url: `${process.env.REACT_APP_API_ROUTE}/Worker/Logout`,
        method: "GET",
        headers: {
          refreshToken: localStorage.getItem("refreshToken"),
        },
      });

      // console.log("working...", params.role);

      // params.callback(res.status);
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");

      return res.data;
    } catch (error) {
      // console.log(error, params.role);
      // params.callback(error.response.status, error.response.data.error.message);
    }
  };

  const { t } = useTranslation();

  return (
    <>
      <Modal
        open={open}
        onCancel={handleCancel}
        wrapClassName="choose-resume-modal"
        footer={null}
      >
        <h1>Chiqishni istaysizmi</h1>
        <Button onClick={logOut}>ok</Button>
        <Button>cancel</Button>
      </Modal>
    </>
  );
};

export default LogOutModal;
