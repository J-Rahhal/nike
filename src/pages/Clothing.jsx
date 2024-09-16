import React from "react";
import Title from "../components/Title";
import CategoriesNav from "../components/CategoriesNav";
import CardGrid from "../components/CardGrid";
import { useParams } from "react-router-dom";
import { ClothingItems, ClothingMenu } from "../constants";

const Clothing = () => {
  let { subcategory = "all" } = useParams();
  console.log(subcategory);

  return (
    <div className="flex flex-col gap-5 py-5">
      <Title text={"Clothing"} />
      <div className="border"></div>
      <CategoriesNav categoryArr={ClothingMenu} link={"clothing"} />
      <div className="border"></div>
      <CardGrid ItemArr={ClothingItems} subcategory={subcategory} />
    </div>
  );
};

export default Clothing;
