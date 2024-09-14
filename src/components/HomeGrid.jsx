import React from "react";
import { HomeGridPictures } from "../constants/index";

const HomeGrid = () => {
  return (
    <div className=" grid grid-col-1 grid-rows-4 text-white md:grid-cols-2 md:grid-rows-2">
      {HomeGridPictures.map((picture) => {
        return (
          <div key={picture.id} className="relative">
            <div className="h-full">
              <img
                src={picture.image}
                alt={picture.description}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute bottom-3 left-5">
              <h3 className="text-sm  md:text-lg">{picture.title}</h3>
              <p className="text-xl py-2 md:text-3xl">{picture.description}</p>
              <button className="bg-white text-black  px-4 py-1 rounded-full">
                {picture.btnText}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeGrid;
