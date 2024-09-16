import React from "react";
import { Link } from "react-router-dom";

const FooterSection = ({ section, text }) => {
  return (
    <div className="text-center">
      <h4 className="font-bold tracking-wide py-4">{text}</h4>
      {section.map((item) => {
        return (
          <Link
            to={`/${item.type}`}
            key={item.id}
            className="block text-xs text-gray-600 md:text-lg lg:text-xl"
            onClick={() => window.scrollTo(0, 0)}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterSection;
