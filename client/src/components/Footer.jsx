import React from "react";
import { Link } from "react-router-dom";
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

const courses = [
  {
    courseName: "Html",
    courseLink: "/courses",
  },
  {
    courseName: "Javascript",
    courseLink: "/courses",
  },
  {
    courseName: "React JS",
    courseLink: "/courses",
  },
  {
    courseName: "Node Js",
    courseLink: "/courses",
  },
  {
    courseName: "Git & GitHub",
    courseLink: "/courses",
  },
  {
    courseName: "MongoDb",
    courseLink: "/courses",
  },
];

function Footer() {
  return (
    <footer className="bg-[#F7F7F8] px-24 py-8 flex flex-col">
      <div className="flex flex-wrap gap-12">
        <div className="space-y-5 w-[400px]">
          <div>
            <h2 className="text-2xl text-orange-600 font-semibold">
              Field Master
            </h2>

            <p className="text-zinc-600 mt-4">
              Field Master is a type of online education, training, gamification
              and knowledge sharing that is conducted over the internet.
            </p>
          </div>
          <div className="flex gap-2 text-gray-500">
            <i className="ri-map-pin-line"></i>
            <address>
              4H4V+F63, Nigam Nagar, Chandkheda, Ahmedabad, Gujarat 382424
            </address>
          </div>
          <div className="flex gap-2 text-gray-500">
            <i className="ri-mail-send-line"></i>
            <p>example@email.com</p>
          </div>
          <div className="flex gap-2 text-gray-500">
            <i className="ri-phone-line"></i>
            <p>+91 123 4567890</p>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="text-xl font-semibold text-orange-500">Company</h4>
          <ul className="mt-4 space-y-4">
            {navigations.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="hover:text-orange-600 text-gray-500 text-md duration-300"
                  >
                    {item.linkName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex-1">
          <h4 className="text-xl font-semibold text-orange-500">Courses</h4>
          <ul className="mt-4 space-y-4">
            {courses.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.courseLink}
                    className="hover:text-orange-600 text-gray-500 text-md duration-300"
                  >
                    {item.courseName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-semibold text-orange-500">Newsletter</h4>

          <div>
            <p className="text-gray-500 mb-1">Subscribe to get in touch.</p>
            <form className="relative w-[350px]">
              <input
                name="email"
                type="email"
                required
                className="border w-full p-2.5 rounded"
                placeholder="Enter Email"
              />
              <button
                className="absolute top-0 right-0 p-2.5 px-4"
                type="submit"
              >
                <i className="ri-send-plane-fill"></i>
              </button>
            </form>
          </div>

          <div className="flex gap-2 items-center">
            <Link
              to="#"
              className="border bg-white block px-2.5 py-1.5 rounded hover:bg-orange-500 hover:text-white duration-300"
            >
              <i className="ri-facebook-line"></i>
            </Link>
            <Link
              to="#"
              className="border bg-white px-2.5 py-1.5 rounded hover:bg-orange-500 hover:text-white duration-300"
            >
              <i className="ri-twitter-x-line"></i>
            </Link>
            <Link
              to="#"
              className="border bg-white px-2.5 py-1.5 rounded hover:bg-orange-500 hover:text-white duration-300"
            >
              <i className="ri-linkedin-line"></i>
            </Link>
            <Link
              to="#"
              className="border bg-white px-2.5 py-1.5 rounded hover:bg-orange-500 hover:text-white duration-300"
            >
              <i className="ri-instagram-line"></i>
            </Link>
          </div>
        </div>
      </div>

      <hr className="mt-8 mb-4" />
      <div className="flex justify-center">
        <p>© 2024 Field Master, All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
