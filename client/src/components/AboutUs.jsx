import React from "react";
import Nav from "./Nav";
// import { Link } from "react-router-dom";
import "animate.css";
import Footer from "./Footer";
import { HashLink as Link } from "react-router-hash-link";

function AboutUs() {
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
        <h1 className="font-semibold  md:text-4xl text-xl">About Us</h1>
      </div>
      <div className="py-20 flex lg:justify-around flex-col items-center overflow-hidden gap-8 w-10/12 mx-auto">
        <img
          src="./images/study.jpg"
          alt="study"
          width={600}
          className="rounded"
        />
        <div className="flex flex-col gap-4 py-5 ">
          <h2 className="text-orange-600 font-semibold uppercase text-2xl">
            About Us
          </h2>
          <p className="text-[#44425A] font-bold text-[45px]">
            Innovative Way To Learn
          </p>
          <p className="text-gray-600">
            Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita, ipsum
            dolores amet voluptua duo dolores et sit ipsum rebum, sadipscing et
            erat eirmod diam kasd labore clita est. Diam sanctus gubergren sit
            rebum clita amet, sea est sea vero sed et. Sadipscing labore tempor
            at sit dolor clita consetetur diam. Diam ut diam tempor no et, lorem
            dolore invidunt no nonumy stet ea labore, dolor justo et sit
            gubergren diam sed sed no ipsum. Sit tempor ut nonumy elitr dolores
            justo aliquyam ipsum stet
          </p>
          <button className="bg-orange-500 w-fit font-semibold hover:bg-orange-600 duration-300 py-2 px-4 rounded text-white">
            Learn More
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;
