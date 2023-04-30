import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import "../../root.css";
import SeasonalMenuCarousel from "../../Components/SeasonalMenuCarousel/SeasonalMenuCarousel";

function Home() {
  return (
    <>
      <Carousel />
      <SeasonalMenuCarousel />
      <hr className="text-[var(--text-color)] w-1/4 mt-2  " />
    </>
  );
}

export default Home;
