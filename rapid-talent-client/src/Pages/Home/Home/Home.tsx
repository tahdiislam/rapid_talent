import React from "react";
import img from "../assets/banner_image.jpg";
import { HomeJobs } from "../HomeJobs/HomeJobs";
import { HomeJobs2 } from "../HomeJobs2/HomeJobs2";
import { TopBanner } from "../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner />
      <HomeJobs />
      <HomeJobs2 />
    </div>
  );
};

export default Home;
