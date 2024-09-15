import React from "react";

const Title = ({ text }) => {
  return (
    <h3 className="px-5 py-3 font-bold text-lg md:text-xl lg:text-3xl">
      {text}
    </h3>
  );
};

export default Title;
