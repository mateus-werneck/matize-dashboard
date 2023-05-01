'use client';
import { Dashboard } from '@Components/Body/Dashboard';
import { Header } from '@Components/Header';
import { useAuth } from '@Contexts/AuthContext';
import { SidebarProvider } from '@Contexts/SidebarContext';
import { redirect } from 'next/navigation';
import React from 'react';

interface IMainLayout {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  const { hasSession } = useAuth();

  if (!hasSession()) {
    redirect('/login');
  }

  return (
    <SidebarProvider>
      <Header />
      <Dashboard>{children}</Dashboard>
    </SidebarProvider>
  );
}
