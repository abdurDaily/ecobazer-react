import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";

const FrontendLayout = () => {
  return (
    <div>
      <header><Header /></header>

      <main>
        <Outlet />
      </main>

      <footer><Footer /></footer>
    </div>
  );
};

export default FrontendLayout;
