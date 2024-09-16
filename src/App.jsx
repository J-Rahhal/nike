import React from "react";
import Template from "./Template";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
import Kids from "./pages/Kids";
import Men from "./pages/Men";
import Women from "./pages/Women";
import AllShoes from "./pages/AllShoes";
import Featured from "./pages/Featured";
import Clothing from "./pages/Clothing";
import Fits from "./pages/Fits";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Template />}>
        <Route index element={<Home />}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/shoes" element={<AllShoes />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route Path="/fits" element={<Fits />} />

        <Route path="/accessories/:subcategory?" element={<Accessories />} />
        <Route path="/kids/:subcategory?" element={<Kids />} />
        <Route path="/men/:subcategory?" element={<Men />} />
        <Route path="/women/:subcategory?" element={<Women />} />
        <Route path="/shoes/:subcategory?" element={<AllShoes />} />
        <Route path="/featured/:subcategory?" element={<Featured />} />
        <Route path="/clothing/:subcategory?" element={<Clothing />} />
        <Route path="/fits/:subcategory?" element={<Fits />} />
      </Route>
    </Routes>
  );
};

export default App;
