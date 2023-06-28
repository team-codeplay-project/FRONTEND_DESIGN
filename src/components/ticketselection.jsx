import React from "react";

const TicketSelectionPage = () => {
  return (
    <div className="inline-flex flex-col space-y-3 items-center justify-end w-96 bg-gray-900 rounded-3xl">
      <div className="w-full h-72">
        <img
          className="flex-1 h-full"
          src="https://via.placeholder.com/375x281"
          alt="Event"
        />
      </div>
      <div className="inline-flex space-x-64 items-center justify-end w-full h-11 pl-8 pr-4 pt-4 pb-3">
        {/* 내용을 추가해야 함 */}
      </div>
      <div className="flex flex-col space-y-3.5 items-start justify-end w-full h-1/6 px-6">
        <p className="w-full text-2xl font-bold leading-loose text-white">
          The Beginner's Guide to Create Animated
        </p>
        <div className="inline-flex space-x-2 items-end justify-center">
          <img
            className="w-4 h-full rounded-full"
            src="https://via.placeholder.com/16x16"
            alt="Calendar"
          />
          <p className="text-sm leading-none text-gray-400">Jun 4 · 7:00 PM</p>
        </div>
        <div className="inline-flex space-x-2 items-end justify-center">
          <img
            className="w-4 h-full rounded-full"
            src="https://via.placeholder.com/16x16"
            alt="Location"
          />
          <p className="text-sm leading-none text-gray-400">잠실 야구 경기장</p>
        </div>
        <div className="inline-flex space-x-2 items-end justify-center">
          <div className="flex items-center justify-center w-1/4 h-full px-0.5 py-0.5">
            <div className="relative flex-1 h-full"></div>
          </div>
          <p className="text-sm leading-none text-gray-400">₩15000</p>
        </div>
      </div>
      <div className="inline-flex space-x-2.5 items-center justify-start w-full h-10 px-6">
        <div className="w-10 h-full">
          <img
            className="flex-1 h-full rounded-full"
            src="https://via.placeholder.com/40x40"
            alt="Organizer"
          />
        </div>
        <p className="text-sm leading-none text-gray-400">Organizer</p>
        <p className="text-sm font-medium leading-none text-white">DOOSAN VS</p>
        <div className="flex items-center justify-center w-10 h-full p-2.5 bg-white rounded-lg">
          <img
            className="flex-1 h-full rounded-lg"
            src="https://via.placeholder.com/20x20"
            alt="Verified"
          />
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-full h-0.5 px-6">
        <div className="flex-1 h-full bg-gray-900"></div>
      </div>
      <div
        className="flex flex-col space-y-4 items-start justify-end pr-14"
        style={{ width: "471px", height: "74px" }}>
        <p className="text-sm font-medium leading-none text-gray-400">
          DATE & TIME
        </p>
        <div
          className="inline-flex space-x-2 items-center justify-start"
          style={{ width: "416px", height: "44px" }}>
          <div className="inline-flex flex-col space-y-1 items-center justify-start px-3 pt-2 pb-1 bg-indigo-500 rounded">
            <p className="text-xs leading-3 text-white">Sat - 7:00 PM</p>
            <p className="text-sm leading-none text-white">Jun 4</p>
          </div>
          <div className="inline-flex flex-col space-y-1 items-center justify-start px-3 pt-2 pb-1 border rounded border-gray-600">
            <p className="text-xs leading-3 text-gray-400">Sat - 7:00 PM</p>
            <p className="text-sm leading-none text-gray-400">Jun 11</p>
          </div>
          <div className="inline-flex flex-col space-y-1 items-center justify-start px-3 pt-2 pb-1 border rounded border-gray-600">
            <p className="text-xs leading-3 text-gray-400">Sat - 7:00 PM</p>
            <p className="text-sm leading-none text-gray-400">Jun 18</p>
          </div>
          <div className="inline-flex flex-col space-y-1 items-center justify-start px-3 pt-2 pb-1 border rounded border-gray-600">
            <p className="text-xs leading-3 text-gray-400">Sat - 7:00 PM</p>
            <p className="text-sm leading-none text-gray-400">Jun 25</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 items-center justify-end w-full h-28 px-6 pb-1">
        <p className="w-12 text-sm font-medium leading-none text-gray-400">
          ABOUT
        </p>
        <p className="w-full text-sm leading-tight text-white">
          Interior design is a competitive industry where you need to stand out
          to get ahead. Content marketing attracts new business by engaging your
          ideal customer with consistently.
        </p>
      </div>
      <div className="inline-flex items-center justify-center w-80 h-12 py-4 px-24 bg-indigo-500 rounded-full">
        <p className="text-base font-medium leading-none text-center text-white">
          $15.00 · Register
        </p>
      </div>
      <img
        className="w-full h-8 rounded-lg"
        src="https://via.placeholder.com/375x34"
        alt="Footer"
      />
    </div>
  );
};

export default TicketSelectionPage;
