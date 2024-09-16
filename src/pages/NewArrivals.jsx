import React from "react";
import Title from "../components/Title";
import CategoriesNav from "../components/CategoriesNav";
import CardGrid from "../components/CardGrid";
import { useParams } from "react-router-dom";
import { ArrivalsItems, arrivalsMenu } from "../constants";

const NewArrivals = () => {
  let { subcategory = "all" } = useParams();

  return (
    <div className="flex flex-col gap-5 py-10">
      <Title text={"New Arrivals"} />
      <div className="border"></div>
      <CategoriesNav categoryArr={arrivalsMenu} link={"new-arrivals"} />
      <div className="border"></div>
      <CardGrid ItemArr={ArrivalsItems} subcategory={subcategory} />
    </div>
  );
};

export default NewArrivals;
