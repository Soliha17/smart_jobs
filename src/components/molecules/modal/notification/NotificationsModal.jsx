import React from "react";
import { Modal } from "antd";

import "./notificationModal.css";

import { useTranslation } from "react-i18next";

import NotImg from "../../../../assets/images/not-modal-img.png";

const NotificationsModal = ({ open, setOpen }) => {
  const handleCancel = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <Modal
      open={open}
      onCancel={handleCancel}
      wrapClassName="chat-participiants-modal notification-modal"
      footer={null}
    >
      <div className="chat-participiants-wrapper">
        <h2>
          Ish qidirishning samarali yo'llari haqida meetingga taklif qilamiz
        </h2>

        <div className="notification-modal-container">
          <img src={NotImg} alt="NotImg" />
          <p>
            Assalomu alaykum bu onlin uchrashuv davaomida o’zingizning
            professional faoliyatingizda qo’l kelishi mumkin bo’lgan ko’nikmalar
            haqida gaplashamiz. PRO Tach kompaniyasi ish tajribasiga ega
            bo'lmagan masofaviy xodimlarni mustaqil ish uchun yollaydi. PRO Tach
            - ishonchli ish beruvchi, biz pandemiyadan ish o'rinlarini
            qisqartirmasdan o'tdik, bundan tashqari, biz ularni ko'paytirdik!
            Mijozlar yirik telekommunikatsiya kompaniyalari, davlat
            tashkilotlari, yetakchi banklar, sug‘urta kompaniyalari,
            onlayn-do‘konlar, pochta va logistika kompaniyalaridir. Bu ish siz
            uchun, agar: Rus tilini ishonchli bilish Yoshi 18+ Sizda o'rganish
            va pul ishlash istagi bor; Siz ishonchli kompyuter yoki telefon
            foydalanuvchisimisiz? Mas'uliyat Ishlaydigan mahsulotning ishlashini
            tekshirish kerak. Ish qiyin emas, biz sizga hamma narsani
            o'rgatamiz. Siz qilishingiz kerak bo'lgan narsa hamma narsani tezda
            tushunishdir. Vakansiya haqida telegram soliha_work da yozing
          </p>
          <button className="primary-btn">Ariza qoldirish</button>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationsModal;
