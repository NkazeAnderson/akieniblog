"use client";
import React, { ReactNode, createContext } from "react";
import { UserContext } from "./userContext";

function UserContextProvider({ children }: { children: ReactNode }) {
  const user: userT = {
    id: 1,
    name: "wale",
    email: "wale@gmail.com",
    phone: "12345",
    username: "",
  };
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export default UserContextProvider;
