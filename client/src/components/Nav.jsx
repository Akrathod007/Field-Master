import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "../App.css";

const navigations = [
  {
    linkName: "Home",
    href: "/",
  },
  {
    linkName: "About Us",
    href: "/about-us",
  },
  {
    linkName: "Courses",
    href: "/courses",
  },
  {
    linkName: "Gamification",
    href: "/games",
  },
  {
    linkName: "Contact",
    href: "/contact-us",
  },
];
function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="justify-between items-center py-6 px-8 bg-black min-[830px]:hidden max-[830px]:flex">
        <h2 className="text-2xl text-orange-600 font-semibold">Field Master</h2>
        <i className="ri-menu-fill text-white"></i>
      </div>
      <div className="flex justify-between items-center py-6 px-8 bg-black min-[830px]:flex max-[830px]:hidden">
        <h2 className="text-2xl text-orange-600 font-semibold">Field Master</h2>
        <ul className="flex text-white gap-x-6">
          {navigations.map((item, index) => {
            return (
              <li key={index} className="hover:text-orange-600 duration-300">
                <Link to={item.href}>{item.linkName}</Link>
              </li>
            );
          })}
        </ul>
        <div className="space-x-3">
          <button
            className="bg-orange-500 hover:bg-orange-600 duration-300 py-2 px-4 rounded text-white"
            onClick={() => navigate("/registration")}
          >
            Registration
          </button>
          <button
            className="border-2 hover:border-pink-500 hover:bg-transparent duration-300 bg-pink-500 py-2 px-4 rounded text-white"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
