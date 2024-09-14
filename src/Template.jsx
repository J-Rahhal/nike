import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Template = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Template;
