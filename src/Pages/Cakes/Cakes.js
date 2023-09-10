import React from "react";
import PageCard from "../../Components/PageCard/PageCard";
import { CAKES } from "../../Utils/productMock";

function Cakes() {
  return (
    <div>
      <div className="relative">
        {/* Common page Banner */}

        <img
          src="https://cdn.shopify.com/s/files/1/0580/2668/8535/files/banner.jpg?v=1679214987"
          alt=""
          className="h-auto max-w-full opacity-60"
        />
        <div className="absolute left-1/3 top-1/3 md:left-1/2">
          <h1 className="font-sans text-4xl text-[#333333] ">Cakes</h1>
        </div>
      </div>
      <div>FILTER BAR</div>
      <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-3">
        {CAKES.map((cardDetail) => {
          return <PageCard product={cardDetail} />;
        })}
      </div>
    </div>
  );
}

export default Cakes;
