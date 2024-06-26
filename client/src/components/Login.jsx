import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import axios from "axios";

function Login() {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });
    // console.log(userLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = await axios.post("http://localhost:3000/login", userLogin);
    console.log(login.data);
    setUserLogin({
      email: "",
      password: "",
    });
    Swal.fire({
      title: "Success",
      text: "Login Successfully",
      icon: "success",
      confirmButtonText: "Okay",
    }).then(() => {
      window.location = "/";
    });
  };

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
        className="w-4/12 mx-auto text-center border-2 border-orange-500 text-white rounded-md px-28 py-7 m-10 bg-[#EA580C] 
      hover:bg-transparent hover:text-black duration-300 animate__animated animate__zoomIn"
      >
        <h1 className="font-semibold  text-4xl">Login</h1>
      </div>

      <div className="border p-8 rounded-md w-[400px] mx-auto my-16 animate__animated animate__fadeIn">
        <h2 className="text-4xl text-center mb-4 text-orange-600 font-semibold">
          Field Master
        </h2>
        <form className="flex flex-col gap-x-8 gap-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-zinc-600">Email</label>
            <input
              onChange={handleChange}
              value={userLogin.email}
              type="email"
              className="border p-2 rounded"
              name="email"
              placeholder="Enter Email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-zinc-600">Password</label>
            <input
              onChange={handleChange}
              value={userLogin.password}
              type="password"
              className="border p-2 rounded"
              name="password"
              placeholder="Enter Password"
              required
            />
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="remember" />
              <p className="text-gray-600">Remember Me</p>
            </div>

            <Link to="#" className="text-gray-600">
              Forgat Password ?
            </Link>
          </div>

          <div className="flex justify-between col-span-2 items-center">
            <button
              type="submit"
              className="bg-[#64b496] w-fit px-6 py-2.5 rounded mt-2 text-white font-semibold hover:bg-black duration-300"
            >
              Login
            </button>

            <Link to="/registration" className="text-gray-600 font-semibold">
              Signup ?
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
