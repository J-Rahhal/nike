import React from "react";
import Title from "../components/Title";
import CategoriesNav from "../components/CategoriesNav";
import { Categories, KidsShoes } from "../constants";
import { useParams } from "react-router-dom";
import CardGrid from "../components/CardGrid";

const Kids = () => {
  let { subcategory = "all" } = useParams();
  console.log(subcategory);
  return (
    <div className="flex flex-col gap-5 py-10">
      <Title text={"Kids Corner"} />
      <div className="border"></div>
      <CategoriesNav categoryArr={Categories} link={"shoes"} />
      <div className="border"></div>
      <CardGrid ItemArr={KidsShoes} subcategory={subcategory} />
    </div>
  );
};

export default Kids;
