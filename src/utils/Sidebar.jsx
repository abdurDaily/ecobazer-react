import React from 'react';
import { MdClose } from "react-icons/md";
import PrimaryMenus from './PrimaryMenus';

const Sidebar = ({sidebarCloseHandler}) => {
    return (
        <div className='bg-black/60 h-[100vh] fixed w-[100%] top-0 left-0 lg:hidden z-10'>
            <div className="bg-white w-[100%] max-w-[320px] h-[100%]">
                <div className="header flex justify-between border-b border-b-green-300 p-4 text-xl">
                    <h4 className='font-bold text-green-500'>Cart Header </h4>
                    <button onClick={sidebarCloseHandler} className='bg-green-400 w-[35px] h-[35px] cursor-pointer rounded-full flex items-center justify-center text-white'><MdClose /></button>
                </div>
                <div className="card-body">
                    <PrimaryMenus />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;