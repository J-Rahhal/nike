import React from "react";
import { Categories, MenShoes } from "../constants/index";
import Title from "../components/Title";
import CategoriesNav from "../components/CategoriesNav";
import CardGrid from "../components/CardGrid";
import { useParams } from "react-router-dom";

const Men = () => {
  let { subcategory = "all" } = useParams();
  return (
    <div className="flex flex-col gap-5 py-10">
      <Title text={"Men's Corner"} />
      <div className="border"></div>
      <CategoriesNav categoryArr={Categories} link={"kids"} />
      <div className="border"></div>
      <CardGrid ItemArr={MenShoes} subcategory={subcategory} />
    </div>
  );
};

export default Men;
