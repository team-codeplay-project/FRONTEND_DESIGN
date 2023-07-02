import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { MdEvent } from "react-icons/md";
import { BiBaseball } from "react-icons/bi";
import { useState } from "react";

const Footer = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [showTicketScreen, setShowTicketScreen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedBlock, setSelectedBlock] = useState("");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Tickets") {
      setShowTicketScreen(true);
    } else {
      setShowTicketScreen(false);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleBlockChange = (event) => {
    setSelectedBlock(event.target.value);
  };

  const handleBookTickets = () => {
    // Book Tickets 버튼을 클릭할 때 필요한 동작을 수행합니다.
    setShowTicketScreen(false); // 모달을 닫습니다.
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
        <Link
          to="/"
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
        </Link>
        <button
          to="/ticket-booking"
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
        {/* <Link to="/test" > */}
        <Link className={`inline-flex flex-col space-y-1 items-center justify-end w-1/4 h-full py-2 rounded-2xl transition-colors ${
            activeButton === "Events"
              ? "bg-indigo-500 bg-opacity-30"
              : "hover:bg-white hover:bg-opacity-20"
          }`} to= "/test">
        <button
          
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
        </Link>
        {/* </Link> */}
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

      {showTicketScreen && (
        <>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="w-64 h-96 bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-end mb-4">
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setShowTicketScreen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <h2 className="text-lg font-semibold">티켓 예약</h2>
              <div className="mt-4">
                <label className="block mb-4 text-sm font-medium">
                  Date:
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={selectedDate}
                    onChange={handleDateChange}>
                    <option value="">날짜 선택</option>
                    {/* 날짜 */}
                  </select>
                </label>
                <label className="block mb-4 text-sm font-medium">
                  Time:
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={selectedTime}
                    onChange={handleTimeChange}>
                    <option value="">시간 선택</option>
                    {/* 시간 */}
                  </select>
                </label>
                <label className="block mb-4 text-sm font-medium">
                  Seat Block:
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    value={selectedBlock}
                    onChange={handleBlockChange}>
                    <option value="">구역 선택</option>
                    {/* 좌석 블록 */}
                  </select>
                </label>
                <div className="flex justify-center">
                  <Link
                    to="/seatselection"
                    className="w-full px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-center rounded-full font-medium transition-colors shadow-sm duration-300"
                    onClick={handleBookTickets}>
                    좌석 선택
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
