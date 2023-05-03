'use client';
import { matizeAPI } from '@API/matize';
import { MenuAdminView } from '@Types/menu';
import React, { createContext, useContext, useEffect, useState } from 'react';

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
  const [menuAdmin, setMenuAdmin] = useState<MenuAdminView[]>(
    [] as MenuAdminView[]
  );
  const [minimalSidebar, setMinimalSidebar] = useState<boolean>(false);

  useEffect(() => {
    preLoadedMenu.length > 0 && setMenuAdmin(preLoadedMenu);
    !preLoadedMenu.length && refreshMenu();
  }, []);

  async function refreshMenu(): Promise<MenuAdminView[]> {
    let menuAdminView = [] as MenuAdminView[];
    if (menuAdmin !== undefined && menuAdmin.length > 0) return menuAdminView;

    try {
      const response = await matizeAPI.get('admin-dashboard');
      menuAdminView = response.data;
      setMenuAdmin(menuAdminView);
      return menuAdminView;
    } catch (error) {
      return menuAdminView;
    }
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
