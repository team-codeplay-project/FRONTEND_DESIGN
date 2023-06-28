import React from "react";

const PaymentPage = () => {
  return (
    <div className="inline-flex flex-col space-y-5 items-center justify-end w-96 bg-gray-900 rounded-3xl">
      <div className="inline-flex space-x-64 items-center justify-end w-full h-11 pl-8 pr-4 pt-4 pb-3 bg-gray-900"></div>
      <div className="inline-flex items-center justify-start w-full px-4 py-3.5 bg-red-500 bg-opacity-10">
        <p className="flex-1 text-base leading-tight text-center text-red-500">
          Time left 7:34
        </p>
      </div>
      <div className="inline-flex space-x-28 items-center justify-end w-full h-12 py-3 pl-4 pr-6 bg-gray-900">
        <img
          className="w-6 h-full rounded-lg"
          src="https://via.placeholder.com/24x24"
          alt="icon"
        />
      </div>
      <div className="inline-flex items-center justify-center w-full h-16 px-6 py-3 bg-gray-900">
        <p className="flex-1 text-3xl font-bold leading-9 text-white">
          Checkout
        </p>
      </div>
      <div className="flex flex-col space-y-3 items-start justify-start w-full h-20 px-6 pb-1.5">
        <p className="text-sm font-medium leading-none text-gray-400">
          CONTACT DETAILS
        </p>
        <p className="text-sm leading-none text-right text-gray-400">
          Edit contact
        </p>
        <p className="text-3xl font-bold leading-none text-white">배다옴 님,</p>
      </div>
      <div className="relative" style={{ width: "375px", height: "198px" }}>
        <div
          className="inline-flex space-x-2 items-center justify-start w-32 h-8 absolute"
          style={{ left: "221px", top: "30px" }}>
          <div className="relative" style={{ width: "32px", height: "32px" }}>
            <div className="w-8 h-8 border rounded-full border-gray-600"></div>
          </div>
          <div className="w-1/4 h-full">
            <div className="relative" style={{ width: "32px", height: "32px" }}>
              <div className="w-5 h-5 absolute left-0 top-0 bg-indigo-900 rounded-lg"></div>
              <img
                className="w-5 h-6 absolute left-0 top-0 rounded-lg"
                src="https://via.placeholder.com/20.266036987304688x23.91489601135254"
                alt="icon"
              />
            </div>
          </div>
          <p className="text-sm leading-tight text-gray-400">Paypal</p>
        </div>
        <div
          className="inline-flex space-x-2 items-center justify-start w-44 h-8 pr-0.5 absolute"
          style={{ left: "24px", top: "30px" }}>
          <div className="relative" style={{ width: "32px", height: "32px" }}>
            <div className="w-8 h-8 border rounded-full border-indigo-500"></div>
            <div className="w-6 h-6 absolute left-0 top-0 bg-indigo-500 rounded-full"></div>
          </div>
          <div className="relative" style={{ width: "44px", height: "32px" }}>
            <div className="w-11 h-8"></div>
            <div className="w-3 h-5 absolute inset-x-0 bottom-0 mx-auto bg-yellow-600 rounded-lg"></div>
            <div className="w-5 h-6 absolute left-0 bottom-0 bg-red-600 rounded-lg"></div>
            <div className="w-5 h-6 absolute right-0 bottom-0 bg-gradient-to-bl from-yellow-500 to-yellow-300 rounded-lg"></div>
          </div>
          <p className="text-sm leading-tight text-white">Mastercard</p>
        </div>
        <p
          className="absolute text-sm font-medium leading-none text-gray-400"
          style={{ left: "24px", top: "0px" }}>
          PAYMENT METHOD
        </p>
        <div
          className="w-80 h-12 absolute bg-gray-900 rounded-lg"
          style={{ left: "24px", top: "86px" }}>
          <div className="flex items-center justify-center flex-1 h-12 p-4 border rounded-lg border-gray-900">
            <p className="text-base leading-none text-gray-400">
              Credit card number
            </p>
          </div>
        </div>
        <div
          className="w-56 h-12 absolute bg-gray-900 rounded-lg"
          style={{ left: "24px", top: "150px" }}>
          <div className="flex items-center justify-center flex-1 h-12 p-4 border rounded-lg border-gray-900">
            <p className="text-base leading-none text-gray-400">
              Expiry date : MM/YY
            </p>
          </div>
        </div>
        <div
          className="w-20 h-12 absolute bg-gray-900 rounded-lg"
          style={{ left: "267px", top: "150px" }}>
          <div className="flex items-center justify-center w-20 h-12 p-4 border rounded-lg border-gray-900">
            <p className="text-base leading-none text-gray-400">CVV</p>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-center w-full h-0.5 px-6">
        <div className="flex-1 h-full bg-gray-900"></div>
      </div>
      <div className="flex flex-col items-start justify-end w-full h-20 pl-6 pr-5">
        <p className="text-sm font-medium leading-none text-gray-400">
          PAYMENT DETAIL
        </p>
        <p className="text-base font-bold leading-none text-white">₩15,000</p>
        <p className="text-base leading-none text-gray-400">Ticket price</p>
        <p className="text-base font-bold leading-none text-white">₩ 0.00</p>
        <p className="text-base leading-none text-gray-400">Convenience Fee</p>
      </div>
      <div className="inline-flex items-center justify-center w-80 h-12 py-4 px-24 bg-indigo-500 rounded-full">
        <p className="text-base font-medium leading-none text-center text-white">
          Complete booking
        </p>
      </div>
      <img
        className="w-full h-8 rounded-lg"
        src="https://via.placeholder.com/375x34"
        alt="footer"
      />
    </div>
  );
};

export default PaymentPage;
