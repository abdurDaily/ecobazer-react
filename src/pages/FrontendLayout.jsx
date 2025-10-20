import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";
import MainHeader from "../components/header/MainHeader";
import Search from "../utils/Search";

const FrontendLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <MainHeader />
      </header>

      <main>
        <Search />
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default FrontendLayout;
