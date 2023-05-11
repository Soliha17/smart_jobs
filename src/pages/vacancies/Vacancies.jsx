import React, { useState } from "react";
import VacancyFeed from "../../components/atoms/vacancy-feed/VacancyFeed";

import "./vacancy.css";
import VacancyMain from "../../components/layout/vacancy-main/VacancyMain";
import Footer from "../../components/layout/footer/Footer";
import YMapsComponent from "../../components/molecules/yandex-map/YmapsComponent";

const Vacancies = () => {
  const [selectedButton, setSelectedButton] = useState("btn1");

  return (
    <div className="vacancies">
      <YMapsComponent />
      <VacancyFeed state={selectedButton} setState={setSelectedButton} />
      <VacancyMain state={selectedButton} setState={setSelectedButton} />
      <Footer />
    </div>
  );
};

export default Vacancies;
