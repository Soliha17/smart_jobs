import React from "react";
import "./vacancyFullCard.css";
import { Button } from "antd";

import ShareIcon from "../../../assets/images/share-icon.svg";
import ReportIcon from "../../../assets/images/report-icon.svg";
import SaveIcon from "../../../assets/images/save-icon.svg";
import BalanceIcon from "../../../assets/images/balance-icon.svg";
import LocationIcon from "../../../assets/images/blue-location-icon.svg";
import DashboardIcon from "../../../assets/images/dashboard-icon.svg";
import SchoolIcon from "../../../assets/images/school-icon.svg";
import TranslateIcon from "../../../assets/images/translate-icon.svg";

const VacancyFullCard = () => {
  return (
    <div className="vacancy-full">
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
        <p className="date__vacancy-full">E’lon qilingan sana: 13-mart, 2023</p>
        <div className="inner-content__vacancy-full">
          <div>
            <img src={BalanceIcon} alt="LocationIcon" />
            <p>Maosh</p>
          </div>
          <span>12 000 000 - 18 000 000 so’m / oyiga</span>
        </div>
        <div className="inner-content__vacancy-full">
          <div>
            <img src={LocationIcon} alt="LocationIcon" />
            <p>Joy</p>
          </div>
          <span>Toshkent</span>
        </div>
        <div className="inner-content__vacancy-full">
          <div>
            <img src={DashboardIcon} alt="LocationIcon" />
            <p>Format</p>
          </div>
          <span>Ofisda</span>
        </div>
        <div className="inner-content__vacancy-full">
          <div>
            <img src={SchoolIcon} alt="LocationIcon" />
            <p>Ta’lim</p>
          </div>
          <span>Bakalavr darjasi</span>
        </div>
        <div className="inner-content__vacancy-full">
          <div>
            <img src={TranslateIcon} alt="LocationIcon" />
            <p>Til bilish</p>
          </div>
          <span>Ingliz tili B1 +</span>
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
            xodimlarni mustaqil ish uchun yollaydi. PRO Tach - ishonchli ish
            beruvchi, biz pandemiyadan ish o'rinlarini qisqartirmasdan o'tdik,
            bundan tashqari, biz ularni ko'paytirdik! Mijozlar yirik
            telekommunikatsiya kompaniyalari, davlat tashkilotlari, yetakchi
            banklar, sug‘urta kompaniyalari, onlayn-do‘konlar, pochta va
            logistika kompaniyalaridir. Bu ish siz uchun, agar: Rus tilini
            ishonchli bilish Yoshi 18+ Sizda o'rganish va pul ishlash istagi
            bor; Siz ishonchli kompyuter yoki telefon foydalanuvchisimisiz?
            Mas'uliyat Ishlaydigan mahsulotning ishlashini tekshirish kerak. Ish
            qiyin emas, biz sizga hamma narsani o'rgatamiz. Siz qilishingiz
            kerak bo'lgan narsa hamma narsani tezda tushunishdir. Vakansiya
            haqida telegram soliha_work da yozing
          </p>
        </div>
        <div className="address__vacancy-full">
          <div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_12_4136)">
                <path
                  d="M21.4722 3.5L21.3033 3.53L15.6667 5.6L9.33333 3.5L3.38 5.4C3.15833 5.47 3 5.65 3 5.88V21C3 21.28 3.23222 21.5 3.52778 21.5L3.69667 21.47L9.33333 19.4L15.6667 21.5L21.62 19.6C21.8417 19.53 22 19.35 22 19.12V4C22 3.72 21.7678 3.5 21.4722 3.5ZM10.3889 5.97L14.6111 7.37V19.03L10.3889 17.63V5.97ZM5.11111 6.96L8.27778 5.95V17.65L5.11111 18.81V6.96ZM19.8889 18.04L16.7222 19.05V7.36L19.8889 6.2V18.04Z"
                  fill="#8D8C8B"
                />
              </g>
              <defs>
                <clipPath id="clip0_12_4136">
                  <rect
                    width="25"
                    height="24"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="address-text__vacancy-full">Manzil</p>
          </div>
          <Button type="primary" size="medium">
            xaritada ko‘rsatish
          </Button>
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
