import React from "react";
import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import ProductCart from "../../utils/ProductCart";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const Product = () => {
  return (
    <div id="product">
      <div className="container py-[50px]">
        <div className="header text-center p-3 lg:p-0 lg:flex lg:justify-between items-center">
          <h4 className="font-[600] text-[40px] text-gray-scale-gray--900 leading-[120%]">
            Featured Products
          </h4>
          <div className="flex justify-center mt-5 lg:mt-0">
            <Link
              to=""
              className="font-[500]  flex items-center gap-3 text-branding-success leading-[150%] text-[16px]"
            >
              View All{" "}
              <span>
                <IoArrowForward />
              </span>{" "}
            </Link>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide className="py-5">
            <div className=" p-5 lg:p-0  grid-cols-4 lg:mt-[40px] hover:cursor-pointer ">
              <ProductCart />
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <div className=" p-5 lg:p-0  grid-cols-4 lg:mt-[40px] hover:cursor-pointer ">
              <ProductCart />
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <div className=" p-5 lg:p-0  grid-cols-4 lg:mt-[40px] hover:cursor-pointer ">
              <ProductCart />
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <div className=" p-5 lg:p-0  grid-cols-4 lg:mt-[40px] hover:cursor-pointer ">
              <ProductCart />
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-5">
            <div className=" p-5 lg:p-0  grid-cols-4 lg:mt-[40px] hover:cursor-pointer ">
              <ProductCart />
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-5"> 
            <div className=" p-5 lg:p-0  grid-cols-4 lg:mt-[40px] hover:cursor-pointer ">
              <ProductCart />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
