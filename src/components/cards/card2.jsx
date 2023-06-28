import React from "react";

const Card2 = ({ events }) => {
  return (
    <div className="inline-flex flex-col space-y-6 items-start justify-start w-96 py-8 pl-6 bg-gray-900 rounded-3xl">
      <div className="inline-flex items-center justify-start w-80 h-8 pr-64">
        <p className="text-2xl font-bold leading-loose text-white">Popular</p>
      </div>
      {events.map((event, index) => (
        <div
          className="inline-flex space-x-10 items-start justify-start w-80"
          key={index}>
          <div className="w-32 h-full rounded-lg">
            {event.image ? (
              <img
                className="flex-1 h-full rounded-2xl object-cover"
                src={event.image}
                alt="Event"
              />
            ) : (
              <div className="flex-1 h-full bg-gradient-to-b from-gray-900 to-black rounded-2xl"></div>
            )}
          </div>
          <div className="inline-flex flex-col space-y-11 items-start justify-start flex-1">
            <div className="flex flex-col space-y-3 items-start justify-start w-full">
              <p className="w-full text-base font-bold py-3 leading-tight text-white">
                {event.name}
              </p>
              <p className="w-full text-sm leading-none text-gray-400">
                {event.time}
              </p>
            </div>
            <button className="inline-flex items-start justify-start px-6 py-3 bg-indigo-500 rounded-full">
              <p className="text-base font-medium leading-none text-center text-white">
                See ticket
              </p>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card2;
