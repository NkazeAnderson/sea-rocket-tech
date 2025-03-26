"use client";
import React, { useEffect, useState } from "react";

export type AppContextType = {
  mobileNavIsOpen: boolean;
  toggleMobileNav: VoidFunction;
};

export const AppContext = React.createContext<AppContextType | undefined>(
  undefined
);

function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  useEffect(() => {
    console.log(mobileNavIsOpen);
  }, [mobileNavIsOpen]);

  function toggleMobileNav() {
    setMobileNavIsOpen(!mobileNavIsOpen);
  }

  return (
    <AppContext.Provider value={{ mobileNavIsOpen, toggleMobileNav }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
