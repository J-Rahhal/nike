import React from "react";

const CardGrid = ({ ItemArr, subcategory }) => {
  return (
    <div className="grid w-3/4 m-auto gap-8 md:grid-cols-2 lg:grid-cols-3">
      {ItemArr.map((item) => {
        if (item.filter.includes(subcategory)) {
          return (
            <div key={item.id} className="bg-gray-200 p-5 rounded-3xl">
              <img src={item.image} className="rounded-xl" />
              <div>
                <p className="py-2 text-red-700">{item.category}</p>
                <p className="pb-2 text-lg font-semibold">{item.type}</p>
                <p className="pb-2">{item.color}</p>
                <p>{item.price}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default CardGrid;
