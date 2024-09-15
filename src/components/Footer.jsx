import React from "react";
import { FeaturedMenu, Shoes } from "../constants/index.js";
import { Clothing } from "../constants/index.js";
import { Kids } from "../constants/index";
import FooterSection from "../components/FooterSection";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="my-10 mx-1 grid grid-cols-2 gap-3 md:grid-cols-4 md:text-lg lg:text-2xl">
        <FooterSection text="Featured" section={FeaturedMenu} />
        <FooterSection text="Shoes" section={Shoes} />
        <FooterSection text="Clothing" section={Clothing} />
        <FooterSection text="Kids" section={Kids} />
      </div>
      <div className="mt-12 mb-5 text-xs text-gray-600 flex flex-col gap-2 items-center border-t-2">
        <p>
          This website is for skill demonstration purposes only.
          <br />I do not own any of the content on this website.
        </p>
        <p>&copy;{currentYear} Nike, Inc All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
