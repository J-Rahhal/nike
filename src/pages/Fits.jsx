import React from "react";
import { HomeGridMenu, fits } from "../constants";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import CategoriesNav from "../components/CategoriesNav";
import CardGrid from "../components/CardGrid";

const Fits = () => {
  let { subcategory = "all" } = useParams();

  return (
    <div className="flex flex-col gap-5 py-5">
      <Title text={"Our Selection"} />
      <div className="border"></div>
      <CategoriesNav categoryArr={HomeGridMenu} link={"fits"} />
      <div className="border"></div>
      <CardGrid ItemArr={fits} subcategory={subcategory} />
    </div>
  );
};

export default Fits;
