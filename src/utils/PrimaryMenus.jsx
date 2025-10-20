import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { Link, NavLink } from 'react-router';
const PrimaryMenus = () => {

   let menus = [
        { id: 1, title: "Home", path: '/' },
        { id: 2, title: "About", path: '/about' },
        { id: 3, title: "Contact", path: '/contact',
            subMenu: [
                { id: 1, title: "Sub Menu 1", path: '/sub-menu-01' },
            ]
         },
        { id: 4, title: "Shop", path: '/shop',
            subMenu: [
                { id: 1, title: "Sub Menu 1", path: '/sub-menu-01' },
                { id: 2, title: "Sub Menu 2", path: '/sub-menu-02' },
            ]
        },
   ]

    return (
        <div>
             <ul className='flex gap-4'>
                {
                    menus.map((menu,index)=>{
                        return(
                             <li className='relative group' key={index}>
                                <NavLink className='flex  py-[20px] items-center gap-1 text-[14px] text-gray-scale-gray--500'> {menu.title} {menu.subMenu && <span><IoIosArrowDown /></span>} </NavLink>                        
                                {
                                    menu.subMenu && (
                                        <ul className='bg-white group-hover:mt-[0] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-branding-success/10 mt-[50px] shadow-lg absolute left-0 w-[150px] '>
                                           {
                                            menu.subMenu.map((sumMenu, index)=>{
                                                return(
                                                    <li key={index}> <NavLink className="py-3 px-5 inline-block text-[14px] text-gray-scale-gray--500 capitalize hover:text-branding-success hover:ml-[10px] transition-all duration-200"> {sumMenu.title} </NavLink> </li>
                                                )
                                            })
                                           }
                                           
                                        </ul>
                                    )
                                }
                             </li>
                        )
                    })
                }
               
              </ul>
        </div>
    );
};

export default PrimaryMenus;