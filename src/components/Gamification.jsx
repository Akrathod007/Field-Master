import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Nav from "./Nav";

function Gamification() {
  return (
    <div>
      <div className="fixed bottom-3 right-2 w-10 h-10 border rounded-md bg-[#F97316]">
        <HashLink to="#hero">
          <i className="ri-arrow-up-double-line text-4xl"></i>
        </HashLink>
      </div>
      <div id="hero">
        <Nav />
      </div>

      <div
        className="w-4/12 mx-auto text-center text-black rounded-md px-28 py-7 m-10 bg-transparent border-2 border-orange-500 
        hover:bg-orange-500 hover:text-white duration-300 animate__animated animate__zoomIn"
      >
        <h1 className="font-semibold text-4xl">Gamification</h1>
      </div>
      <div className="m-5 flex flex-col gap-7">
        <div className="w-7/12 border-2 ml-[150px] p-4 flex gap-6 shadow-lg rounded-lg ">
          <img
            src="./images/flex.png"
            alt=""
            className="w-[400px] rounded-md"
          />

          <div className="w-[100%] text-center flex flex-col justify-around">
            <h2
              className="text-center border-2 border-orange-500 p-3 text-2xl rounded-lg 
            hover:scale-105 duration-500"
            >
              Flexbox Game
            </h2>
            <p className="text-md mt-2 border-2 p-5 rounded-lg text-left text-red-700 border-zinc-600">
              The{" "}
              <span className="border-2 mx-1 p-1 bg-pink-700 text-white rounded-sm">
                {" "}
                display: flex{" "}
              </span>{" "}
              property enables the flexbox layout mode, allowing you to
              manipulate elements alignment, spacing, and order within a
              container.
            </p>
            <Link
              className="bg-orange-500 px-2 py-3 text-white text-2xl font-semibold rounded-lg"
              to="/flexgame"
            >
              Play Now
            </Link>
          </div>
        </div>

        <div className="w-7/12 border-2 mx-auto p-4 flex gap-6 shadow-lg rounded-lg ">
          <img
            src="./images/animatecss.png"
            alt=""
            className="w-[400px] rounded-md"
          />

          <div className="w-[100%] text-center flex flex-col justify-around">
            <h2
              className="text-center border-2 border-orange-500 p-3 text-2xl rounded-lg 
            hover:scale-105 duration-500"
            >
              AnimateCss Game
            </h2>
            <p className="text-md mt-2 border-2 p-5 rounded-lg text-left text-red-700 border-zinc-600">
              The
              <span className="border-2 mx-1 p-1 bg-pink-700 text-white rounded-sm">
                Animation
              </span>
              will gradually change from the current style to the new style at
              certain times.
            </p>
            <Link
              className="bg-orange-500 px-2 py-3 text-white text-2xl font-semibold rounded-lg"
              to="https://animate-style.vercel.app"
            >
              Play Now
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Gamification;
