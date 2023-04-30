import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.min.css";
// import "./styles.css";

import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";

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

      <Swiper
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
        <SwiperSlide className="">
          <div className="max-w-md p-6 rounded-md shadow-md dark:bg-white dark:text-black">
            <img
              src="  https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-white dark:text-black"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:bg-white dark:text-black">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="max-w-md p-6 rounded-md shadow-md dark:bg-white dark:text-black">
            <img
              src="  https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-white dark:text-black"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:bg-white dark:text-black">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="max-w-md p-6 rounded-md shadow-md dark:bg-white dark:text-black">
            <img
              src="  https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-white dark:text-black"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:bg-white dark:text-black">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="max-w-md p-6 rounded-md shadow-md dark:bg-white dark:text-black">
            <img
              src="  https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-white dark:text-black"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:bg-white dark:text-black">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="max-w-md p-6 rounded-md shadow-md dark:bg-white dark:text-black">
            <img
              src="  https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-white dark:text-black"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:bg-white dark:text-black">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="max-w-md p-6 rounded-md shadow-md dark:bg-white dark:text-black">
            <img
              src="  https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-white dark:text-black"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:bg-white dark:text-black">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="max-w-md p-6 rounded-md shadow-md dark:bg-white dark:text-black">
            <img
              src="  https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-white dark:text-black"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:bg-white dark:text-black">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="max-w-md p-6 rounded-md shadow-md dark:bg-white dark:text-black">
            <img
              src="  https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-white dark:text-black"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:bg-white dark:text-black">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="max-w-md p-6 rounded-md shadow-md dark:bg-white dark:text-black">
            <img
              src="  https://cdn.shopify.com/s/files/1/0580/2668/8535/products/mangoassortedplatter.jpg?v=1679054665"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-white dark:text-black"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:bg-white dark:text-black">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SeasonalMenuCarousel;
