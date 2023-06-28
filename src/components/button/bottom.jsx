import React from "react";

const Bottom = ({ imageSrc, altText, labelText }) => {
  return (
    <div className="inline-flex flex-col space-y-1 items-center justify-end w-1/5 h-full py-2">
      <img className="w-10 h-10 rounded-lg" src={imageSrc} alt={altText} />
      <p className="text-xs leading-3 text-center text-gray-500">{labelText}</p>
    </div>
  );
};

export default Bottom;
