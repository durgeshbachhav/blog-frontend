import React, { useEffect } from "react";
import FeedData from "./FeedData";
import UserFeed from "./UserFeed";
import Topbar from "./Topbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../reduxStore/slices/BlogSlice";

const Feed = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { myprofile } = useSelector((state) => state.app);
  const filteredBlogs = blogs.filter(
    (blog) => myprofile?._id !== blog?.author?._id
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);
  return (
    <div
      style={{ width: "100%", maxHeight: "100vh" }}
      className="flex items-start justify-evenly mt-10"
    >
      <div
        style={{ width: "70%", height: "100vh" }}
        className=" overflow-x-auto scrollable-container scroll-smooth mt-10 "
      >
        <div className="py-1 rounded-md">
          <Topbar />
        </div>
        <div>
          {filteredBlogs &&
            filteredBlogs.map((blog, index) => (
              <FeedData blog={blog} key={index} />
            ))}
        </div>
      </div>
      <div style={{ width: "30%", height: "100vh" }} className="">
        <UserFeed />
      </div>
    </div>
  );
};

export default Feed;
