import React from "react";
import Header from "../components/Header";
import HomeCarousel from "../components/HomeCarousel";
import { Classics } from "../constants/index";
import HomeGrid from "../components/HomeGrid";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="my-8 pl-8 md:my-12 md:pl-12">
        <h3 className="text-xl tracking-widest md:text-4xl">Classic Models</h3>
      </div>
      <HomeCarousel slides={Classics} />
      <div className="mt-20">
        <HomeGrid />
      </div>
    </div>
  );
};

export default Home;
