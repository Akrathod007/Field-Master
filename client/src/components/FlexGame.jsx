import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";

function FlexGame() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("");
  const [justify, setJustify] = useState("");
  const [align, setAlign] = useState("");
  const level1 = useRef();
  const level2 = useRef();
  const level3 = useRef();
  const level4 = useRef();
  const level5 = useRef();

  // console.log(flex2);
  const click = (level) => {
    level.current.style.display = display;
    level.current.style.justifyContent = justify;
    level.current.style.alignItems = align;
  };

  const clear = (level) => {
    setDisplay("");
    setJustify("");
    setAlign("");
    level.current.style.display = "";
    level.current.style.justifyContent = "";
    level.current.style.alignItems = "";
  };
  // const flex2 = "flex justify-center";
  return (
    <div className=" mx-auto p-10 min-h-screen border-3 box-border bg-gray-300">
      {/* <h1
        className="border-2 w-[300px] mx-auto text-center p-3 text-4xl font-semibold text-black border-orange-500
      hover:bg-orange-500 hover:text-white duration-500 rounded-md"
      >
        FlexBox Game
      </h1> */}
      <div className="text-center my-3 border-2 w-11/12 mx-auto p-4 border-orange-500 flex justify-between rounded-md">
        <div className="w-[300px] h-[200px] bg-green-300 box-border p-2">
          <h2 className="text-2xl text-orange-500 font-bold uppercase underline">
            flex
          </h2>
          <p className="text-md mt-2 border-2 p-2 text-left text-red-700 border-zinc-600">
            The{" "}
            <span className="border-2 mx-1 p-1 bg-pink-700 text-white rounded-sm">
              {" "}
              display: flex{" "}
            </span>{" "}
            property enables the flexbox layout mode, allowing you to manipulate
            elements alignment, spacing, and order within a container.
          </p>
        </div>
        <div>
          <form
            onSubmit={() => {
              clear();
            }}
          >
            <label>display:</label>
            <input
              type="text"
              className="border w-[200px] ml-2"
              required
              onChange={(e) => setDisplay(e.target.value)}
              value={display}
            />{" "}
            <br />
            <br />
            <label>justify-content:</label>
            <input
              type="text"
              className="border w-[200px] ml-2"
              required
              onChange={(e) => setJustify(e.target.value)}
              value={justify}
            />
            <br />
            <br />
            <label>align-items:</label>
            <input
              type="text"
              className="border w-[200px] ml-2"
              required
              onChange={(e) => setAlign(e.target.value)}
              value={align}
            />{" "}
            <br />
            <br />
            <button
              type="submit"
              onClick={() => {
                navigate("/");
              }}
              className="px-8 py-2.5 ml-3 bg-blue-600 font-semibold text-2xl text-white"
            >
              Home
            </button>
            {/* <button
              type="submit"
              className="px-8 py-2.5 ml-3 bg-pink-600 font-semibold text-2xl text-white"
            >
              Clear
            </button> */}
          </form>
        </div>
        <div className="w-[600px] h-[225px] bg-red-300 p-2 ">
          <p className="text-left text-white font-semibold">
            <span className="text-black font-bold"> justify-content:</span> Is
            used for positioned items horizontal by default. <br />
            <span className="text-black font-bold"> align-items: </span> Is used
            for positioned items vertically by default. <br />
            <span className="text-black font-bold"> flex-start: </span> Items
            align to the left side or top of the container. <br />
            <span className="text-black font-bold"> flex-end: </span> Items
            align to the right side bottom of the container. <br />
            <span className="text-black font-bold"> center: </span> Items align
            at the center of the container. <br />
            <span className="text-black font-bold"> space-between: </span> Items
            display with equal spacing between them. <br />
            <span className="text-black font-bold"> space-around:</span> Items
            display with equal spacing around them. <br />
            <span className="text-black font-bold"> space-evenly:</span> Items
            display with equal spacing between them and the edges of the
            container.
          </p>
        </div>
      </div>

      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div
            ref={level1}
            className="border-2 border-orange-500 h-[400px] relative gap-4 p-2 rounded-lg"
          >
            <div className="w-[100px] h-1 bg-red-500 absolute top-[64%] left-[38.4%] "></div>
            <div className="w-[100px] h-1 bg-blue-500 absolute top-[64%] left-[46.5%] "></div>
            <div className="w-[100px] h-1 bg-green-500 absolute top-[64%] left-[54.7%] "></div>

            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa1.png" alt="santa1" width={100} />
            </div>
            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa2.png" alt="santa2" width={100} />
            </div>
            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa3.png" alt="santa3" width={100} />
            </div>
            <h2 className="text-2xl absolute bottom-2 right-5 border-2 border-orange-500 p-2">
              Level 1
            </h2>
            <button
              type="submit"
              onClick={() => {
                click(level1);
              }}
              className="px-9 py-2.5 bg-orange-600 absolute top-2 right-4 rounded-md font-semibold text-2xl text-white"
            >
              Click
            </button>
            <button
              onClick={() => {
                clear(level1);
              }}
              type="submit"
              className="px-[34px] py-2.5 ml-3 bg-pink-600  absolute top-20 right-4 rounded-md font-semibold text-2xl text-white"
            >
              Clear
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            ref={level2}
            className="border-2 border-orange-500 h-[400px] relative gap-4 p-2 rounded-lg"
          >
            <div className="w-[100px] h-1 bg-red-500 absolute top-[64%] left-[13.2%] "></div>
            <div className="w-[100px] h-1 bg-blue-500 absolute top-[64%] left-[46.5%] "></div>
            <div className="w-[100px] h-1 bg-green-500 absolute top-[64%] right-[13.2%] "></div>

            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa1.png" alt="santa1" width={100} />
            </div>
            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa2.png" alt="santa2" width={100} />
            </div>
            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa3.png" alt="santa3" width={100} />
            </div>

            <h2 className="text-2xl absolute bottom-2 right-5 border-2 border-orange-500 p-2">
              Level 2
            </h2>
            <button
              type="submit"
              onClick={() => {
                click(level2);
              }}
              className="px-9 py-2.5 bg-orange-600 absolute top-2 right-4 rounded-md font-semibold text-2xl text-white"
            >
              Click
            </button>
            <button
              onClick={() => {
                clear(level2);
              }}
              type="submit"
              className="px-[34px] py-2.5 ml-3 bg-pink-600  absolute top-20 right-4 rounded-md font-semibold text-2xl text-white"
            >
              Clear
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            ref={level3}
            className="border-2 border-orange-500 h-[400px] relative gap-4 p-2 rounded-lg"
          >
            <div className="w-[100px] h-1 bg-red-500 absolute top-[28%] left-[19.4%] "></div>
            <div className="w-[100px] h-1 bg-blue-500 absolute top-[28%] left-[46.5%] "></div>
            <div className="w-[100px] h-1 bg-green-500 absolute top-[28%] right-[19.4%] "></div>

            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa1.png" alt="santa1" width={100} />
            </div>
            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa2.png" alt="santa2" width={100} />
            </div>
            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa3.png" alt="santa3" width={100} />
            </div>

            <h2 className="text-2xl absolute bottom-2 right-5 border-2 border-orange-500 p-2">
              Level 3
            </h2>
            <button
              type="submit"
              onClick={() => {
                click(level3);
              }}
              className="px-9 py-2.5 bg-orange-600 absolute top-2 right-4 rounded-md font-semibold text-2xl text-white"
            >
              Click
            </button>
            <button
              onClick={() => {
                clear(level3);
              }}
              type="submit"
              className="px-[34px] py-2.5 ml-3 bg-pink-600  absolute top-20 right-4 rounded-md font-semibold text-2xl text-white"
            >
              Clear
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            ref={level4}
            className="border-2 border-orange-500 h-[400px] relative gap-4 p-2 rounded-lg"
          >
            <div className="w-[100px] h-1 bg-red-500 absolute top-[98.2%] left-[0.6%] "></div>
            <div className="w-[100px] h-1 bg-blue-500 absolute top-[98.2%] left-[8.6%] "></div>
            <div className="w-[100px] h-1 bg-green-500 absolute top-[98.2%] left-[16.7%] "></div>

            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa1.png" alt="santa1" width={100} />
            </div>
            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa2.png" alt="santa2" width={100} />
            </div>
            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa3.png" alt="santa3" width={100} />
            </div>

            <h2 className="text-2xl absolute bottom-2 right-5 border-2 border-orange-500 p-2">
              Level 4
            </h2>
            <button
              type="submit"
              onClick={() => {
                click(level4);
              }}
              className="px-9 py-2.5 bg-orange-600 absolute top-2 right-4 rounded-md font-semibold text-2xl text-white"
            >
              Click
            </button>
            <button
              onClick={() => {
                clear(level4);
              }}
              type="submit"
              className="px-[34px] py-2.5 ml-3 bg-pink-600  absolute top-20 right-4 rounded-md font-semibold text-2xl text-white"
            >
              Clear
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            ref={level5}
            className="border-2 border-orange-500 h-[400px] relative gap-4 p-2 rounded-lg"
          >
            <div className="w-[100px] h-1 bg-red-500 absolute top-[64%] right-[16.7%] "></div>
            <div className="w-[100px] h-1 bg-blue-500 absolute top-[64%] right-[8.6%] "></div>
            <div className="w-[100px] h-1 bg-green-500 absolute top-[64%] right-[0.6%] "></div>

            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa1.png" alt="santa1" width={100} />
            </div>
            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa2.png" alt="santa2" width={100} />
            </div>
            <div className="w-[100px] h-[100px] rounded  box">
              <img src="./images/santa3.png" alt="santa3" width={100} />
            </div>
            <h2 className="text-2xl absolute bottom-2 right-5 border-2 border-orange-500 p-2">
              Level 5
            </h2>
            <button
              type="submit"
              onClick={() => {
                click(level5);
              }}
              className="px-9 py-2.5 bg-orange-600 absolute top-2 right-4 rounded-md font-semibold text-2xl text-white"
            >
              Click
            </button>
            <button
              onClick={() => {
                clear(level5);
              }}
              type="submit"
              className="px-[34px] py-2.5 ml-3 bg-pink-600  absolute top-20 right-4 rounded-md font-semibold text-2xl text-white"
            >
              Clear
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FlexGame;
