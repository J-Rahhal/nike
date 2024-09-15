import React from "react";
import { AccessoriesCategories, AccessoriesItems } from "../constants";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import CategoriesNav from "../components/CategoriesNav";
import CardGrid from "../components/CardGrid";

const Accessories = () => {
  let { subcategory = "all" } = useParams();

  return (
    <div className="flex flex-col gap-5 py-10">
      <Title text={" Accessories & Equipment"} />
      <div className="border"></div>
      <CategoriesNav categoryArr={AccessoriesCategories} link={"accessories"} />
      <div className="border"></div>
      <CardGrid ItemArr={AccessoriesItems} subcategory={subcategory} />
    </div>
  );
};

export default Accessories;
