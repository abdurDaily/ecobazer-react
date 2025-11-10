import React from "react";
import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
const Slider = () => {
  return (
    <div>
      <div className="container py-10 ">
        <div className="lg:grid grid-cols-2 items-center">
          <div>
            <img className="lg:w-[90%]" src="/public/images/image.png" alt="" />
          </div>
          <div className="text-center lg:text-left">
            <h5 className="font-[500] tracking-[0.02em] uppercase text-[14px] leading-[100%] text-branding-success">
              Welcome to shopery
            </h5>
            <h1 className="font-[600] text-[40px] lg:text-[62px] leading-[120%] text--gray-scale-gray--900">
              Fresh & Healthy Organic Food
            </h1>
            <h4 className="font-[400] text-[20px] lg:text-[30px] leading-[120%] text-gray-scale-gray--900 pt-5">
              Sale up to{" "}
              <span className="text-branding-warning font-[600]">30% OFF</span>{" "}
            </h4>
            <p className="font-[400] text-[14px] leading-[150%] text-gray-scale-gray--500 pb-5">
              Free shipping on all your order. we deliver, you enjoy
            </p>
            <Link className="bg-branding-success py-[16px] px-[40px] inline-flex items-center gap-3 rounded-[53px] text-white hover:bg-transparent hover:border transition duration-300 hover:border-green-400 hover:text-branding-success">
              Shop now{" "}
              <span>
                <FaArrowRightLong />
              </span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
