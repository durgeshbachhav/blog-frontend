import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { format as timeAgoFormat } from "timeago.js";
import { useDispatch, useSelector } from "react-redux";

const FeedData = ({ blog }) => {
  console.log("blog", blog);
  const userprofile = useSelector((state) => state.user.userprofile);
  console.log("userprofile", userprofile);
  const checkUser = userprofile?._id === blog?.author;
  console.log("checkuser", checkUser);

  const createdAt = new Date(blog?.createdAt);
  const timeAgoString = timeAgoFormat(createdAt);
  const plaintext = blog?.text;
  const text = plaintext ? plaintext.replace(/<[^>]+>/g, "") : "";

  return (
    <div className="bg-black text-white p-4 mb-4  rounded-lg">
      <Link
        to={`/profile/${blog?.author?._id}`}
        className="flex items-center gap-4"
      >
        {checkUser ? (
          <img
            src={userprofile?.avatar?.url}
            className="w-8 h-8 rounded-full "
            alt="User"
          />
        ) : (
          <img
            src={blog?.author?.avatar?.url}
            className="w-8 h-8 rounded-full"
            alt="User"
          />
        )}

        <div className="flex items-center justify-center gap-2">
          <h2 className="text-lg font-semibold hover:text-blue-500">{
            checkUser ? userprofile?.fullname : blog?.author?.fullname
          }</h2>
        </div>
        <div>
          <p className="text-sm px-2 py-1 text-black rounded-md bg-white">
            {timeAgoString}
          </p>
        </div>
      </Link>
      <Link
        to={`/blog/${blog?._id}`}
        className="flex items-start justify-between mt-4 gap-4 cursor-pointer"
      >
        <div style={{ width: "70%" }}>
          <h2 className="text-xl font-semibold mb-2 hover:text-blue-500">{blog?.title}</h2>
          <p className="limited-text">{text}</p>
        </div>
        <div style={{ width: "30%" }}>
          <img
            src={blog?.image?.url}
            alt="Image"
            className="w-full h-24 object-cover rounded-md"
          />
        </div>
      </Link>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <span className="text-xs bg-white text-black px-4 py-1 rounded-md">
            {blog?.tags}
          </span>
          <span className="text-xs text-gray-200">{`2 min read`}</span>
        </div>
      </div>
    </div>
  );
};

export default FeedData;
