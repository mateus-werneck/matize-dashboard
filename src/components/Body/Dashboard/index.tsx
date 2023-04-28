import { useSidebar } from '@Contexts/SidebarContext';
import React from 'react';
import { MainPanel } from '../style';

interface IDashboard {
  children: React.ReactNode;
}

export function Dashboard({ children }: IDashboard) {
  const { minimalSidebar } = useSidebar();

  return (
    <MainPanel
     customStyle={{
      width: minimalSidebar ? 'calc(100vw - 90px)' : 'calc(100vw - 250px)',
      left: minimalSidebar ? '90px' : '250px'
     }}
    >
      {children}
    </MainPanel>
  );
}
