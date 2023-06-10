import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./vacancyFullCard.css";
import { Button, Dropdown, Modal, message } from "antd";

import ShareIcon from "../../../assets/images/share-icon.svg";
import ReportIcon from "../../../assets/images/report-icon.svg";
import SaveIcon from "../../../assets/images/save-icon.svg";
import BalanceIcon from "../../../assets/images/balance-icon.svg";
import LocationIcon from "../../../assets/images/blue-location-icon.svg";
import AwayIcon from "../../../assets/images/location-away-icon.svg";
import SchoolIcon from "../../../assets/images/school-icon.svg";
import TranslateIcon from "../../../assets/images/translate-icon.svg";
import MapIcon from "../../../assets/images/show-map-icon.svg";
import CalendarIcon from "../../../assets/images/calendar-icon.svg";
import TimeplaceIcon from "../../../assets/images/timeplace-icon.svg";
import PendingActionIcon from "../../../assets/images/pending-actions.svg";
import LinkedIn from "../../../assets/images/Linkedin.svg";
import Telegram from "../../../assets/images/Telegram-dropdown.svg";
import Twitter from "../../../assets/images/Twitter.svg";
import ShareLinkIcon from "../../../assets/images/share-link-icon.svg";

import YmapsComponent from "../../molecules/yandex-map/YmapsComponent";
import YandexCard from "../../molecules/yandex-card/YandexCard";

import { useTranslation } from "react-i18next";
import ReportModal from "../../molecules/modal/ReportModal";
import TakeTheTest from "../take-test/TakeTheTest";

const VacancyFullCard = ({ style }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [isTakeTheTestModalOpen, setIsTakeTheTestModalOpen] = useState(false);

  const navigate = useNavigate();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  function goVacancyFullPage() {
    navigate("/full");
  }

  function openReportModal() {
    setIsReportModalOpen(true);
  }

  function openTakeTestModal() {
    setIsTakeTheTestModalOpen(true);
  }

  const handleClick = () => {
    const currentURL = window.location.href;

    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        message.success("URL copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy URL: ", error);
      });
  };

  const { t } = useTranslation();

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
          className="dropdown-item__vacancy-full"
        >
          <img src={LinkedIn} alt="LinkedIn" />
          {t("linkedin")}
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          className="dropdown-item__vacancy-full"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          <img src={Telegram} alt="LinkedIn" />
          {t("telegram")}
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          className="dropdown-item__vacancy-full"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          <img src={Twitter} alt="LinkedIn" />
          {t("twitter")}
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <p className="dropdown-item__vacancy-full" onClick={handleClick}>
          <img src={ShareLinkIcon} alt="LinShareLinkIconkedIn" />
          {t("copyTheLink")}
        </p>
      ),
    },
  ];

  return (
    <div className="vacancy-full" style={style}>
      <div className="header__vacancy-full">
        <div className="header-top__vacancy-full">
          <p className="title__vacancy-full" onClick={goVacancyFullPage}>
            Mahsulot menejeri
          </p>
          <p className="company__vacancy-full">Pro tach</p>
        </div>
        <div className="header-bottom__vacancy-full">
          <Button type="primary" onClick={openTakeTestModal} size="large">
            {t("submitToWork")}
          </Button>
          <div className="actions-group__vacancy-full">
            <span className="three-dots">
              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                arrow
                trigger={["click"]}
              >
                <Button>
                  <img src={ShareIcon} alt="ShareIcon" />
                </Button>
              </Dropdown>
            </span>
            <img src={ReportIcon} onClick={openReportModal} alt="ReportIcon" />
            <img src={SaveIcon} alt="SaveIcon" />
          </div>
        </div>
      </div>
      <div className="content__vacancy-full">
        <p className="date__vacancy-full">
          {t("dateOfPublication")} 13-mart, 2023
        </p>

        <div className="wrapper__vacancy-content">
          <span className="row__vacancy-content">
            <div className="inner-content__vacancy-full">
              <div>
                <img src={LocationIcon} alt="LocationIcon" />
                <p> {t("place")}</p>
              </div>
              <span>Toshkent, O'zbekiston</span>
            </div>
            <div className="inner-content__vacancy-full">
              <div>
                <img src={CalendarIcon} alt="CalendarIcon" />
                <p>{t("applicationDeadline")}</p>
              </div>
              <span>25.02.2023</span>
            </div>
          </span>

          <span className="row__vacancy-content">
            <div className="inner-content__vacancy-full">
              <div>
                <img src={TimeplaceIcon} alt="TimeplaceIcon" />
                <p>{t("typeOfWork")}</p>
              </div>
              <span>To'liq stavka</span>
            </div>
            <div className="inner-content__vacancy-full">
              <div>
                <img src={AwayIcon} alt="LocationAwayIcon" />
                <p>{t("workingFormat")}</p>
              </div>
              <span>Gibrid</span>
            </div>
          </span>
          <span className="row__vacancy-content">
            <div className="inner-content__vacancy-full">
              <div>
                <img src={PendingActionIcon} alt="PendingActionIcon" />
                <p>{t("experience")}</p>
              </div>
              <span>1-3 yil</span>
            </div>
            <div className="inner-content__vacancy-full">
              <div>
                <img src={SchoolIcon} alt="SchoolIcon" />
                <p>{t("levelOfEducation")}</p>
              </div>
              <span>-</span>
            </div>
          </span>

          <span className="row__vacancy-content">
            <div className="inner-content__vacancy-full">
              <div>
                <img src={TranslateIcon} alt="LocationIcon" />
                <p>{t("requiredLanguages")}</p>
              </div>
              <span>Ingliz, Rus</span>
            </div>
            <div className="inner-content__vacancy-full">
              <div>
                <img src={BalanceIcon} alt="LocationIcon" />
                <p>{t("salaryRange")}</p>
              </div>
              <span>12 000 000 - 18 000 000 </span>
            </div>
          </span>
        </div>
      </div>
      <div className="info__vacancy-full">
        <div className="skills__vacancy-full">
          <p className="section-name__vacancy-full">{t("skills")}</p>
          <div className="skills-group__vacancy-full">
            <p className="circle-text__vacancy-full">
              O’rganishni o’rgana olish
            </p>
            <p className="circle-text__vacancy-full">Jamoada ishlay olish</p>
            <p className="circle-text__vacancy-full">Doimiy ishlay olish</p>
            <p className="circle-text__vacancy-full">Strategik fikrlash</p>
          </div>
        </div>
        <div className="directions__vacancy-full">
          <p className="section-name__vacancy-full">{t("directions")}</p>
          <p className="circle-text__vacancy-full">Boshqaruv</p>
        </div>

        <div className="description__vacancy-full">
          <h6>{t("description")}:</h6>
          <p>
            PRO Tach kompaniyasi ish tajribasiga ega bo'lmagan masofaviy
            xodimlarni mustaqil ish <br />
            uchun yollaydi.
            <br />
            <br />
            PRO Tach - ishonchli ish beruvchi, biz pandemiyadan ish o'rinlarini
            qisqartirmasdan o'tdik, bundan tashqari, biz ularni ko'paytirdik!
            Mijozlar yirik telekommunikatsiya kompaniyalari, davlat
            tashkilotlari, yetakchi banklar, sug‘urta kompaniyalari,
            onlayn-do‘konlar, pochta va logistika kompaniyalaridir. <br />
            <br /> Bu ish siz uchun, agar: <br />
            <br />
            Rus tilini ishonchli bilish
            <br /> Yoshi 18+ <br />
            Sizda o'rganish va pul ishlash istagi bor; <br />
            Siz ishonchli kompyuter yoki telefon foydalanuvchisimisiz?
            <br />
            Mas'uliyat
            <br />
            <br /> Ishlaydigan mahsulotning ishlashini tekshirish kerak. Ish
            qiyin emas, biz sizga hamma narsani o'rgatamiz. Siz qilishingiz
            kerak bo'lgan narsa hamma narsani tezda tushunishdir. <br />
            <br />
            Vakansiya haqida telegram soliha_work da yozing
          </p>
        </div>

        <div className="address__vacancy-full">
          <div>
            <img src={MapIcon} alt="map icon" />
            <p className="address-text__vacancy-full">{t("address")}</p>
          </div>
          <Button type="primary" size="medium" onClick={showModal}>
            {t("showOnMap")}
          </Button>
          <Modal
            width={1200}
            bodyStyle={{ height: "500px" }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            className="vacancy-modal"
          >
            <div className="yandex-modal">
              <YmapsComponent />
              <YandexCard />
            </div>
          </Modal>
        </div>
      </div>
      <div className="footer__vacancy-full">
        <Button type="primary" size="large">
          {t("submitToWork")}
        </Button>
        <div className="actions-group__vacancy-full">
          <span className="three-dots">
            <Dropdown
              menu={{
                items,
              }}
              placement="bottomRight"
              arrow
              trigger={["click"]}
            >
              <Button>
                <img src={ShareIcon} alt="ShareIcon" />
              </Button>
            </Dropdown>
          </span>
          <img src={ReportIcon} onClick={openReportModal} alt="ReportIcon" />
          <img src={SaveIcon} alt="SaveIcon" />
        </div>
      </div>
      <ReportModal open={isReportModalOpen} setOpen={setIsReportModalOpen} />
      <TakeTheTest
        open={isTakeTheTestModalOpen}
        setOpen={setIsTakeTheTestModalOpen}
      />
    </div>
  );
};

export default VacancyFullCard;
