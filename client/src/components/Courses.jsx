import React from "react";
import Nav from "./Nav";
import "animate.css";
import { HashLink as Link } from "react-router-hash-link";
import Footer from "./Footer";

const courses = [
  {
    image: "./images/cat-1.jpg",
    courseName: "Web Design",
  },
  {
    image: "./images/cat-2.jpg",
    courseName: "Development",
  },
  {
    image: "./images/cat-3.jpg",
    courseName: "Game Design",
  },
  {
    image: "./images/cat-4.jpg",
    courseName: "App Design",
  },
  {
    image: "./images/cat-5.jpg",
    courseName: "Marketing",
  },
  {
    image: "./images/cat-6.jpg",
    courseName: "Research",
  },
  {
    image: "./images/cat-7.jpg",
    courseName: "Content Writing",
  },
  {
    image: "./images/cat-8.jpg",
    courseName: "Games",
  },
];
function Courses() {
  return (
    <div>
      <div className="fixed bottom-3 right-2 w-10 h-10 border rounded-md bg-[#F97316]">
        <Link to="#hero">
          <i className="ri-arrow-up-double-line text-4xl"></i>
        </Link>
      </div>
      <div id="hero">
        <Nav />
      </div>

      <div
        className="md:w-6/12 w-7/12 mx-auto text-center border-2 border-orange-500 text-white rounded-md md:px-28 md:py-7 px-10 py-3 m-10 bg-[#EA580C] 
      hover:bg-transparent hover:text-black duration-300 animate__animated animate__zoomIn"
      >
        <h1 className="font-semibold  md:text-4xl text-xl">Courses</h1>
      </div>

      <div className="w-10/12 flex mx-auto gap-2 flex-col items-center py-20 ">
        <h2 className="font-semibold text-orange-600 text-[30px] uppercase ">
          Courses
        </h2>
        <h3 className="text-center text-slate-600 text-[40px] mb-5">
          Explore Top Courses
        </h3>
        <div className="flex md:gap-4 md:flex-wrap md:justify-center max-[800px]:flex-col">
          {courses.map((course, index) => {
            return (
              <div
                className="md:w-[300px] md:h-[200px] max-[800px]:w-[450px] max-[800px]:h-[300px] mb-3 bg-black relative overflow-hidden rounded-md group"
                key={index}
              >
                <img
                  src={course.image}
                  alt="cat-1"
                  className="w-full h-full opacity-40 group-hover:scale-125  duration-500"
                />
                <h1
                  className="absolute top-[50%] left-[50%] -rotate-12 rounded border w-full p-2 text-center -translate-y-1/2 -translate-x-1/2
                 text-white font-semibold text-2xl hover:text-orange-500 duration-300"
                >
                  {course.courseName}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Courses;
