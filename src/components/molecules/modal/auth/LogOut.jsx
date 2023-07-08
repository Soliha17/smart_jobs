import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setIsUserLoggedIn } from "../../../../store/selectRole.slice";
import { useGetMeQuery } from "../../../../store/api/authApiSlice";

import { useTranslation } from "react-i18next";

import { Modal } from "antd";

const LogOutModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();

  const { selectedRole } = useSelector((state) => state.selectRoleSlice);

  const { data: me } = useGetMeQuery(selectedRole);

  const handleCancel = () => {
    setOpen(false);
  };

  const logOut = async () => {
    try {
      const res = await axios({
        url:
          selectedRole === "Organization"
            ? `${process.env.REACT_APP_API_ROUTE}/Organization/Logout`
            : `${process.env.REACT_APP_API_ROUTE}/Worker/Logout`,
        method: "GET",
        headers: {
          refreshToken: localStorage.getItem("refreshToken"),
        },
      });

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
        <h3>{t("doYouWantToLogOut")}</h3>
        <div className="footer__logout-modal">
          <button className="primary-btn" onClick={() => setOpen(!open)}>
            {t("no")}
          </button>
          <button className="white-btn" onClick={logOut}>
            {t("yes")}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default LogOutModal;
