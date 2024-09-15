import React from "react";
import { Link } from "react-router-dom";

const CategoriesNav = ({ categoryArr, link }) => {
  return (
    <>
      <ul className=" grid grid-cols-3 w-3/4 gap-3 items-center m-auto md:flex md:justify-between md:items-center md:text-lg lg:text-xl">
        {categoryArr.map((category) => {
          return (
            <li key={category.id}>
              <Link
                to={`/${link}/` + category.id}
                className="hover:text-gray-400"
              >
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CategoriesNav;
