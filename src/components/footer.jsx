import React from "react";
import { FaHome } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { MdEvent } from "react-icons/md";
import { BiBaseball } from "react-icons/bi";
import { useState } from "react";
import "../App.css";

const Footer = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div
      className="sticky bottom-3 bg-gray-900 bg-opacity-80 pb-2 pt-2 rounded-3xl shadow-lg"
      style={{
        width: "360px",
        margin: "0 auto",
        zIndex: 1,
      }}>
      <div
        className="inline-flex items-center justify-between w-full h-14 max-w-7xl mx-auto"
        style={{
          padding: "0 16px",
          borderRadius: "20px",
        }}>
        <button
          className={`inline-flex flex-col space-y-1 items-center justify-end w-1/4 h-full py-2 rounded-2xl transition-colors ${
            activeButton === "Home"
              ? "bg-indigo-500 bg-opacity-30"
              : "hover:bg-white hover:bg-opacity-20"
          }`}
          onClick={() => handleButtonClick("Home")}>
          <FaHome
            className={`w-8 h-8 rounded-full shadow ${
              activeButton === "Home" ? "text-indigo-500" : "text-white"
            }`}
          />
          <p
            className={`text-xs leading-3 text-center font-medium ${
              activeButton === "Home" ? "text-indigo-500" : "text-white"
            }`}>
            Home
          </p>
        </button>
        <button
          className={`inline-flex flex-col space-y-1 items-center justify-end w-1/4 h-full py-2 rounded-2xl transition-colors ${
            activeButton === "Tickets"
              ? "bg-indigo-500 bg-opacity-30"
              : "hover:bg-white hover:bg-opacity-20"
          }`}
          onClick={() => handleButtonClick("Tickets")}>
          <IoTicketSharp
            className={`w-8 h-8 rounded-full shadow ${
              activeButton === "Tickets" ? "text-indigo-500" : "text-white"
            }`}
          />
          <p
            className={`w-full text-xs leading-3 text-center font-medium ${
              activeButton === "Tickets" ? "text-indigo-500" : "text-white"
            }`}>
            Tickets
          </p>
        </button>
        <button
          className={`inline-flex flex-col space-y-1 items-center justify-end w-1/4 h-full py-2 rounded-2xl transition-colors ${
            activeButton === "Events"
              ? "bg-indigo-500 bg-opacity-30"
              : "hover:bg-white hover:bg-opacity-20"
          }`}
          onClick={() => handleButtonClick("Events")}>
          <MdEvent
            className={`w-8 h-8 rounded-full shadow ${
              activeButton === "Events" ? "text-indigo-500" : "text-white"
            }`}
          />
          <p
            className={`w-full text-xs leading-3 text-center font-medium ${
              activeButton === "Events" ? "text-indigo-500" : "text-white"
            }`}>
            Events
          </p>
        </button>
        <button
          className={`inline-flex flex-col space-y-1 items-center justify-end w-1/4 h-full py-2 rounded-2xl transition-colors ${
            activeButton === "Mypage"
              ? "bg-indigo-500 bg-opacity-30"
              : "hover:bg-white hover:bg-opacity-20"
          }`}
          onClick={() => handleButtonClick("Mypage")}>
          <BiBaseball
            className={`w-8 h-8 rounded-full shadow ${
              activeButton === "Mypage" ? "text-indigo-500" : "text-white"
            }`}
          />
          <p
            className={`w-full text-xs leading-3 text-center font-medium ${
              activeButton === "Mypage" ? "text-indigo-500" : "text-white"
            }`}>
            Mypage
          </p>
        </button>
      </div>
    </div>
  );
};
export default Footer;
