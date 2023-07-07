import React from "react";
import { Button, Col, Form, Modal, Row } from "antd";

import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";

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

      setOpen(true);

      return res.data;
    } catch (error) {
      // console.log(error, params.role);
      // params.callback(error.response.status, error.response.data.error.message);
    }

    setOpen(!open);
  };

  const { t } = useTranslation();

  return (
    <>
      <Modal
        open={open}
        onCancel={handleCancel}
        wrapClassName="report-modal logout-modal"
        footer={null}
      >
        <h3>Tizimdan chiqmoqmisiz ?</h3>
        <div className="footer__logout-modal">
          <button className="primary-btn" onClick={() => setOpen(!open)}>
            Yo'q
          </button>
          <button className="white-btn" onClick={logOut}>
            Ha
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LogOutModal;
