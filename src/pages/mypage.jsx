import React from "react";

function MyPage() {
  return (
    <div className="inline-flex flex-col space-y-96 items-center justify-start w-96 bg-gray-900 rounded-3xl">
      <div className="inline-flex items-end justify-center transform rotate-90 w-12 h-12 px-3 pt-9 bg-white rounded-lg">
        <img
          className="flex-1 h-full rounded-lg"
          src="https://via.placeholder.com/24x24"
          alt=""
        />
      </div>
      <div className="inline-flex space-x-64 items-center justify-end w-full h-11 pl-8 pr-4 pt-4 pb-3 bg-gray-900">
        <p className="text-base font-medium leading-none text-white">9:41</p>
        <img
          className="w-7 h-3 rounded-full"
          src="https://via.placeholder.com/26.97806167602539x13"
          alt=""
        />
      </div>
      <div className="inline-flex space-x-28 items-center justify-end w-full h-12 py-3 pl-4 pr-6 bg-gray-900">
        <img
          className="w-6 h-full rounded-lg"
          src="https://via.placeholder.com/24x24"
          alt=""
        />
      </div>
      <div className="inline-flex items-center justify-center w-full h-16 px-6 py-3 bg-gray-900">
        <p className="flex-1 text-3xl font-bold leading-9 text-white">Search</p>
      </div>
      <div className="w-72 h-12 bg-gray-900 rounded-lg">
        <div className="flex items-center justify-center flex-1 h-12 p-4 border rounded-lg border-gray-900">
          <p className="text-base leading-none text-white">Webinar</p>
        </div>
      </div>
      <div className="w-full h-0.5">
        <div className="flex-1 h-full bg-gray-900"></div>
      </div>
      <div
        className="inline-flex space-x-2 items-center justify-start"
        style={{ width: "460px", height: "32px" }}>
        <div className="flex space-x-2 items-center justify-start py-2 pl-4 pr-3 bg-indigo-500 border rounded-full border-indigo-500">
          <p className="text-base leading-none text-white">Today</p>
          <img
            className="w-4 h-full rounded-full"
            src="https://via.placeholder.com/16x16"
            alt=""
          />
        </div>
        <div className="flex items-center justify-start px-4 py-2 border rounded-full border-gray-800">
          <p className="text-base leading-none text-white">Tomorrow</p>
        </div>
        <div className="flex items-center justify-start px-4 py-2 border rounded-full border-gray-800">
          <p className="text-base leading-none text-white">This week</p>
        </div>
        <div className="flex items-center justify-start px-4 py-2 border rounded-full border-gray-800">
          <p className="text-base leading-none text-white">This month</p>
        </div>
      </div>
      <div className="flex flex-col space-y-5 items-center justify-start w-80">
        <p className="text-2xl font-bold leading-loose text-white">4 events</p>
        <div className="inline-flex space-x-3 items-start justify-start w-full">
          <div className="w-32 h-full rounded-lg">
            <img
              className="flex-1 h-full rounded-2xl"
              src="https://via.placeholder.com/128x96"
              alt=""
            />
          </div>
          <div className="inline-flex flex-col space-y-4 items-start justify-start flex-1">
            <div className="flex flex-col space-y-2 items-start justify-start w-full">
              <p className="w-full text-base font-bold leading-tight text-white">
                Webinar - How To Create Animated
              </p>
              <p className="w-full text-sm leading-none text-gray-400">
                Timothy Barlin
              </p>
            </div>
            <div className="inline-flex space-x-4 items-start justify-start w-full">
              <div className="flex space-x-2 items-end justify-center">
                <img
                  className="w-4 h-full rounded-full"
                  src="https://via.placeholder.com/16x16"
                  alt=""
                />
                <p className="text-sm leading-none text-white">
                  Jan 14 · 9:00 AM
                </p>
              </div>
              <div className="flex space-x-2 items-end justify-center">
                <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                  <div className="relative flex-1 h-full"></div>
                </div>
                <p className="text-sm leading-none text-white">$17</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex space-x-3 items-start justify-start w-full">
          <div className="w-32 h-full rounded-lg">
            <img
              className="flex-1 h-full rounded-2xl"
              src="https://via.placeholder.com/128x96"
              alt=""
            />
          </div>
          <div className="inline-flex flex-col space-y-4 items-start justify-start flex-1">
            <div className="flex flex-col space-y-2 items-start justify-start w-full">
              <p className="w-full text-base font-bold leading-tight text-white">
                Webinar Series: Ways Immersive 3D
              </p>
              <p className="w-full text-sm leading-none text-gray-400">
                Ginsberg Design Studio
              </p>
            </div>
            <div className="inline-flex space-x-4 items-start justify-start w-full">
              <div className="flex space-x-2 items-end justify-center">
                <img
                  className="w-4 h-full rounded-full"
                  src="https://via.placeholder.com/16x16"
                  alt=""
                />
                <p className="text-sm leading-none text-white">
                  May 4 · 9:00 AM
                </p>
              </div>
              <div className="flex space-x-2 items-end justify-center">
                <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                  <div className="relative flex-1 h-full"></div>
                </div>
                <p className="text-sm leading-none text-white">Free</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex space-x-3 items-start justify-start w-full">
          <div className="w-32 h-full rounded-lg">
            <img
              className="flex-1 h-full rounded-2xl"
              src="https://via.placeholder.com/128x96"
              alt=""
            />
          </div>
          <div className="inline-flex flex-col space-y-4 items-start justify-start flex-1">
            <div className="flex flex-col space-y-2 items-start justify-start w-full">
              <p className="w-full text-base font-bold leading-tight text-white">
                Webinar - The Beginner's 3D Design
              </p>
              <p className="w-full text-sm leading-none text-gray-400">
                Ginsberg Design Studio
              </p>
            </div>
            <div className="inline-flex space-x-4 items-start justify-start w-full">
              <div className="flex space-x-2 items-end justify-center">
                <img
                  className="w-4 h-full rounded-full"
                  src="https://via.placeholder.com/16x16"
                  alt=""
                />
                <p className="text-sm leading-none text-white">
                  Jul 6 · 8:00 PM
                </p>
              </div>
              <div className="flex space-x-2 items-end justify-center">
                <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                  <div className="relative flex-1 h-full"></div>
                </div>
                <p className="text-sm leading-none text-white">Free</p>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex space-x-3 items-start justify-start w-full">
          <div className="w-32 h-full rounded-lg">
            <img
              className="flex-1 h-full rounded-2xl"
              src="https://via.placeholder.com/128x96"
              alt=""
            />
          </div>
          <div className="inline-flex flex-col space-y-4 items-start justify-start flex-1">
            <div className="flex flex-col space-y-2 items-start justify-start w-full">
              <p className="w-full text-base font-bold leading-tight text-white">
                Webinar - The Beginner's Interior...
              </p>
              <p className="w-full text-sm leading-none text-gray-400">
                Ginsberg Design Studio
              </p>
            </div>
            <div className="inline-flex space-x-4 items-start justify-start w-full">
              <div className="flex space-x-2 items-end justify-center">
                <img
                  className="w-4 h-full rounded-full"
                  src="https://via.placeholder.com/16x16"
                  alt=""
                />
                <p className="text-sm leading-none text-white">
                  Jul 6 · 8:00 PM
                </p>
              </div>
              <div className="flex space-x-2 items-end justify-center">
                <div className="flex items-center justify-center w-4 h-full px-0.5 py-0.5">
                  <div className="relative flex-1 h-full"></div>
                </div>
                <p className="text-sm leading-none text-white">Free</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="w-full h-8 rounded-lg"
        src="https://via.placeholder.com/375x34"
        alt=""
      />
    </div>
  );
}

export default MyPage;
