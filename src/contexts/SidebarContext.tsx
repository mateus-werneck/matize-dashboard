'use client';
import React, { createContext, useContext, useState } from 'react';

type SideBarContextProps = {
  minimalSidebar: boolean;
  setMinimalSidebar: (value: boolean) => void;
};

interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SideBarContext = createContext({} as SideBarContextProps);

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [minimalSidebar, setMinimalSidebar] = useState<boolean>(false);

  return (
    <SideBarContext.Provider value={{ minimalSidebar, setMinimalSidebar }}>
      {children}
    </SideBarContext.Provider>
  );
}

export const useSidebar = () => {
  return useContext(SideBarContext);
};
