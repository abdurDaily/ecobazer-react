import React from "react";
import { Link } from "react-router";
import { IoArrowForward } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
const ProductCart = () => {
  return (
    <div>


      <div className="card mb-5 py-5 rounded-[8px] relative border border-gray-scale-gray--100 group hover:border hover:border-[#2C742F] hover:shadow-[0_0_12px_0_rgba(32,_181,_38,_0.32)]">
        <div className="flex justify-center">
          <img src="/images/product.png" alt="" />
        </div>

        <div className="contents flex justify-between p-[16px] items-center">
          <div>
            <h4 className="font-[400] text-[14px] leading-[150%] text-gray-scale-gray--700">
              Green Apple
            </h4>
            <b className="font-[600] text-[16px] leading-[150%] text-gray-scale-gray--900">
              $14.99{" "}
            </b>{" "}
            <del className="font-[400] text-[16px] leading-[150%] text-gray-scale-gray--400">
              $20.99
            </del>
            <div className="icons flex mt-[6px] text-[12px] gap-1 text-[#FF8A00]">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStarHalfAlt />
              </span>
            </div>
          </div>

          <div className="w-[40px] h-[40px] bg-[#F2F2F2] rounded-full flex items-center justify-center group-hover:bg-[#00B207] group-hover:text-[#fff]">
            <span>
              <BsHandbag />
            </span>
          </div>
        </div>

        <div className="offer right-[13%] transition-all invisible opacity-0 group-hover:opacity-100 group-hover:visible duration-500  z-2 top-[20px]  absolute group-hover:right-[20px]">
          <span className="bg-white hover:outline outline-[#2C742F] hover:text-[#2C742F] text-[#1A1A1A] w-[40px] mb-3 h-[40px] border border-[#F2F2F2] flex items-center justify-center rounded-full ">
            <FaEye />
          </span>
          <span className="bg-white hover:outline outline-[#2C742F] hover:text-[#2C742F] text-[#1A1A1A] w-[40px] mb-3 h-[40px] border border-[#F2F2F2] flex items-center justify-center rounded-full ">
            <FaEye />
          </span>
        </div>

        <div className="is_stock bg-[#EA4B48] text-white py-[3px] px-[8px] rounded-[4px] absolute left-[16px] top-[16px]">
          <span>Sale 50%</span>
        </div>
      </div>


    </div>
  );
};

export default ProductCart;
