"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { MenuContext } from "./TopBar";

function NavLink({ path, text }: { path: string; text: string }) {
  const navpath = usePathname();
  const { closeMenu } = useContext(MenuContext);
  return (
    <Link
      href={path}
      onClick={() => {
        closeMenu();
      }}
    >
      <div
        className={`w-full my-4 p-4 font-bold ${
          path === navpath
            ? "text-green-900 lg:pl-7 "
            : "text-white border-gray-400 border-y-2 hover:text-green-900 hover:border-green-900"
        }`}
      >
        {text}
      </div>
    </Link>
  );
}

export default NavLink;
