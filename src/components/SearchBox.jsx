import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'

const SearchBox = () => {
  return (
    <div className="flex items-center justify-center gap-2 py-1 px-4 rounded-lg ">
      <div className="cursor-pointer">
      <AiOutlineSearch  />
      </div>
      <input type="text" className="outline-none  rounded-lg bg-gray-300 " placeholder="Search..." />
    </div>
  );
};

export default SearchBox;
