import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "animate.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function SignUp() {
  const [userRegister, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    city: "",
    pincode: "",
    country: "",
    state: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({
      ...userRegister,
      [name]: value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const register = await axios.post(
      " http://localhost:3000/register",
      userRegister
    );
    console.log(register.data);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      city: "",
      pincode: "",
      country: "",
      state: "",
    });
    Swal.fire({
      title: "Success",
      text: "Registration Successfully",
      icon: "success",
      confirmButtonText: "Okay",
    }).then(() => {
      window.location = "/login";
    });
  };

  // mongodb+srv://anshrathod2104:<password>@cluster0.g8m0vcn.mongodb.net/
  // Anshrathod@mongodb
  // mongodb+srv://AnshRathod007:Anshrathod@mongodb@cluster0.g8m0vcn.mongodb.net/
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
        <h1 className="font-semibold  text-4xl">Registration</h1>
      </div>
      <div className="border p-8 rounded-md w-6/12 mx-auto my-16 animate__animated animate__fadeIn">
        <h2 className="text-4xl text-center mb-4 text-orange-600 font-semibold">
          Field Master
        </h2>
        <form
          className="grid grid-cols-2 gap-x-8 gap-y-4"
          onSubmit={handleRegister}
        >
          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-zinc-600">
              First Name
            </label>
            <input
              onChange={handleInputs}
              value={userRegister.firstName}
              type="text"
              className="border p-2 rounded"
              name="firstName"
              placeholder="Enter First Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-zinc-600">
              Last Name
            </label>
            <input
              onChange={handleInputs}
              value={userRegister.lastName}
              type="text"
              className="border p-2 rounded"
              name="lastName"
              placeholder="Enter Last Name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-zinc-600">Email</label>
            <input
              onChange={handleInputs}
              value={userRegister.email}
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
              onChange={handleInputs}
              value={userRegister.password}
              type="password"
              className="border p-2 rounded"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <div className="flex flex-col col-span-2">
            <label className="font-semibold mb-2 text-zinc-600">Address</label>
            <input
              onChange={handleInputs}
              value={userRegister.address}
              type="text"
              className="border p-2 rounded"
              name="address"
              placeholder="Enter Your Address"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-zinc-600">City</label>
            <input
              onChange={handleInputs}
              value={userRegister.city}
              type="text"
              className="border p-2 rounded"
              name="city"
              placeholder="Enter City"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-zinc-600">PinCcode</label>
            <input
              onChange={handleInputs}
              value={userRegister.pincode}
              type="text"
              className="border p-2 rounded"
              name="pincode"
              placeholder="Enter Pincode"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-zinc-600">Country</label>
            <input
              onChange={handleInputs}
              value={userRegister.country}
              type="text"
              className="border p-2 rounded"
              name="country"
              placeholder="Enter Your Country"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 text-zinc-600">State</label>
            <input
              onChange={handleInputs}
              value={userRegister.state}
              type="text"
              className="border p-2 rounded"
              name="state"
              placeholder="Enter Your State"
              required
            />
          </div>

          <div className="flex justify-between col-span-2 items-center">
            <button
              type="submit"
              className="bg-[#EA580C] w-fit px-6 py-2.5 rounded mt-2 text-white font-semibold hover:bg-black duration-300"
            >
              Signup
            </button>

            <Link to="/login" className="text-gray-600 font-semibold">
              Have an account ?
            </Link>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;
