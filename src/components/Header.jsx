import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 relative">
      <div className="w-full object-cover">
        <img src="../../src/assets/header/header.jpg" alt="airforce" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 absolute text-black lg:gap-12">
        <p className="text-sm font-semibold md:text-xl lg:text-3xl">
          Nike Dunk
        </p>
        <h2 className="text-2xl font-extrabold md:text-5xl lg:text-6xl">
          STEP UP FOR YOUR CITY
        </h2>
        <p className="text-xs w-3/4 text-center md:text-xl lg:text-2xl">
          Jalen Brunson and the Nike Dunk are bringing that fire back to the
          concrete jungle
        </p>
      </div>
    </div>
  );
};

export default Header;
