import React from "react";
import VacancyFeed from "../../components/atoms/vacancy-feed/VacancyFeed";

import "./vacancy.css";
import VacancyMain from "../../components/layout/vacancy-main/VacancyMain";
import Footer from "../../components/layout/footer/Footer";

const Vacancies = () => {
  return (
    <div className="vacancies">
      <VacancyFeed />
      <VacancyMain />
      <Footer />
    </div>
  );
};

export default Vacancies;
