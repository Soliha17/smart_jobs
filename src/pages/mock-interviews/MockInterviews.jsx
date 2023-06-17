import React from "react";

import "./mockInterviews.css";
import HeroMock from "../../components/layout/hero-mock/HeroMock";
import SignupInterview from "../../components/layout/signup-mock/SignupMock";
import AsideMock from "../../components/layout/aside-mock/AsideMock";
import FeedMock from "../../components/atoms/feed-mock/FeedMock";
import MockCarousel from "../../components/layout/mock-carousel/MockCarousel";
import FaqMock from "../../components/atoms/faq-mock/FaqMock";
import Footer from "../../components/layout/footer/Footer";

const MockInterviews = () => {
  return (
    <>
      <div className="mock-interviews">
        <HeroMock />
        <FeedMock />
        <SignupInterview />
        <AsideMock />
        <MockCarousel />
        <FaqMock />
      </div>
      <Footer />
    </>
  );
};

export default MockInterviews;
