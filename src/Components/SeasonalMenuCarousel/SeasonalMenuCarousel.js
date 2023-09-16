import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.min.css";
// import "./styles.css";

import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";
import Product from "../MinorComponents/Product";
import { Link } from "react-router-dom";
import Image from "../MinorComponents/Image";

const SeasonalMenuCarousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1024) {
        setSlidesPerView(3);
      } else if (screenWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    }

    handleResize(); // set initial value on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-3   md:w-[100vw] overflow-x-hidden">
        <h1 className="font-sans text-[var(--text-color)] text-4xl font-bold flex-wrap text-center">
          Summer and Spring Menu
        </h1>
        <hr className="text-[var(--text-color)] w-1/4 mt-2  " />

        <p className="text-[#A8A8A8] m-4 font-sans flex-wrap text-center ">
          Enjoy summer with hand-crafted cakes by Tuileries Patisserie.
        </p>
      </div>

      {/* <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        // navigation
      >
        <div className="flex justify-between gap-x-4 overflow-x-scroll">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
            return (
              <Product
                _id="1011"
                img="https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
                productName="Flower Base"
                price="35.00"
                color="Blank and White"
                badge={false}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            );
          })}
        </div>
      </Swiper> */}

      {/* <div className="py-20 flex flex-col md:flex-row items-start justify-between gap-4 lg:gap-10 ">
        <div className="w-full md:w-2/3 lg:w-1/2 ">
          <Link to="/shop">
            <Image
              className="h-1/2 w-full object-cover"
              imgSrc={
                "https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
              }
            />
          </Link>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col ">
          <div className=" w-full">
            <Link to="/shop">
              <Image
                className="h-1/2 w-full object-cover"
                imgSrc={
                  "https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
                }
              />
            </Link>
          </div>
          <div className=" w-full">
            <Link to="/shop">
              <Image
                className="h-1/2 w-full object-cover"
                imgSrc={
                  "https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
                }
              />
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SeasonalMenuCarousel;
