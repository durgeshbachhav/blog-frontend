import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative flex flex-col gap-16 ">
      <div className="fixed top-0 w-full">
        <Navbar />
        <hr className="" />
      </div>
      <div style={{ width: "80%" }} className="mx-auto ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
