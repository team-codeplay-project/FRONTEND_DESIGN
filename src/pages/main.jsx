import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "../App.css";
import { useState } from "react";

const MainPage = ({ account }) => {
  const cardTitle = "Upcoming Events";
  const events = [
    {
      image: "https://via.placeholder.com/327x436",
      organizerImage: "https://via.placeholder.com/32x32",
      organizerIcon: "https://via.placeholder.com/16x16",
      organizer: "Organizer 1",
      name: "Event 1",
      time: "1 hour ago",
    },
    {
      image: "https://via.placeholder.com/327x436",
      organizerImage: "https://via.placeholder.com/32x32",
      organizerIcon: "https://via.placeholder.com/16x16",
      organizer: "Organizer 2",
      name: "Event 2",
      time: "4 hours ago",
    },
    {
      image: "https://via.placeholder.com/327x436",
      organizerImage: "https://via.placeholder.com/32x32",
      organizerIcon: "https://via.placeholder.com/16x16",
      organizer: "Organizer 3",
      name: "Event 3",
      time: "2 days ago",
    },
    {
      image: "https://via.placeholder.com/327x436",
      organizerImage: "https://via.placeholder.com/32x32",
      organizerIcon: "https://via.placeholder.com/16x16",
      organizer: "Organizer 4",
      name: "Event 4",
      time: "3 days ago",
    },
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleTicketClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="container mx-auto mt-6 ">
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 140px)" }}>
          <div className="inline-flex flex-col space-y-1 items-start justify-end w-full h-10 px-6 pt-4 pb-2 bg-black">
            <div className="inline-flex space-x-3 items-center justify-start">
              <p className="text-lg font-bold leading-none text-white">
                Jam-sil, Seoul
              </p>
              <FaMapMarkerAlt className="w-4 h-full text-white" />
            </div>
          </div>

          <div className="flex items-start justify-start mb-6 ">
            <h1 className="text-2xl font-bold text-white pl-6 mt-4">
              {cardTitle}
            </h1>
          </div>
          <div
            className="overflow-x-auto pb-4 pl-6 pr-3"
            style={{ maxWidth: "100vw" }}>
            <div className="flex" style={{ width: "max-content" }}>
              {events.map((event, index) => (
                <div className="mr-3" key={index}>
                  <div
                    className="relative shadow"
                    style={{ width: "320px", height: "240px" }}>
                    <div className="w-full h-64 rounded-2xl bg-gray-400">
                      <div className="flex-1 h-full bg-gradient-to-g from-gray to-gray rounded-2xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col space-y-6 items-start justify-start w-full py-8 pl-6 bg-black rounded-3xl">
          <div className="inline-flex items-center justify-start w-full h-8 pr-64">
            <p className="text-2xl font-bold leading-loose text-white">
              Popular
            </p>
          </div>
          {events.map((event, index) => (
            <div
              className="inline-flex space-x-4 items-start justify-start w-full"
              key={index}>
              <div className="w-28 h-full rounded-lg mr-18">
                {event.image ? (
                  <img
                    className="flex-1 h-full rounded-2xl object-cover bg-gray-400"
                    src={event.image}
                    alt="Event"
                  />
                ) : (
                  <div className="flex-1 h-full bg-gradient-to-b from-gray-900 to-black rounded-2xl"></div>
                )}
              </div>
              <div className="inline-flex flex-col space-y-5 items-center justify-center flex-1">
                <div className="flex flex-col space-y-2 items-center justify-center w-full">
                  <p className="w-full text-lg font-bold py-4 leading-tight text-white text-center">
                    {event.name}
                  </p>
                  <p className="w-full text-sm leading-none text-gray-400 text-center">
                    {event.time}
                  </p>
                </div>
                <button
                  className="inline-flex items-center justify-center px-8 py-2 rounded-full"
                  style={{
                    backgroundColor:
                      selectedEvent === event ? "#4C1D95" : "#6366F1",
                  }}
                  onClick={() => handleTicketClick(event)}>
                  <p className="text-base font-medium leading-none text-white">
                    See ticket
                  </p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
