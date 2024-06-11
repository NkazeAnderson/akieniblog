import React from "react";
import { FaBars, FaPaperPlane } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

function IconButton({ type }: { type: "submit" | "menu" | "cancel" }) {
  return (
    <div className="p-4 bg-orange-900 hover:bg-orange-500 inline-block">
      {type === "submit" && <FaPaperPlane size={30} />}
      {type === "menu" && <FaBars size={30} />}
      {type === "cancel" && <FaXmark size={30} />}
    </div>
  );
}

export default IconButton;
