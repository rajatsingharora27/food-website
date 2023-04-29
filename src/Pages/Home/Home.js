import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import "../../root.css";

function Home() {
  return (
    // <h1>
    //   <Carousel />
    //   {/* Heading - congifured according to the backend */}

    //   <div className="flex flex-col items-center justify-center gap-y-5  h-36 border-red border-2 w-[100vw]">
    //     <div className="font-sans text-[var(--text-color)] text-5xl font-bold">
    //       Summer and Spring Menu
    //     </div>
    //     {/* <hr className="text-[var(--text-color)] w-1/2" />
    //     <div>Enjoy summer with hand-crafted cakes by Tuileries Patisserie.</div> */}
    //   </div>
    // </h1>
    <>
      <Carousel />
      <div className="flex flex-col justify-center items-center mt-3">
        <h1 className="font-sans text-[var(--text-color)] text-4xl font-bold flex-wrap">
          Summer and Spring Menu
        </h1>
        <hr className="text-[var(--text-color)] w-1/4 mt-2  " />

        <p className="text-[#A8A8A8] m-4 font-sans flex-wrap ">
          Enjoy summer with hand-crafted cakes by Tuileries Patisserie.
        </p>
      </div>
    </>
  );
}

export default Home;
