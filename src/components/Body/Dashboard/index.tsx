import { useMenuAdmin } from '@Contexts/MenuAdminContext';
import React from 'react';
import { MainPanel } from '../style';

interface IDashboard {
  children: React.ReactNode;
}

export function Dashboard({ children }: IDashboard) {
  const { SideBar } = useMenuAdmin();

  const customStyle = {
    width: SideBar.minimalSidebar ? 'calc(100vw - 90px)' : 'calc(100vw - 250px)',
    left: SideBar.minimalSidebar ? '90px' : '250px'
  };

  return <MainPanel customstyle={customStyle}>{children}</MainPanel>;
}
