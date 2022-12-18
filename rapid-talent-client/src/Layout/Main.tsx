import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footers";
import Header from "../Shared/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
