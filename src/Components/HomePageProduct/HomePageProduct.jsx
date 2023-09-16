import React from "react";
import Heading from "../MinorComponents/Heading";
import Product from "../MinorComponents/Product";

const HomePageProduct = () => {
  return (
    <div className="w-full p-20 ">
      <div className="my-5">
        <Heading heading="Our Bestsellers" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((ele) => {
            return (
              <Product
                _id="1011"
                img="https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
                productName="Flower Base"
                price="35.00"
                color="Blank and White"
                badge={true}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            );
          })}
        </div>
      </div>

      <div>
        <Heading heading="Summer Cakes" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((ele) => {
            return (
              <Product
                _id="1011"
                img="https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
                productName="Flower Base"
                price="35.00"
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
};

export default HomePageProduct;
