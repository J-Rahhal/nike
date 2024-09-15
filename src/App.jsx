import React from "react";
import Template from "./Template";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
import Kids from "./pages/Kids";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories/:subcategory?" element={<Accessories />} />
        <Route path="/kids/:subcategory?" element={<Kids />} />
      </Route>
    </Routes>
  );
};

export default App;
