import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NavLink from "./NavLink";
import Button from "./Button";

function NavSideBar() {
  return (
    <div className="h-full w-full border-r-0  lg:border-r-0 lg:pr-6 border-gray-400 flex flex-col space-y-4 items-center justify-between">
      <div className="space-y-6 w-full flex flex-col items-center">
        <Image
          className=""
          width={100}
          height={100}
          src={"/logo.png"}
          alt="logo"
        />
        <div className="w-full space-y-4">
          <NavLink text="Home" path="/" />
          <NavLink text="Settings" path="/settings" />
          <NavLink text="Add Post" path="/post/add" />
        </div>
      </div>

      <div className="pt-auto">
        <form action={""}>
          <Button text="Logout" />
        </form>
      </div>
    </div>
  );
}

export default NavSideBar;
