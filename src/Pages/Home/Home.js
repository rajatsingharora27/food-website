import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import "../../root.css";
import SeasonalMenuCarousel from "../../Components/SeasonalMenuCarousel/SeasonalMenuCarousel";
import HomePageProduct from "../../Components/HomePageProduct/HomePageProduct";

function Home() {
  return (
    <>
      <Carousel />

      <hr className="text-[var(--text-color)] w-1/4 mt-2  " />
      <div className="p-4 mt-8">
        <SeasonalMenuCarousel />
        <HomePageProduct />
      </div>
    </>
  );
}

export default Home;
