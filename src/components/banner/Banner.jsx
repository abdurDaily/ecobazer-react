import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Slider from "../../utils/Slider";
import { Navigation, Autoplay} from "swiper/modules";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
      loop={true}
      autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".next_btn",
          prevEl: '.prev_btn'
        }}
        pagination={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="banner_bg_img">
          <Slider />
        </SwiperSlide>
        <SwiperSlide className="banner_bg_img">
          <Slider />
        </SwiperSlide>

        <div className="next_btn hidden lg:flex !z-50 right-10 w-[45px] h-[45px] rounded-full top-[50%] absolute  bg-white  items-center justify-center cursor-pointer leading-4">
          {" "}
          <FaArrowRightLong />
        </div>
        <div className="prev_btn hidden lg:flex !z-50 left-10 w-[45px] h-[45px] rounded-full top-[50%] absolute  bg-white  items-center justify-center cursor-pointer leading-4">
          {" "}
          <FaArrowLeftLong />

        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
