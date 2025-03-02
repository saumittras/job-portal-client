import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/sheared/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
