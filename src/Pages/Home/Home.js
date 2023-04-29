import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import "../../root.css";

function Home() {
  return (
    <h1>
      <Carousel />
      {/* Heading - congifured according to the backend */}

      <div className="flex flex-col items-center justify-center gap-y-5  h-36">
        <div className="font-sans text-[var(--text-color)] text-5xl font-bold">
          Summer and Spring Menu
        </div>
        <hr className="text-[var(--text-color)] w-1/2" />
        <div>Enjoy summer with hand-crafted cakes by Tuileries Patisserie.</div>
      </div>
    </h1>
  );
}

export default Home;
