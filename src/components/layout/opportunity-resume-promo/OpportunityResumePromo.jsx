import React from "react";
import "./opportunityResumePromo.css";

import BlueIcon from "../../../assets/images/opportunuty-blue-icon.svg";
import GreenIcon from "../../../assets/images/opportunity-green-icon.svg";
import RedIcon from "../../../assets/images/opportunity-red-icon.svg";

const OpportunityResumePromo = () => {
  return (
    <div className="opportunity___resume-promo">
      <h2>Imkoniyatlar</h2>
      <p className="opportunity-subtitle">
        Smartjob sizni mukammal rezyume yaratish uchun barcha kerakli vositalar
        bilan qamrab oldi - butunlay bepul. Boshlash uchun sizga eng mos
        keladigan rezyume shablonini tanlang
      </p>
      <div className="opportunity-container__resume-promo">
        <div className="opportunity-card__resume-promo">
          <img src={BlueIcon} alt="BlueIcon" />
          <h3>Qulay konntruktor imkoniyatlari</h3>
          <p>
            Nomzod darhol pochta orqali xabaringiz haqida xabar oladi va sizga tezda javob berishi mumkin.
          </p>
        </div>
        <div className="opportunity-card__resume-promo">
          <img src={GreenIcon} alt="BlueIcon" />
          <h3>Turli shablonlar asosida rezyume yaratish</h3>
          <p>
            Nomzod darhol pochta orqali xabaringiz haqida xabar oladi va sizga
            tezda javob berishi mumkin.
          </p>
        </div>
        <div className="opportunity-card__resume-promo">
          <img src={RedIcon} alt="BlueIcon" />
          <h3>Rezyume namunalari asosida yangisini shakllantirish</h3>
          <p>
            Nomzod darhol pochta orqali xabaringiz haqida xabar oladi va sizga
            tezda javob berishi mumkin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpportunityResumePromo;
