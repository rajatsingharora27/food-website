import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../root.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from "react-redux";

// import "./styles.css";

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const hamburgerVale = useSelector((store) => store.hamburger.isOpen);

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "black",
        "--swiper-pagination-color": "#fff",
        backgroundImage:
          "url(https://cdn.shopify.com/s/files/1/0580/2668/8535/files/Banner-Weasbsite-20.jpg?v=1657226032)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "80vh",
        width: "100vw",
        zIndex: hamburgerVale ? -1 : 0,
        background: "blur(10px)",
      }}
      loop={true}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper2 h-[400px] bg-fixed "
    >
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
            className="w-[345px] h-64 rounded-md shadow-lg sm:mt-10 sm:w-[500px] sm:h-[350px]"
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
            className="w-[345px] h-64 rounded-md shadow-lg sm:mt-10 sm:w-[500px] sm:h-[350px]"
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
