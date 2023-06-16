import React from "react";

import "./mockInterviews.css";
import HeroMock from "../../components/layout/hero-mock/HeroMock";
import SignupInterview from "../../components/layout/signup-mock/SignupMock";
import AsideMock from "../../components/layout/aside-mock/AsideMock";
import FeedMock from "../../components/atoms/feed-mock/FeedMock";

const MockInterviews = () => {
  return (
    <div className="mock-interviews">
      <HeroMock />
      <FeedMock />
      <SignupInterview />
      <AsideMock />
    </div>
  );
};

export default MockInterviews;
