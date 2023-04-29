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
        height: "65vh",
        width: "100%",
        background: "blur(10px)",
      }}
      loop={true}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper2 h-[400px] bg-fixed "
    >
      <SwiperSlide className=" m-3">
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
            src="https://cdn.shopify.com/s/files/1/0580/2668/8535/files/banner-home.png?v=1679217256"
            alt=""
            className="w-96 rounded-2xl shadow-2xl h-96"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide className=" m-3">
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
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;

// https://cdn.shopify.com/s/files/1/0580/2668/8535/files/Untiasatled-1.jpg?v=1659091752
