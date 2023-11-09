import React, { useEffect } from "react";
import { FaRegComment } from "react-icons/fa";
import { PiHandWavingBold } from "react-icons/pi";
import { SiPocket } from "react-icons/si";
import { FaShare } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { format as timeAgoFormat } from "timeago.js";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../reduxStore/slices/BlogSlice";

const Blog = () => {
  const { singleBlog } = useSelector((state) => state.blog);
  console.log('singleblog',singleBlog);
  const createdAt = new Date(singleBlog?.createdAt);
  const timeAgoString = timeAgoFormat(createdAt);
  const plaintext = singleBlog?.text;
  const text = plaintext ? plaintext.replace(/<[^>]+>/g, "") : "";

 
  const {blogId}= useParams();
  console.log('blogid',blogId);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBlog(blogId))
  },[dispatch])
  console.log('single blog',singleBlog);

  return (
    <div className="mt-20 bg-white p-4 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold mb-4">{singleBlog?.title}</h1>
      <hr />
      <div className="flex items-center justify-start mb-4 mt-4 gap-3">
        <div className="w">
          <img
            src={singleBlog?.author?.avatar?.url}
            className="w-10 h-10 rounded-full"
            alt=""
          />
        </div>
        <div className="ml-4 flex flex-col gap-2">
          <Link to={`/profile/:userId`} className="flex items-center gap-5">
            <h3 className="font-bold text-black">
              {singleBlog?.author?.fullname}
            </h3>
            <button className="px-6 py-1 bg-blue-500 text-white rounded-md ">Follow</button>
          </Link>
          <div className="flex items-center gap-2">
            <p className="text-gray-500">5 min read</p>
            <p className="bg-gray-300 text-black px-4 py-1 rounded-md">{timeAgoString}</p>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <PiHandWavingBold />
            <p className="text-green-500">234</p>
          </div>
          <div className="flex items-center gap-2">
            <FaRegComment />
            <p className="text-blue-500">234</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <SiPocket />
          <FaShare />
          <FiMoreHorizontal />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex items-center justify-center">
        <img
          src={singleBlog?.image?.url}
          className="min-h-max max-w-sm rounded-md"
          alt=""
        />
      </div>
      <hr className="my-4" />
      <div className="text-gray-700">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Blog;
