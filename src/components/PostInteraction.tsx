"use client";
import React, { useState } from "react";
import Button from "./Button";
import { FaRegStar, FaStar } from "react-icons/fa";

function PostInteraction({ children }: { children: React.ReactNode }) {
  const [stared, setStared] = useState(false);
  const [openComment, setOpenComment] = useState(false);

  return (
    <div>
      <div className="flex space-x-6">
        <span
          className={`hover:cursor-pointer ${
            stared ? "text-yellow-500" : "text-white"
          }`}
          onClick={() => {
            setStared(!stared);
          }}
        >
          {stared ? <FaStar size={50} /> : <FaRegStar size={50} />}
        </span>
        <div
          onClick={() => {
            setOpenComment(!openComment);
          }}
        >
          <Button text="Comment" />
        </div>
      </div>
      {openComment && <div className="p-6">{children}</div>}
    </div>
  );
}

export default PostInteraction;
