import React from "react";
import img from "../assets/banner_image.jpg";
import { HomeJobs } from "../HomeJobs/HomeJobs";
import { TopBanner } from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <HomeJobs />
    </div>
  );
};

export default Home;
