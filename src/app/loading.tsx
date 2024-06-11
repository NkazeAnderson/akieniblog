import React from "react";
import { FaNoteSticky } from "react-icons/fa6";

function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="flex space-x-2 animate-pulse items-center">
        <FaNoteSticky /> <span className="">Loading....</span>
      </div>
    </div>
  );
}

export default Loading;
