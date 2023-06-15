import React, { useState } from "react";

import { Button, Dropdown, Progress } from "antd";
import QuestionMark from "../../assets/images/question-mark-myresumes.svg";
import { useTranslation } from "react-i18next";

import "./myResumes.css";

import ThreeDots from "../../assets/images/three-dots.svg";
import RightArrow from "../../assets/images/right-arrow-profile.svg";
import RightBlackArrow from "../../assets/images/right-arrow-black-myresumes.svg";
import MyResumeModal from "../../components/molecules/modal/MyResumeModal";

const MyResumes = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          {t("save")}
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          {t("sharing")}
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          {t("complaining")}
        </a>
      ),
    },
  ];

  const [isMyResumeModalOpen, setIsMyResumeModalOpen] = useState(false);

  function openMyResumeModal() {
    setIsMyResumeModalOpen(true);
  }

  return (
    <div className="my-resumes container">
      <div className="header__my-resumes">
        <h2> {t("myResume")} </h2>
        <button className="primary-btn"> {t("createAResume")} </button>
      </div>
      <div className="content__my-resumes">
        <div className="card__my-resumes resume-card">
          <div className="top__resume-card">
            <div>
              <img
                src={require("../../assets/images/profile-icon-myresumes.png")}
                alt="profile icon"
              />
              <div>
                <h2>{t("productManager")}</h2>
                <span>
                  <p>{t("inTheOffice")}</p>
                  <p>{t("fullTime")}</p>
                  <p>1-3 {t("year")}</p>
                </span>
              </div>
            </div>
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
                  <img src={ThreeDots} alt="dots icon" />
                </Button>
              </Dropdown>
            </span>
          </div>
          <div className="status__resume-card">
            <div>
              <p>{t("filled")}</p>
              <Progress
                percent={48}
                size={[370, 4]}
                trailColor={"white"}
                strokeColor={"#40AAFF"}
              />
            </div>
            <button>
              {t("filling")}
              <img src={RightArrow} alt="right arrow" />
            </button>
          </div>
          <div className="counts__resume-card">
            <span>
              <h4>500</h4>
              <p> {t("views")}</p>
            </span>
            <span>
              <h4>58</h4>
              <p>{t("applications")}</p>
            </span>
            <span>
              <h4>4</h4>
              <p>{t("suggestions")}</p>
            </span>
          </div>
          <p className="vacancies__resume-card">{t("vacancies")} +256</p>
          <div className="buttons__resume-card">
            <button onClick={openMyResumeModal}>
              {t("theResumeIsOpenToEveryone")}
              <img src={RightBlackArrow} alt="right arrow" />
            </button>
            <button>
              {t("theResumeIsOpenToEveryone")}

              <img src={RightBlackArrow} alt="right arrow" />
            </button>
          </div>
          <p className="footer__resume-card">
            {t("latestUpdate")}: 10:00 20.05.2023
          </p>
        </div>
        <div className="card__my-resumes resume-card">
          <div className="top__resume-card">
            <div>
              <img
                src={require("../../assets/images/profile-icon-myresumes.png")}
                alt="profile icon"
              />
              <div>
                <h2>{t("productManager")}</h2>
                <span>
                  <p>{t("inTheOffice")}</p>
                  <p>{t("fullTime")}</p>
                  <p>1-3 {t("year")}</p>
                </span>
              </div>
            </div>
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
                  <img src={ThreeDots} alt="dots icon" />
                </Button>
              </Dropdown>
            </span>
          </div>
          <div className="status__resume-card">
            <div>
              <p>{t("filled")}</p>
              <Progress
                percent={48}
                size={[370, 4]}
                trailColor={"white"}
                strokeColor={"#40AAFF"}
              />
            </div>
            <button>
              {t("filling")}
              <img src={RightArrow} alt="right arrow" />
            </button>
          </div>
          <div className="counts__resume-card">
            <span>
              <h4>500</h4>
              <p> {t("views")}</p>
            </span>
            <span>
              <h4>58</h4>
              <p>{t("applications")}</p>
            </span>
            <span>
              <h4>4</h4>
              <p>{t("suggestions")}</p>
            </span>
          </div>
          <p className="vacancies__resume-card">{t("vacancies")} +256</p>
          <div className="buttons__resume-card">
            <button onClick={openMyResumeModal}>
              {t("theResumeIsOpenToEveryone")}
              <img src={RightBlackArrow} alt="right arrow" />
            </button>
            <button>
              {t("theResumeIsOpenToEveryone")}

              <img src={RightBlackArrow} alt="right arrow" />
            </button>
          </div>
          <p className="footer__resume-card">
            {t("latestUpdate")}: 10:00 20.05.2023
          </p>
        </div>
        <div className="card__my-resumes resume-card">
          <div className="top__resume-card">
            <div>
              <img
                src={require("../../assets/images/profile-icon-myresumes.png")}
                alt="profile icon"
              />
              <div>
                <h2>{t("productManager")}</h2>
                <span>
                  <p>{t("inTheOffice")}</p>
                  <p>{t("fullTime")}</p>
                  <p>1-3 {t("year")}</p>
                </span>
                <div className="badge__resume-card">
                  <p> Ilova tomonidan rad etilgan</p>
                  <img src={QuestionMark} alt="question mark" />
                </div>
              </div>
            </div>
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
                  <img src={ThreeDots} alt="dots icon" />
                </Button>
              </Dropdown>
            </span>
          </div>
          <div className="status__resume-card">
            <div>
              <p>{t("filled")}</p>
              <Progress
                percent={48}
                size={[370, 4]}
                trailColor={"white"}
                strokeColor={"#40AAFF"}
              />
            </div>
            <button>
              {t("filling")}
              <img src={RightArrow} alt="right arrow" />
            </button>
          </div>
          <div className="counts__resume-card">
            <span>
              <h4>500</h4>
              <p> {t("views")}</p>
            </span>
            <span>
              <h4>58</h4>
              <p>{t("applications")}</p>
            </span>
            <span>
              <h4>4</h4>
              <p>{t("suggestions")}</p>
            </span>
          </div>
          <p className="vacancies__resume-card">{t("vacancies")} +256</p>
          <div className="buttons__resume-card">
            <button onClick={openMyResumeModal}>
              {t("theResumeIsOpenToEveryone")}
              <img src={RightBlackArrow} alt="right arrow" />
            </button>
            <button>
              {t("theResumeIsOpenToEveryone")}

              <img src={RightBlackArrow} alt="right arrow" />
            </button>
          </div>
          <p className="footer__resume-card">
            {t("latestUpdate")}: 10:00 20.05.2023
          </p>
        </div>
      </div>
      {
        <MyResumeModal
          open={isMyResumeModalOpen}
          setOpen={setIsMyResumeModalOpen}
        />
      }
    </div>
  );
};

export default MyResumes;
