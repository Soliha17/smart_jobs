import React from "react";

import "./resumePromo.css";

import HeroResumePromo from "../../components/atoms/hero-resume-builder/HeroResumePromo";
import OpportunityResumePromo from "../../components/layout/opportunity-resume-promo/OpportunityResumePromo";
import TemplatesResumePromo from "../../components/layout/templates-resume-promo/TemplatesResumePromo";
import AsideResumePromo from "../../components/layout/aside-resume-promo/AsideResumePromo";
import Footer from "../../components/layout/footer/Footer";

const ResumePromo = () => {
  return (
    <div className="resume-promo">
      <div className="container">
        <HeroResumePromo />
      </div>
      <div className="container">
        <OpportunityResumePromo />
      </div>
      <TemplatesResumePromo />
      <div className="container">
        <AsideResumePromo />
      </div>
      <Footer />
    </div>
  );
};

export default ResumePromo;
