import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaMedium, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer  className="bg-gray-200 p-4  ">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <div style={{fontFamily:"Agbalumo"}} className="text-2xl font-semibold mb-2">Blogium</div>
          <div style={{fontFamily:"Nunito-Sans"}} className="flex  items-start justify-start gap-3">
            <Link to="/https://www.instagram.com/durgesh.bachhav_" className="flex items-center gap-2">
              <FaInstagram />
              Instagram
            </Link>
            <Link to="/https://medium.com/@bachhavdurgesh123" className="flex items-center gap-2">
              <FaMedium />
              Medium
            </Link>
            <Link to="/facebook" className="flex items-center gap-2">
              <FaFacebook />
              Facebook
            </Link>
            <Link to="/twitter" className="flex items-center gap-2">
              <FaTwitter />
              Twitter
            </Link>
          </div>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} durgeshbachhav. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
