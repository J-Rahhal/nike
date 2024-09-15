import React from "react";
import Template from "./Template";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/accessories/:subcategory?" element={<Accessories />} />
      </Route>
    </Routes>
  );
};

export default App;
