import React from "react";
import { FaWallet, FaSearch, FaBars } from "react-icons/fa";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="flex items-center justify-between w-full h-16 bg-black mt-5">
      <div className="flex items-center ml-5">
        <button className="text-white hover:text-gray-300">
          <FaBars style={{ fontSize: "28px" }} />
        </button>
      </div>
      <div className="flex items-center">
        <div className="relative flex items-center">
          <FaSearch
            className="absolute left-3 text-gray-400"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          />
          <input
            className="px-2 py-1 pl-10 rounded-lg mr-4 bg-gray-800 text-white focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <button
          className="text-white hover:text-gray-300 flex items-center ml-2 mr-5"
          onClick={onClickAccount}>
          <FaWallet className="mr-1" style={{ fontSize: "30px" }} />
        </button>
      </div>
    </header>
  );
};

export default Header;
