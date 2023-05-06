'use client';
import { useSidebar } from '@Contexts/SidebarContext';
import React from 'react';
import { MainPanel } from '../style';

interface IDashboard {
  children: React.ReactNode;
}

export function Dashboard({ children }: IDashboard) {
  const { isMinimalActive } = useSidebar();

  const customStyle = {
    width: isMinimalActive() ? 'calc(100vw - 90px)' : 'calc(100vw - 250px)',
    left: isMinimalActive() ? '90px' : '250px'
  };

  return <MainPanel customstyle={customStyle}>{children}</MainPanel>;
}
