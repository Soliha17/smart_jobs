import React from "react";

import "./vacancyMain.css";
import VacancyCard from "../../atoms/vacancy-card/VacancyCard";
import { VacancyCardDatas } from "../../../mock/vacancyCard";
import VacancySearchFeed from "../../atoms/vacancy-search-feed/VacancySearchFeed";
import VacancyFullCard from "../../atoms/vacancy-full-card/VacancyFullCard";

const VacancyMain = () => {
  return (
    <div className="vacancy-main container">
      <div className="left__vacancy-main">
        <VacancySearchFeed />
        {VacancyCardDatas.map(
          ({ id, title, date, text, company, jobType, jobTime }) => {
            return (
              <VacancyCard
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
      <div className="right__vacancy-main">
        <VacancyFullCard />
      </div>
    </div>
  );
};

export default VacancyMain;
