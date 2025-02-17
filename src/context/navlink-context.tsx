"use client";

import {
  Dispatch,
  SetStateAction,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

type NavlinkContextType = {
  activeLink: string;
  setActiveLink: Dispatch<SetStateAction<string>>;
};

export const NavlinkContext = createContext<NavlinkContextType | undefined>(
  undefined
);

export default function NavlinkContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeLink, setActiveLink] = useState("");

  return (
    <NavlinkContext.Provider
      value={{
        activeLink,
        setActiveLink,
      }}
    >
      {children}
    </NavlinkContext.Provider>
  );
}

export function useNavlinkContext() {
  const context = useContext(NavlinkContext);
  if (!context) {
    throw new Error(
      "useNavlinkContext must be used within a NavlinkContextProvider"
    );
  }
  return context;
}
