import { createContext } from "react";

export const UserContext = createContext<{ user: undefined | userT }>({
  user: undefined,
});
