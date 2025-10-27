import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";
import MainHeader from "../components/header/MainHeader";
import Search from "../utils/Search";
import Sidebar from "../utils/Sidebar";

const FrontendLayout = () => {

  let [openSearchBody, setOpenSearchBody] = useState(false);
  let [openSideBar, setOpenSideBar] = useState(false);
  let searchHandler = () => {
    setOpenSearchBody(true)
  }
  let searchCloseHandler = () => {
    setOpenSearchBody(false)
  }


  let sidebarHandler = () => {
    setOpenSideBar(true)
  }
  let sidebarCloseHandler = () => {
    setOpenSideBar(false)
  }






  return (
    <div>
      <header>
        <Header />
        <MainHeader openSidebar={sidebarHandler}  searchValue={searchHandler} />
      </header>

      <main>
        {openSearchBody &&  <Search closeSearch={searchCloseHandler} /> }

        {openSideBar && <Sidebar sidebarCloseHandler={sidebarCloseHandler} />}
     
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default FrontendLayout;
