import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import "../../root.css";

function Home() {
  return (
    <h1>
      <strong>Home</strong>
      <Carousel />
      {/* Heading - congifured according to the backend */}

      <div className="flex flex-col items-center justify-center gap-y-5 border border-black h-36">
        <div className="font-sans text-yellow-300 font-bold">
          Summer Menu and Spring Menu
        </div>
        <div>Enjoy summer with hand-crafted cakes by Tuileries Patisserie.</div>
      </div>
    </h1>
  );
}

export default Home;
