import React from "react";
import { NewArrivals } from "../constants/index";

const NewArrival = () => {
  return (
    <div className="flex">
      {NewArrivals.map((image) => {
        return (
          <div key={image.id} className="w-full ">
            <img src={image.image} alt="" className="w-full object-fill" />
          </div>
        );
      })}
    </div>
  );
};

export default NewArrival;
