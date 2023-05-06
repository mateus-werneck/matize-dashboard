'use client';
import React, { createContext, useContext, useState } from 'react';

type IMenuAdminContext = {
  SideBar: IMinimalSiderBar;
};

interface IMinimalSiderBar {
  minimalSidebar: boolean;
  setMinimalSidebar: (value: any) => void;
  isMinimalActive: () => boolean;
}

interface IMenuAdminProvider {
  children: React.ReactNode;
}

export const MenuAdminContext = createContext({} as IMenuAdminContext);

export function MenuAdminProvider({
  children
}: IMenuAdminProvider) {
  const [minimalSidebar, setMinimalSidebar] = useState<boolean>(false);
 
  function isMinimalActive(): boolean {
    return minimalSidebar;
  }

  return (
    <MenuAdminContext.Provider
      value={{
        SideBar: {
          minimalSidebar,
          setMinimalSidebar,
          isMinimalActive
        }
      }}
    >
      {children}
    </MenuAdminContext.Provider>
  );
}

export const useMenuAdmin = () => {
  return useContext(MenuAdminContext);
};
