import React from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const Home = () => {
  return (
    <div>
      <div className="banner-section">
        <Banner />
        <HotJobs />
      </div>
    </div>
  );
};

export default Home;
