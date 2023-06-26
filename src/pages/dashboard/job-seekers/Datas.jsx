import React from "react";

import SmsIcon from "../../../assets/images/small-sms-icon.svg";
import { Select, Timeline } from "antd";

const Datas = () => {
  return (
    <div className="content__jobseekers-card">
      <h6 className="desc__jobseekers-card">
        Motivated and forward-thinking product owner with years of Agile product
        management experience. The blend of analytical skills, product
        development success and communication capabilities. Superior skills in
        translating complex and abstract ideas into easily understood technical
        solutions.Advanced Certified Scrum Product Owner® (A-CSPO) 2022
      </h6>
      <h4 className="title__jobseekers-card experience-title__jobseekers-card">
        Arizalar
      </h4>
      <div className="applications__jobseekers-card">
        <h6>Product designer</h6>
        <div>
          <button>
            Xabar
            <img src={SmsIcon} alt="SmsIcon" />
          </button>
          <Select
            defaultValue="lucy"
            size="large"
            style={{
              width: 195,
            }}
            options={[
              {
                value: "lucy",
                label: "Ko'rish bosqichida ",
              },
            ]}
          />
        </div>
      </div>
      <div className="applications__jobseekers-card">
        <h6>UX/UI designer</h6>
        <div>
          <button>
            Xabar
            <img src={SmsIcon} alt="SmsIcon" />
          </button>
          <Select
            defaultValue="lucy"
            size="large"
            style={{
              width: 195,
            }}
            options={[
              {
                value: "lucy",
                label: "Ko'rish bosqichida ",
              },
            ]}
          />
        </div>
      </div>
      <h4 className="title__jobseekers-card experience-title__jobseekers-card">
        Tajriba
      </h4>
      <span className="experience-header__jobseekers-card">
        <h5>Jochen Schweizer Group </h5>
        <p>To'liq stavka • 5 yil 6 oy</p>
      </span>
      <Timeline
        items={[
          {
            children: (
              <div className="experience-group__jobseekers-card">
                <h3>Product designer </h3>
                <p>To'liq stavka • Aprel 2022 - Hozirgacha </p>
                <ul className="list__jobseekers-card">
                  {`
                 Designed and prototyped a user web and mobile app of a for
                  delivery company called Turbo. • Designed a landing page for
                  MAIN JOIN • Designed and prototyped a CRM system for the
                  gigant IT-teaching center called Toko, gradually improved it
                  and implemented new features. • Designed a corporate website
                  and admin panel for animation school called ASA
              `
                    .split("•")
                    .map((li) => (
                      <li>{li}</li>
                    ))}
                </ul>
              </div>
            ),
          },
          {
            children: (
              <div className="experience-group__jobseekers-card">
                <h3>Product designer </h3>
                <p>To'liq stavka • Aprel 2022 - Hozirgacha </p>
                <ul className="list__jobseekers-card">
                  {`
                 Designed and prototyped a user web and mobile app of a for
                  delivery company called Turbo. • Designed a landing page for
                  MAIN JOIN • Designed and prototyped a CRM system for the
                  gigant IT-teaching center called Toko, gradually improved it
                  and implemented new features. • Designed a corporate website
                  and admin panel for animation school called ASA
              `
                    .split("•")
                    .map((li) => (
                      <li>{li}</li>
                    ))}
                </ul>
              </div>
            ),
          },
        ]}
      />
      <span className="experience-header__jobseekers-card experience-header--second">
        <h5>Jochen Schweizer Group </h5>
        <p>To'liq stavka • 5 yil 6 oy</p>
      </span>
      <Timeline
        items={[
          {
            children: (
              <div className="experience-group__jobseekers-card">
                <h3>Product designer </h3>
                <p>To'liq stavka • Aprel 2022 - Hozirgacha </p>
                <ul className="list__jobseekers-card">
                  {`
                 Designed and prototyped a user web and mobile app of a for
                  delivery company called Turbo. • Designed a landing page for
                  MAIN JOIN
              `
                    .split("•")
                    .map((li) => (
                      <li>{li}</li>
                    ))}
                </ul>
              </div>
            ),
          },
        ]}
      />
      <div className="education-group__jobseekers-card">
        <h2 className="title__jobseekers-card education-title__jobseekers-card">
          Ta'lim
        </h2>
        <h6>Tashkent University of Information Technology</h6>
        <p>Aprel 2022 - Hozirgacha </p>
      </div>
      <div className="section-group__jobseekers-card">
        <h2 className="title__jobseekers-card">Ko'nikmalari</h2>
        <div className="circle-group__jobseekers-card">
          <p className="circle-text__jobseekers-card">
            O'rganishni o'rgana olish
          </p>
          <p className="circle-text__jobseekers-card">Jamoada ishlay olish</p>
          <p className="circle-text__jobseekers-card">Strategik fikrlash</p>
          <p className="circle-text__jobseekers-card">Jamoada ishlay olish</p>
        </div>
      </div>
      <div className="section-group__jobseekers-card">
        <h2 className="title__jobseekers-card">Akademik natijalar</h2>
        <div className="circle-group__jobseekers-card">
          <p className="circle-text__jobseekers-card">SAT • 1560 • IDP IELTS</p>
          <p className="circle-text__jobseekers-card">Hujjat</p>
        </div>
      </div>
      <div className="section-group__jobseekers-card">
        <h2 className="title__jobseekers-card">Litsenziya va setifikatlar</h2>
        <div className="circle-group__jobseekers-card">
          <p className="circle-text__jobseekers-card">
            Google UX Sertificate • Google
          </p>
          <p className="circle-text__jobseekers-card">Hujjat</p>
        </div>
      </div>
      <div className="section-group__jobseekers-card">
        <h2 className="title__jobseekers-card">Oila ma'lumotlari</h2>
        <span>
          <p>Uylangan</p>
          <p>•</p>
          <p>3 farzandli</p>
        </span>
        <div>
          <h5>Otasi</h5>
          <p>
            Karimov Nodirjon Hotamovich • O’zbekiston • 12.08.1886 •
            O’zbekiston, Toshkent • Soliq • Inspektor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datas;
