import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserFeed = () => {
  const { myprofile } = useSelector(state => state.app)
  return (
    <div className=" w-full  flex items-center justify-center mt-14 mx-4 py-4 bg-white rounded-md">
      <Link to={`/profile/${myprofile?._id}`} className="flex flex-col items-start justify-start gap-4">
        <img
          src={myprofile?.avatar?.url || 'https://images.unsplash.com/photo-1611162619969-50b02487f71b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="person-male'}
          className="w-32 h-32 min-w-fit rounded-full"
          alt="User"
        />
        <h4 className="text-lg text-center font-bold">{myprofile?.fullname}</h4>
        <h2 className="bg-black px-4 py-1 rounded-md text-white">{myprofile?.blogs?.length} blogs</h2>
      </Link>
    </div>
  );
};

export default UserFeed;
