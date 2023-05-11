import React, { useState } from "react";
import "./vacancyFullCard.css";
import { Button, Modal } from "antd";

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
import YmapsComponent from "../../molecules/yandex-map/YmapsComponent";
import YandexCard from "../../molecules/yandex-card/YandexCard";

const VacancyFullCard = ({ style }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="vacancy-full" style={style}>
      <div className="header__vacancy-full">
        <div className="header-top__vacancy-full">
          <p className="title__vacancy-full">Mahsulot menejeri</p>
          <p className="company__vacancy-full">Pro tach</p>
        </div>
        <div className="header-bottom__vacancy-full">
          <Button type="primary" size="large">
            Ishga topshirish
          </Button>
          <div className="actions-group__vacancy-full">
            <img src={ShareIcon} alt="ShareIcon" />
            <img src={ReportIcon} alt="ReportIcon" />
            <img src={SaveIcon} alt="SaveIcon" />
          </div>
        </div>
      </div>
      <div className="content__vacancy-full">
        <p className="date__vacancy-full">E'lon qilingan sana: 13-mart, 2023</p>
        <div className="wrapper__vacancy-content">
          <span className="row__vacancy-content">
            <div className="inner-content__vacancy-full">
              <div>
                <img src={LocationIcon} alt="LocationIcon" />
                <p>Joy</p>
              </div>
              <span>Toshkent, O'zbekiston</span>
            </div>
            <div className="inner-content__vacancy-full">
              <div>
                <img src={CalendarIcon} alt="CalendarIcon" />
                <p>Ariza topshirish muddati</p>
              </div>
              <span>25.02.2023</span>
            </div>
          </span>
          <span className="row__vacancy-content">
            <div className="inner-content__vacancy-full">
              <div>
                <img src={TimeplaceIcon} alt="TimeplaceIcon" />
                <p>Ishlash turi</p>
              </div>
              <span>To’liq stavka</span>
            </div>
            <div className="inner-content__vacancy-full">
              <div>
                <img src={AwayIcon} alt="LocationAwayIcon" />
                <p>Ishlash formati</p>
              </div>
              <span>Gibrid</span>
            </div>
          </span>
          <span className="row__vacancy-content">
            <div className="inner-content__vacancy-full">
              <div>
                <img src={PendingActionIcon} alt="PendingActionIcon" />
                <p>Tajribasi</p>
              </div>
              <span>1-3 yil</span>
            </div>
            <div className="inner-content__vacancy-full">
              <div>
                <img src={SchoolIcon} alt="SchoolIcon" />
                <p>Ma’lumot darajasi</p>
              </div>
              <span>-</span>
            </div>
          </span>
          <span className="row__vacancy-content">
            <div className="inner-content__vacancy-full">
              <div>
                <img src={TranslateIcon} alt="LocationIcon" />
                <p>Talab qilinayotgan tillar</p>
              </div>
              <span>Ingliz, Rus</span>
            </div>
            <div className="inner-content__vacancy-full">
              <div>
                <img src={BalanceIcon} alt="LocationIcon" />
                <p>ish haqqi oralig’i</p>
              </div>
              <span>12 000 000 - 18 000 000 </span>
            </div>
          </span>
        </div>
      </div>
      <div className="info__vacancy-full">
        <div className="skills__vacancy-full">
          <p className="section-name__vacancy-full">Ko’nikmalar</p>
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
          <p className="section-name__vacancy-full">Yo’nalishlar</p>
          <p className="circle-text__vacancy-full">Boshqaruv</p>
        </div>
        <div className="description__vacancy-full">
          <h6>Tavsif:</h6>
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
            <p className="address-text__vacancy-full">Manzil</p>
          </div>
          <Button type="primary" size="medium" onClick={showModal}>
            xaritada ko‘rsatish
          </Button>
          <Modal
            width={1200}
            bodyStyle={{ height: "500px" }}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
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
          Ishga topshirish
        </Button>
        <div className="actions-group__vacancy-full">
          <img src={ShareIcon} alt="ShareIcon" />
          <img src={ReportIcon} alt="ReportIcon" />
          <img src={SaveIcon} alt="SaveIcon" />
        </div>
      </div>
    </div>
  );
};

export default VacancyFullCard;
