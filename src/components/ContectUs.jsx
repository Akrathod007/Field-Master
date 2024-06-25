import { useState } from "react";
import Swal from "sweetalert2";
import Nav from "./Nav";
import Footer from "./Footer";
import { HashLink as Link } from "react-router-hash-link";
import "animate.css";

const ContectUs = () => {
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
        <h1 className="font-semibold  text-4xl">Contact Us</h1>
      </div>
      <div className="p-10 flex gap-x-5">
        <img
          src="./images/contact-us.svg"
          alt=""
          width="50%"
          className="move"
        />
        <div className="w-6/12 bg-[#EA580C] rounded-md animate__animated animate__fadeIn">
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
      <Footer />
    </div>
  );
};

export default ContectUs;
