import React from "react";
// import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "animate.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import { HashLink as Link } from "react-router-hash-link";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
function Home() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  const storeData = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Success",
      text: "Data Submitted,I will replay very soon. ",
      icon: "success",
      confirmButtonText: "Okay",
    }).then(() => {
      window.location = "/";
    });
  };

  // console.log(scrollY);
  return (
    <div>
      <div id="hero">
        <Nav />
      </div>
      <div className="fixed bottom-3 right-2 w-10 h-10 border rounded-md bg-[#F97316]">
        <Link to="#hero">
          <i className="ri-arrow-up-double-line text-4xl"></i>
        </Link>
      </div>

      {/* Hero section */}
      <div className="p-24 flex flex-col-reverse xl:flex-row bg-slate-300  xl:justify-around items-center mb-6 gap-7">
        <div className="flex flex-col gap-4 pl-5 animate__animated animate__slideInLeft ">
          <h1 className="font-semibold text-6xl text-gray-600">
            Lets <br />{" "}
            <span className="text-orange-500 font-bold"> E-learning </span>{" "}
            <br />
            at your home
          </h1>
          <p className="text-sm text-gray-600 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Quaerat fugiat et aperiam aspernatur tenetur, <br />
            sapiente culpa animi. Alias numquam culpa facilis dolorem?
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 duration-300 py-2 px-4 rounded text-white text-lg">
              Read More
            </button>
            <button className="border-2 border-orange-500 hover:bg-transparent hover:text-black duration-300 bg-gray-800 py-2 px-6 rounded text-white text-lg">
              Sign Up
            </button>
          </div>
        </div>
        <img
          src="./images/carousel-1.jpg"
          alt="image"
          className="w-[900px] xl:w-[700px] rounded animate__animated animate__fadeIn"
        />
      </div>

      {/* About us */}
      <div className=" py-20 flex justify-around gap-8 w-10/12 mx-auto">
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

      {/* Courses */}
      <div className="w-10/12 flex mx-auto gap-2 flex-col items-center py-20">
        <h2 className="font-semibold text-orange-600 text-[30px] uppercase ">
          Courses
        </h2>
        <h3 className="text-center text-slate-600 text-[40px] mb-5">
          Explore Top Courses
        </h3>
        <div className="flex gap-4 flex-wrap">
          {courses.map((course, index) => {
            return (
              <div
                className="w-[300px] h-[200px]  bg-black relative overflow-hidden rounded-md group"
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

      {/* Contact - Us */}

      <div
        className="w-4/12 mx-auto text-center border-2 border-orange-500 text-white rounded-md px-28 py-7 m-10 bg-[#EA580C] 
      hover:bg-transparent hover:text-black duration-300 animate__animated animate__zoomIn"
      >
        <h1 className="font-semibold  text-4xl">Contact Us</h1>
      </div>
      <div className="p-10 flex gap-x-5">
        <img
          src="./images/contact-us.svg"
          alt=""
          width="50%"
          className="move"
        />
        <div className="w-6/12 bg-[#EA580C] rounded-md">
          <form className="flex flex-col" onSubmit={storeData}>
            <div className="flex flex-col gap-2 py-3 px-4">
              <label className="text-white font-semibold">FullName</label>
              <input
                className="border border-white p-4 rounded-md"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
                placeholder="Enter FullName Here"
                name="fullname"
              />
            </div>

            <div className="flex flex-col gap-2 py-3 px-4">
              <label className="text-white font-semibold">Email</label>
              <input
                className="border border-white p-4 rounded-md"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                placeholder="Enter Email"
                name="email"
              />
            </div>

            <div className="flex flex-col gap-2 py-3 px-4">
              <label className="text-white font-semibold">Phone No</label>
              <input
                className="border border-white p-4 rounded-md"
                onChange={(e) => {
                  setPhoneNo(e.target.value);
                }}
                required
                placeholder="Enter FullName Here"
                name="fullname"
              />
            </div>

            <div className="flex flex-col gap-2 py-3 px-4">
              <label className="text-white font-semibold">Message</label>
              <textarea
                className="border border-white p-4 rounded-md"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
                placeholder="Enter message Here"
                name="message"
                rows={4}
              />
            </div>

            <div className="flex flex-col gap-2 py-3 px-4">
              <button
                type="submit"
                className="w-fit bg-white py-1 px-4 text-[#EA580C] font-bold text-xl rounded-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Gamification */}
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
            <button
              className="bg-orange-500 px-2 py-3 text-white text-2xl font-semibold rounded-lg"
              onClick={() => navigate("/flexgame")}
            >
              Play Now
            </button>
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

      {/* Instructor */}

      <div className="p-10">
        <div
          className="w-4/12 mx-auto text-center text-black rounded-md px-28 py-7 m-10 bg-transparent border-2 border-orange-500 
        hover:bg-orange-500 hover:text-white duration-300 animate__animated animate__zoomIn"
        >
          <h1 className="font-semibold text-4xl">Instructor</h1>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-6/12 mx-auto border rounded-md"
        >
          <SwiperSlide className="flex gap-4 p-6 rounded-md">
            <div className="flex ">
              <img
                src="./images/teacher-1.jpg"
                alt="teacher1"
                className="w-[250px] "
              />
              <div className="flex flex-col gap-3 w-full p-4">
                <h1 className="border-2 font-bold text-2xl rounded-lg p-2 text-orange-600">
                  Rakesh Pande
                </h1>
                <p className="text-md rounded-lg ">
                  M.Tech (Gujarat Tecnological University)
                </p>
                <p className=" -mt-3 text-sm rounded-lg italic">Web Deginer</p>
                <p className=" -mt-2 text-sm rounded-lg italic">
                  +91 7895653683
                </p>

                <div className="space-y-3">
                  <h2 className="border-2 font-bold text-2xl rounded-lg p-2 text-orange-600">
                    Introduction
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum, laborum? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Id, accusamus.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex gap-4 p-6 rounded-md">
            <div className="flex ">
              <img
                src="./images/teacher-4.webp"
                alt="teacher2"
                className="w-[250px] "
              />
              <div className="flex flex-col gap-3 w-full p-4">
                <h1 className="border-2 font-bold text-2xl rounded-lg p-2 text-orange-600">
                  Prakash Gujjar
                </h1>
                <p className="text-md rounded-lg ">
                  B.Tech (Gujarat Tecnological University)
                </p>
                <p className=" -mt-3 text-sm rounded-lg italic">
                  Software Engineer
                </p>
                <p className=" -mt-2 text-sm rounded-lg italic">
                  +91 7892457683
                </p>

                <div className="space-y-3">
                  <h2 className="border-2 font-bold text-2xl rounded-lg p-2 text-orange-600">
                    Introduction
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum, laborum? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Id, accusamus.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex gap-4  p-6 rounded-md">
            <div className="flex ">
              <img
                src="./images/teacher-3.jpg"
                alt="teacher3"
                className="w-[250px] "
              />
              <div className="flex flex-col gap-3 w-full p-4">
                <h1 className="border-2 font-bold text-2xl rounded-lg p-2 text-orange-600">
                  Sunil Sharma
                </h1>
                <p className="text-md rounded-lg ">
                  P.hd (Mumbai Tecnological University)
                </p>
                <p className=" -mt-3 text-sm rounded-lg italic">
                  Robotics Engineer
                </p>
                <p className=" -mt-2 text-sm rounded-lg italic">
                  +91 7895367897
                </p>

                <div className="space-y-3">
                  <h2 className="border-2 font-bold text-2xl rounded-lg p-2 text-orange-600">
                    Introduction
                  </h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolorum, laborum? Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Id, accusamus.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
