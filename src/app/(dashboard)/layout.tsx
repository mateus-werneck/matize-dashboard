'use client';
import { DashboardBody } from '@Components/Body/DashboardBody';
import { Header } from '@Components/Header';
import { useAuth } from '@Contexts/AuthContext';
import { SidebarProvider, useSidebar } from '@Contexts/SidebarContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { minimalSidebar } = useSidebar();

  const { hasSession } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!hasSession()) router.push('/login');
  }, []);

  return (
    <SidebarProvider>
      <Header />
      <DashboardBody>
        {children}
      </DashboardBody>
    </SidebarProvider>
  );
}
