import React, { useState, useEffect } from "react";
import { CubeSpinner } from "react-spinners-kit";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footers";
import Header from "../Shared/Header";

const Main = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <CubeSpinner size={40} color="#83C8E4" loading={loading} />
        </div>
      ) : (
        <div>
          <Header />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Main;
