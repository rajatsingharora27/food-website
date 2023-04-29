import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../root.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "black",
        "--swiper-pagination-color": "#fff",
        "background-image":
          "url(https://cdn.shopify.com/s/files/1/0580/2668/8535/files/Banner-Weasbsite-20.jpg?v=1657226032)",
        "background-size": "cover",
        "background-position": "center",
        height: "80vh",
        width: "100vw",
        background: "blur(10px)",
      }}
      loop={true}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper2 h-[400px] bg-fixed "
    >
      {/* <SwiperSlide className=" m-3">
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-3">
          <div className="">
            <p className="font-sans text-[var(--text-color)]  text-3xl mb-4 md:text-5xl">
              Get Fresh Cakes at door steps
            </p>
            <button
              className="middle none center rounded-lg bg-[var(--background-color)] py-3.5 px-12 font-sans text-sm
               font-semibold uppercase text-white shadow-md
                shadow-pink-500/20 transition-all hover:shadow-lg
                 hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] 
                active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none
                w-1/2 m-4 md:w-[40%]"
              data-ripple-light="true"
            >
              Shop Now
            </button>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0580/2668/8535/files/banner-home.png?v=1679217256"
            alt=""
            className="h-1/2 w-3/4  rounded-2xl shadow-2xl absolute left-1 bottom-4 md:w-96  md:h-96"
          />
        </div>
      </SwiperSlide> */}

      {/* <SwiperSlide className=" m-3">
        <div className=" flex justify-center items-center gap-x-3">
          <div>
            <p className="font-sans text-[#C7B299]  text-5xl mb-4">
              Get Fresh Cakes at door steps
            </p>
            <button
              className="middle none center rounded-lg bg-[var(--background-color)] py-3.5 px-12 font-sans text-sm font-semibold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Shop Now
            </button>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0580/2668/8535/files/Untiasatled-1.jpg?v=1659091752"
            alt=""
            className="w-96 rounded-2xl shadow-2xl h-96"
          />
        </div>
      </SwiperSlide> */}

      <SwiperSlide className="m-3">
        {/* Parent div */}
        <div className="sm:flex sm:justify-center sm:items-center sm:gap-x-7">
          <div className="flex flex-col justify-center items-start mb-2 md:mt-10">
            {/* Caption */}
            <p className="font-sans text-[var(--text-color)] text-3xl  font-medium p-2 ">
              Get Fresh Cakes at door steps
            </p>

            {/* uncdeline caption */}
            <p className="font-sans text-[#33333] font-thin p-2">
              Experiance the best and finest tast of our product
            </p>

            <button className="bg-[var(--background-color)] hover:bg-[#b6efdb] text-white font-semibold py-2 px-4 rounded text-start m-2">
              Shop now
            </button>
          </div>

          <img
            src="https://cdn.shopify.com/s/files/1/0580/2668/8535/files/banner-home.png?v=1679217256"
            alt=""
            className="w-96 h-64 rounded-md shadow-lg sm:mt-10 sm:w-[500px] sm:h-[350px]"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className="m-3">
        {/* Parent div */}
        <div className="sm:flex sm:justify-center sm:items-center sm:gap-x-7">
          <div className="flex flex-col justify-center items-start mb-2 md:mt-10">
            {/* Caption */}
            <p className="font-sans text-[var(--text-color)] text-3xl  font-medium p-2 ">
              Get Fresh Cakes at door steps
            </p>

            {/* uncdeline caption */}
            <p className="font-sans text-[#33333] font-thin p-2">
              Experiance the best and finest tast of our product
            </p>

            <button className="bg-[var(--background-color)] hover:bg-[#b6efdb] text-white font-semibold py-2 px-4 rounded text-start m-2">
              Shop now
            </button>
          </div>

          <img
            src="https://cdn.shopify.com/s/files/1/0580/2668/8535/files/Untiasatled-1.jpg?v=1659091752"
            alt=""
            className="w-96 h-64 rounded-md shadow-lg sm:mt-10 sm:w-[500px] sm:h-[350px]"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

// margin-left: 7px;
//     width: 342px;
//     height: 218px;
//     border-radius: 5%;

export default Carousel;

// https://cdn.shopify.com/s/files/1/0580/2668/8535/files/Untiasatled-1.jpg?v=1659091752
