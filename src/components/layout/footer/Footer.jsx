import React from "react";

import "./footer.css";

import TelegramIcon from "../../../assets/images/telegram.svg";
import InstagramIcon from "../../../assets/images/instagram.svg";
import YouTubeIcon from "../../../assets/images/youtube.svg";
import FacebookIcon from "../../../assets/images/facebook.svg";
import GooglePlay from "../../../assets/images/google-play.svg";
import AppStore from "../../../assets/images/app-store.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer-wrapper">
      <div className="footer container">
        <div className="top__footer">
          <div className="footer__left">
            <div className="footer__item">
              <h6>{t("portal")}</h6>
              <ul className="footer__list">
                <li>{t("vacancies")}</li>
                <li>{t("forEmployers")}</li>
                <li>{t("companies")}</li>
                <li>{t("areas")}</li>
              </ul>
            </div>
            <div className="footer__item">
              <h6>{t("company")}</h6>
              <ul className="footer__list">
                <li>{t("vacancies")}</li>
                <li>{t("forEmployers")}</li>
                <li>{t("companies")}</li>
                <li>{t("areas")}</li>
              </ul>
            </div>
            <div className="footer__item">
              <h6> {t("relationship")}</h6>
              <ul className="footer__list">
                <li>+998-(00)-000-00-00</li>
                <li>smartjob@gmail.com</li>
              </ul>
            </div>
            <div className="footer__item">
              <h6>{t("socialNetworks")}</h6>
              <div className="footer__social-group">
                <img src={YouTubeIcon} alt="YouTubeIcon" />
                <img src={TelegramIcon} alt="TelegramIcon" />
                <img src={InstagramIcon} alt="InstagramIcon" />
                <img src={FacebookIcon} alt="FacebookIcon" />
              </div>
            </div>
          </div>
          <div className="footer__right">
            <h6>{t("mobileApp")}</h6>
            <div className="inner__footer-right">
              <div>
                <img src={GooglePlay} alt="GooglePlay" />
              </div>
              <div>
                <img src={AppStore} alt="AppStore" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom__footer">
          <p>© 2023 Smart Job</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
