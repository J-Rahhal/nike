import React from "react";

const FooterSection = ({ section, text }) => {
  return (
    <div className="text-center">
      <h4 className="font-bold tracking-wide py-4">{text}</h4>
      {section.map((item) => {
        return (
          <p
            key={item.id}
            className="text-xs text-gray-600 md:text-lg lg:text-xl"
          >
            {item.name}
          </p>
        );
      })}
    </div>
  );
};

export default FooterSection;
