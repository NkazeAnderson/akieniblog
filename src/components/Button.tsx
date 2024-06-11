"use client";
import React from "react";

function Button({ text, type }: { text: string; type?: "submit" }) {
  return (
    <button
      className="text-white bg-orange-900 hover:bg-orange-500 px-9 py-4 rounded-xl"
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
