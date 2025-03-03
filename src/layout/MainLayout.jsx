import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/sheared/Navbar";
import Footer from "../pages/sheared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
