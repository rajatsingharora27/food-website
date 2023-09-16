import React from "react";
import PageCard from "../../Components/PageCard/PageCard";
import { CAKES } from "../../Utils/productMock";
import Product from "../../Components/MinorComponents/Product";

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
      <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-3 p-20">
        {/* {CAKES.map((cardDetail) => {
          return <PageCard product={cardDetail} />;
        })} */}

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
          {CAKES.map((ele) => {
            return (
              <Product
                _id={ele.id}
                img="https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
                productName={ele.name}
                price={ele.price}
                color="Blank and White"
                badge={true}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cakes;
