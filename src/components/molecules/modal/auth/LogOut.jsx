import React from "react";
import { Button, Col, Form, Modal, Row } from "antd";

import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { setIsUserLoggedIn } from "../../../../store/selectRole.slice";
import {
  useGetOrganizationQuery,
  useGetWorkerQuery,
} from "../../../../store/api/apiSlice";

const LogOutModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const selectedButton = useSelector(
    (state) => state.selectRoleSlice.selectedButton
  );

  const { data: organizationMe } = useGetOrganizationQuery();
  const { data: workerMe } = useGetWorkerQuery();

  const isUserLoggedIn = useSelector(
    (state) => state.selectRoleSlice.isUserLoggedIn
  );

  const handleCancel = () => {
    setOpen(false);
  };

  const logOut = async () => {
    // dispatch(getLogout());
    try {
      const res = await axios({
        url:
          (organizationMe ?? workerMe)?.result?.role === "Organization"
            ? `${process.env.REACT_APP_API_ROUTE}/Organization/Logout`
            : `${process.env.REACT_APP_API_ROUTE}/Worker/Logout`,
        method: "GET",
        headers: {
          refreshToken: localStorage.getItem("refreshToken"),
        },
      });

      // console.log("working...", params.role);

      // params.callback(res.status);
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");

      setOpen(false);
      dispatch(setIsUserLoggedIn(false));

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
