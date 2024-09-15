import React from "react";
import Title from "../components/Title";
import CategoriesNav from "../components/CategoriesNav";
import CardGrid from "../components/CardGrid";
import { FeaturedMenu, FeaturedShoes } from "../constants/index.js";
import { useParams } from "react-router-dom";
FeaturedMenu;

const Featured = () => {
  let { subcategory = "featured" } = useParams();

  return (
    <div className="flex flex-col gap-5 py-5">
      <Title text={"Featured"} />
      <div className="border"></div>
      <CategoriesNav categoryArr={FeaturedMenu} link={"featured"} />
      <div className="border"></div>
      <CardGrid ItemArr={FeaturedShoes} subcategory={subcategory} />
    </div>
  );
};
``;

export default Featured;
