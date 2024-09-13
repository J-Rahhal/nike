import React from "react";
import Template from "./Template";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
