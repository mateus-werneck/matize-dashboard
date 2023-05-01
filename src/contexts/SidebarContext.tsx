'use client';
import React, { createContext, useContext, useState } from 'react';

type SideBarContextProps = {
  minimalSidebar: boolean;
  setMinimalSidebar: (value: boolean) => void;
  isMinimalActive: () => boolean;
};

interface ISidebarProvider {
  children: React.ReactNode;
}

export const SideBarContext = createContext({} as SideBarContextProps);

export function SidebarProvider({ children }: ISidebarProvider) {
  const [minimalSidebar, setMinimalSidebar] = useState<boolean>(false);

  function isMinimalActive(): boolean {
    return minimalSidebar;
  }

  return (
    <SideBarContext.Provider
      value={{ minimalSidebar, setMinimalSidebar, isMinimalActive }}
    >
      {children}
    </SideBarContext.Provider>
  );
}

export const useSidebar = () => {
  return useContext(SideBarContext);
};
