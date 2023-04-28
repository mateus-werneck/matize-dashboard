'use client';
import { Dashboard } from '@Components/Body/Dashboard';
import { Header } from '@Components/Header';
import { useAuth } from '@Contexts/AuthContext';
import { SidebarProvider } from '@Contexts/SidebarContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

interface IMainLayout {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  const { hasSession } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!hasSession()) router.push('/login');
  }, []);

  return (
    <SidebarProvider>
      <Header />
      <Dashboard>{children}</Dashboard>
    </SidebarProvider>
  );
}
