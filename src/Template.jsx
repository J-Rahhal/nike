import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Template = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Outlet />
      <div className="border"></div>
      <Footer />
    </div>
  );
};

export default Template;
