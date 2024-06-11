"use client";

import React, { useContext, useEffect, useState, createContext } from "react";
import { FaSearch } from "react-icons/fa";
import Avatar from "./Avatar";
import IconButton from "./IconButton";
import NavSideBar from "./NavSideBar";
import { UserContext } from "./userContext";

export const MenuContext = createContext<{ closeMenu: () => void }>({
  closeMenu: () => {},
});

function TopBar() {
  const [openedMenu, setOpenedMenu] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <div className="w-full p-2 flex flex-col-reverse md:flex-row space-y-4  md:justify-between justify-end  items-start lg:items-center relative z-[999]">
      <div className="lg:flex  w-7/12 hidden">
        <span className="p-4 bg-slate-950">
          <FaSearch />
        </span>
        <input
          className="w-full pl-4 text-black rounded-e-xl"
          name="search"
          placeholder="Search"
          type="search"
        />
      </div>
      {openedMenu && (
        <div className="lg:hidden w-full absolute top-[100px] z-[1000] bg-slate-950">
          <MenuContext.Provider
            value={{
              closeMenu: () => {
                openedMenu && setOpenedMenu(false);
              },
            }}
          >
            <NavSideBar />
          </MenuContext.Provider>
        </div>
      )}

      <div className="w-full lg:w-fit flex justify-between items-center h-full">
        <div className="flex items-center space-x-4 flex-row-reverse md:flex-row">
          <p className=" capitalize">{user ? user.name : "Guest"}</p>
          <div>
            <Avatar path="/avatarface.png" />
          </div>
        </div>
        <div className=" lg:hidden" onClick={() => setOpenedMenu(!openedMenu)}>
          {openedMenu ? (
            <IconButton type="cancel" />
          ) : (
            <IconButton type="menu" />
          )}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
