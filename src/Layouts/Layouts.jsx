import React from "react";
import "./Layout.css";
import Header from "../components/Header/Header";
import Hero from "../components/HeroPage/Hero";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div className="Layout-Body">
      <Header />
      <Hero />
      <div className="outlets">
        <Outlet />
      </div>
    </div>
  );
};

export default Layouts;
