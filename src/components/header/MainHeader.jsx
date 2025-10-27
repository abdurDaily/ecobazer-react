import React from "react";
import { Link, NavLink } from "react-router";
import PrimaryMenus from "../../utils/PrimaryMenus";
import { PiPhoneCall } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { RiMenu2Line } from "react-icons/ri";

const MainHeader = ({ searchValue,openSidebar }) => {
  return (
    <nav className="shadow ">
      <div className="container px-5 py-3 lg:py-0">
        <div className="grid lg:grid-cols-5 grid-cols-6 items-center ">
          <div className="menus col-span-2 hidden lg:block">
            <PrimaryMenus />
          </div>

          <div onClick={openSidebar} className="menu lg:hidden  col-span-2 text-xl cursor-pointer">
            <RiMenu2Line />
          </div>

          <div className="logo flex justify-center col-span-2 lg:col-span-1">
            <Link to="/">
              {" "}
              <img src="/images/logo.png" alt="" />{" "}
            </Link>
          </div>


          <div className="links col-span-2 flex justify-end gap-[40px]">
            <div className="hidden lg:block">
              <a className="flex items-center gap-1" href="tel:0123">
                <span className="text-2xl text-gray-scale-gray--500">
                  <PiPhoneCall />
                </span>
                <span className="text-gray-scale-gray--500 text-[14px]">
                  (219) 555-0114
                </span>
              </a>
            </div>
            <ul className="flex items-center gap-4">
              <li className="inline-flex">
                <button onClick={searchValue} className=" text-[25px]">
                  <IoSearchOutline />
                </button>
              </li>
              <li className="hidden lg:block">
                <a href="" className=" text-[25px]">
                  <IoIosHeartEmpty />
                </a>
              </li>
              <li>
                <a href="" className=" text-[25px] relative">
                  <HiOutlineShoppingBag />
                  <div className="absolute counter w-[18px] -right-[5px] -top-[5px] h-[18px] bg-branding-success-dark flex items-center justify-center rounded-full text-white">
                    <span className="text-[10px]">0</span>
                  </div>
                </a>
              </li>
              <li className="hidden lg:block">
                <a href="" className=" text-[25px]">
                  <CiUser />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
