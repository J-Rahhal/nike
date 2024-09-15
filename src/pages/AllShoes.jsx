import React from "react";
import Title from "../components/Title";
import CategoriesNav from "../components/CategoriesNav";
import CardGrid from "../components/CardGrid";
import { Categories, KidsShoes, MenShoes, WomenShoes } from "../constants";
import { useParams } from "react-router-dom";

const AllShoes = () => {
  let { subcategory = "all" } = useParams();

  return (
    <div className="flex flex-col gap-5 py-10">
      <Title text={"All Shoes"} />
      <div className="border"></div>
      <CategoriesNav categoryArr={Categories} link={"allshoes"} />
      <div className="border"></div>
      <CardGrid ItemArr={KidsShoes} subcategory={subcategory} />
      <CardGrid ItemArr={MenShoes} subcategory={subcategory} />
      <CardGrid ItemArr={WomenShoes} subcategory={subcategory} />
    </div>
  );
};

export default AllShoes;
