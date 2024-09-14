import React from "react";
import Header from "../components/Header";
import HomeCarousel from "../components/HomeCarousel";
import { Classics } from "../constants/index";
import HomeGrid from "../components/HomeGrid";
import NewArrival from "../components/NewArrival";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="my-8 pl-8 md:my-12 md:pl-12">
        <h3 className="text-xl tracking-widest md:text-4xl">Classic Models</h3>
      </div>
      <HomeCarousel slides={Classics} />
      <div className="mt-20">
        <HomeGrid />
      </div>
      <div className="my-10 text-center">
        <h2 className="text-2xl font-bold tracking-wider md:text-4xl lg:text-6xl">
          NEW THIS WEEK
        </h2>
        <p className="text-sm pb-4 md:text-lg lg:text-2xl lg:pb-8 lg:pt-4">
          Featuring the Luka 3 'Motorsport' & more
        </p>
        <button className="bg-black text-white px-4 py-1 rounded-full md:text-lg">
          View New Arrivals
        </button>
      </div>
      <NewArrival />
    </div>
  );
};

export default Home;
