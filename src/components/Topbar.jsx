import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaUser, FaCode } from "react-icons/fa";

const categories = [
  { to: "/following", icon: <FaHeart />, text: "Following" },
  { to: "/freelancing", icon: <FaUser />, text: "Freelancing" },
  { to: "/java", icon: <FaCode />, text: "Java" },
  { to: "/ui", icon: <FaCode />, text: "UI" },
  { to: "/nodejs", icon: <FaCode />, text: "Node.js" },
  { to: "/ux-design", icon: <FaCode />, text: "UX Design" },
  { to: "/social-media", icon: <FaUser />, text: "Social Media" },
  { to: "/ux", icon: <FaUser />, text: "UX" },
  {
    to: "/software-engineering",
    icon: <FaCode />,
    text: "Software Engineering",
  },
  { to: "/design", icon: <FaCode />, text: "Design" },
  { to: "/writing", icon: <FaCode />, text: "Writing" },
];

const Topbar = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleCategories = showMore ? categories : categories.slice(0, 5);

  return (
    <div className="bg-white py-2 px-10 flex justify-center items-center space-x-4 overflow-x-auto scrollbar-hidden rounded-md">
      {visibleCategories.map((category, index) => (
        <Link
          key={index}
          to={category.to}
          className="text-gray-500 flex items-center whitespace-nowrap justify-center gap-2 hover:text-black"
        >
          {category.icon} {category.text}
        </Link>
      ))}

      {categories.length > 5 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className=" flex items-center justify-center bg-black text-white px-4 py-1 gap-2 whitespace-nowrap hover:text-black hover:bg-gray-200 outline-none rounded-md"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default Topbar;
