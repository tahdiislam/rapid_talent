import React from "react";
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