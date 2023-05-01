'use client';
import { matizeAPI } from '@API/matize';
import { MenuAdminView } from '@Types/menu';
import React, { createContext, useContext, useState } from 'react';

type IMenuAdminContext = {
  SideBar: IMinimalSiderBar;
  MenuAdmin: MenuAdmin;
};

interface IMinimalSiderBar {
  minimalSidebar: boolean;
  setMinimalSidebar: (value: any) => void;
  isMinimalActive: () => boolean;
}

interface MenuAdmin {
  menuAdmin: MenuAdminView[];
  refreshMenu: () => Promise<MenuAdminView[]>;
}

interface IMenuAdminProvider {
  children: React.ReactNode;
  preLoadedMenu: MenuAdminView[];
}

export const MenuAdminContext = createContext({} as IMenuAdminContext);

export function MenuAdminProvider({
  children,
  preLoadedMenu
}: IMenuAdminProvider) {
  const [menuAdmin, setMenuAdmin] = useState<MenuAdminView[]>(preLoadedMenu);
  const [minimalSidebar, setMinimalSidebar] = useState<boolean>(false);

  async function refreshMenu(): Promise<MenuAdminView[]> {
    if (menuAdmin.length > 0) return menuAdmin;

    const response = await matizeAPI.get('admin-dashboard');
    const menuAdminView = response.data
    setMenuAdmin(menuAdminView);
    return menuAdminView
  }

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
        },
        MenuAdmin: {
          menuAdmin,
          refreshMenu
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
