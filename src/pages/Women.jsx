import React from "react";
import { useParams } from "react-router-dom";
import { Categories, WomenShoes } from "../constants";
import Title from "../components/Title";
import CategoriesNav from "../components/CategoriesNav";
import CardGrid from "../components/CardGrid";

const Women = () => {
  let { subcategory = "all" } = useParams();
  return (
    <div className="flex flex-col gap-5 py-10">
      <Title text={"Women's Corner"} />
      <div className="border"></div>
      <CategoriesNav categoryArr={Categories} link={"women"} />
      <div className="border"></div>
      <CardGrid ItemArr={WomenShoes} subcategory={subcategory} />
    </div>
  );
};

export default Women;
