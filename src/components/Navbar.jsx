import React, { useEffect } from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { IoCreateOutline } from "react-icons/io5";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../reduxStore/slices/appSlice";

const Navbar = () => {
  const myprofile = useSelector((state) => state.app.myprofile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-between bg-white w-full py-2 px-10 shadow-md">
      <div className="flex items-center justify-center gap-5">
        <Logo />
        <div className="bg-gray-300 rounded-lg p-2">
          <SearchBox />
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <Link
          to={"/create"}
          className="flex items-center justify-center gap-2 cursor-pointer text-blue-500 hover:text-blue-700"
        >
          <h3>Write</h3>
          <IoCreateOutline />
        </Link>
        <div className="cursor-pointer text-gray-600 hover:text-gray-800">
          <BsBell />
        </div>
        <Link to={`/profile/${myprofile?._id}`} className="cursor-pointer">
          <img
            src={myprofile?.avatar?.url || 'https://images.unsplash.com/photo-1611162619969-50b02487f71b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            className="rounded-full w-8 h-8"
            alt="Profile"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
