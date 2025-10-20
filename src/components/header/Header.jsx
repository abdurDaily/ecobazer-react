import React from "react";
import { CiLocationOn } from "react-icons/ci";
import Dropdown from "../../utils/Dropdown";

let dropdown = [
    { value: 'Ban', title: 'Ban' },
    { value: 'Eng', title: 'Eng' }
];
let dropdown_2 = [
    { value: 'Ban', title: 'Ban 2' },
    { value: 'Eng', title: 'Eng 2' },
    { value: 'Eng', title: 'Eng 2' }
];

const Header = () => {
  return (
    <div className="bg-gren-gray-scale-50">
      <div className="container grid grid-cols-2">


        <div className="flex items-center gap-2 text-gren-gray-scale-700 text-[12px] p-[12px] font-normal">
          {" "}
          <span>
            <CiLocationOn />
          </span>{" "}
          <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>{" "}
        </div>


        <div className="flex justify-end">
            <Dropdown dropdown={dropdown} />
            <Dropdown dropdown={dropdown_2} />
        </div>


      </div>
    </div>
  );
};

export default Header;
