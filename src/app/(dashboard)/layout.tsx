import { Dashboard } from '@Components/Body/Dashboard';
import { Header } from '@Components/Header';
import { MenuAdminProvider } from '@Contexts/MenuAdminContext';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

interface IMainLayout {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: IMainLayout) {
  const session = await getServerSession();

  if (!session) {
    redirect('/api/auth/signin');
  }
  
  return (
    <MenuAdminProvider>
      <Header />
      <Dashboard>{children}</Dashboard>
    </MenuAdminProvider>
  );
}
