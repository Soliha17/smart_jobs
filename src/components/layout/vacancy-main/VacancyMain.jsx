import React from "react";

import "./vacancyMain.css";
import VacancyCard from "../../atoms/vacancy-card/VacancyCard";
import { VacancyCardDatas } from "../../../mock/vacancyCard";
import SearchFeed from "../../atoms/search-feed/SearchFeed";
import VacancyFullCard from "../../atoms/vacancy-full-card/VacancyFullCard";
import SearchResultIcon from "../../../assets/images/search-result--icon.svg";

const VacancyMain = ({ state, setState }) => {
  return (
    <div
      className="vacancy-main container"
      style={state === "btn2" ? { gap: "0" } : { gap: "24px" }}
    >
      <div
        className="left__vacancy-main"
        style={state === "btn2" ? { width: "100%" } : { width: "auto" }}
      >
        <SearchFeed
          icon={SearchResultIcon}
          text={"Qidiruvlar  natijasi: "}
          number={"205"}
          style={state === "btn2" ? { display: "flex" } : { display: "none" }}
        />
        <div
          className={`card-group__vacancy ${
            state === "btn2" && "list-group__vacancy"
          }`}
        >
          {VacancyCardDatas.map(
            ({ id, title, date, text, company, jobType, jobTime }) => {
              return (
                <VacancyCard
                  className={`vacancy-card ${
                    state === "btn2" && "vacancy-list-card"
                  }`}
                  key={id}
                  title={title}
                  date={date}
                  text={text}
                  company={company}
                  jobType={jobType}
                  jobTime={jobTime}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="right__vacancy-main">
        <VacancyFullCard
          style={state === "btn2" ? { display: "none" } : { display: "block" }}
        />
      </div>
    </div>
  );
};

export default VacancyMain;
