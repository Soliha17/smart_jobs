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
        url: `${process.env.REACT_APP_API_ROUTE}/Organization/Logout`,
        method: "GET",
        headers: {
          refreshToken: localStorage.getItem("refreshToken"),
        },
      });

      // console.log("working...", params.role);

      // params.callback(res.status);
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");

      setOpen(true)

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
        wrapClassName="report-modal add-test-modal"
        footer={null}
      >
        <h3>Tizimdan chiqmoqmisiz ?</h3>
        <Button>Yo'q</Button>
        <Button onClick={logOut}>Ha</Button>
      </Modal>
    </>
  );
};

export default LogOutModal;
