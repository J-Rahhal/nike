import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

const Template = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Template;
