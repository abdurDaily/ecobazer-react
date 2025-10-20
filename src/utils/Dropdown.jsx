import React from "react";

const Dropdown = ({ dropdown }) => {
 

  return (
    <select name="" id="" className="text-[12px] text-gren-gray-scale-700">
      {dropdown
        ? dropdown.map((item, index) => (
            <option key={index} value={item.value}>
              {item.title}
            </option>
          ))
        : ""}
    </select>
  );
};

export default Dropdown;
