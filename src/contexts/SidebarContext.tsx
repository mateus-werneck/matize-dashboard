'use client';
import React, { createContext, useContext, useState } from 'react';

type ISidebarContext = {
  isMinimalActive: () => boolean;
  setMinimalSidebar: (value: any) => void;
  minimalSidebar: boolean;
};

interface ISidebarProvider {
  children: React.ReactNode;
}

export const SidebarContext = createContext({} as ISidebarContext);

export function SidebarProvider({ children }: ISidebarProvider) {
  const [minimalSidebar, setMinimalSidebar] = useState<boolean>(false);

  function isMinimalActive(): boolean {
    return minimalSidebar;
  }

  return (
    <SidebarContext.Provider
      value={{
        minimalSidebar,
        setMinimalSidebar,
        isMinimalActive
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => {
  return useContext(SidebarContext);
};
