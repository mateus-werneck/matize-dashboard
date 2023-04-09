'use client';
import { MainPanel } from '@Components/Body/style';
import { Header } from '@Components/Header';
import { useAuth } from '@Contexts/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { hasSession } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!hasSession()) router.push('/login');
  }, []);

  return (
    <MainPanel>
      <Header />
      {children}
    </MainPanel>
  );
}
