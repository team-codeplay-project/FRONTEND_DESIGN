import React, { useContext, useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { AppContext } from "../App";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { account , connect , logIn } = useContext(AppContext);

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    if (searchValue === "") {
      setIsSearching(false);
    }
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <div className="sticky top-0 z-10 bg-black">
      <header className="flex items-center justify-between w-full h-16 mt-5">
        <div className="flex items-center ml-6 pr-1">
          <button className="text-white hover:text-gray-300">
            <FaBars style={{ fontSize: "30px" }} />
          </button>
        </div>
        <div className="flex items-center pr-1">
          <div className="relative flex items-center">
            {!isSearching && (
              <FaSearch
                className={`absolute left-10 text-gray-400 transition-transform transform ${
                  logIn ? "translate-x-2" : ""
                }`}
                style={{
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "14px",
                  transition: "transform 0.3s",
                  color: logIn
                    ? "rgba(255, 255, 255, 0.5)"
                    : "rgba(255, 255, 255, 0.4)",
                }}
              />
            )}
            <input
              className={`px-1 py-1 pl-8 rounded-lg mr-4 bg-gray-800 text-white focus:outline-none ${
                logIn ? "text-opacity-40" : "text-opacity-40"
              }`}
              type="text"
              placeholder={isSearching ? "" : "         Search Game"}
              value={searchValue}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </div>
          <button
            className={`relative text-white hover:text-gray-300 flex items-center ml-2 mr-5 ${
              logIn ? "text-purple-500" : ""
            }`}
            onClick={connect}>
            <BsCreditCardFill
              className={`mr-1 transition-transform transform ${
                logIn ? "scale-90" : ""
              }`}
              style={{
                fontSize: "34px",
                color: logIn ? "rgba(255, 255, 255, 0.8)" : "#ffffff",
                transition: "transform 0.3s",
              }}
            />

            {logIn && (
              <span
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs transition-opacity ${
                  account ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  color: logIn ? "#665ee0" : "#ffffff",
                  opacity: logIn ? 1 : 0.8,
                  transition: "opacity 0.3s",
                }}>
                {account.substr(account.length - 4)}
              </span>
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
