import React from "react";

const ProgressBar = ({ percent }) => {
  return (
    <div className="relative w-auto h-3 bg-gray-200">
      <div
        className="absolute top-0 left-0 h-full bg-Blue"
        style={{ width: `${percent}%` }}
      ></div>
      <div className="absolute top-3.5 right-0 z-10  transform -translate-x-1/2 -translate-y-full text-xs text-black">
        {percent}%
      </div>
    </div>
  );
};

export default ProgressBar;


