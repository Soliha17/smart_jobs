import React, { useState } from "react";

import "./asideResumePromo.css";
import ResumePromoModal from "../../molecules/modal/ResumePromoModal";

const AsideResumePromo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="aside__resume-promo">
        <div>
          <h2>Ishga topshirishda ustuvor CVlar yarata olasiz</h2>
          <p>
            Har qanday kerakli ma'lumotlarga tezkor kirish va vazifalar
            o'rtasida oson o'tish. Biz HR bo'yicha amaliyotchi va ishga qabul
            qilish bo'yicha menejerlarning tavsiyalari va istaklari tufayli
            interfeysini doimiy ravishda takomillashtirib boramiz.
          </p>
          <button className="primary-btn">Rezyumer yaratish</button>
          <button className="default-btn">Yordam olish</button>
        </div>
        <img
          src={require("../../../assets/images/video-resume-promo.png")}
          alt="video-resume-promo"
          onClick={() => setIsVideoOpen(true)}
        />
      </div>
      {<ResumePromoModal open={isVideoOpen} setOpen={setIsVideoOpen} />}
    </>
  );
};

export default AsideResumePromo;
