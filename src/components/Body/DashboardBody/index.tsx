import { useSidebar } from '@Contexts/SidebarContext';
import React from 'react';
import { MainPanel } from '../style';

interface DashboardBodyProps {
  children: React.ReactNode;
}

export function DashboardBody({ children }: DashboardBodyProps) {
  const { minimalSidebar } = useSidebar();

  return (
    <MainPanel
      style={{
        width: minimalSidebar ? 'calc(100vw - 90px)' : 'calc(100vw - 250px)',
        left: minimalSidebar ? '90px': '250px'
      }}
    >
      {children}
    </MainPanel>
  );
}
