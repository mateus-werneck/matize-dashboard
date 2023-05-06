import { matizeV2 } from '@API/matize';
import { Dashboard } from '@Components/Body/Dashboard';
import { Header } from '@Components/Header';
import { SidebarProvider } from '@Contexts/SidebarContext';
import { MenuAdminView } from '@Types/menu';
import { AuthenticatedUser } from '@Types/user';
import { bearerToken } from '@Utils/String';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
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

  const user = session.user as AuthenticatedUser;
  const sidebarMenu = await getSidebarMenu();

  return (
    <SidebarProvider>
      <Header user={user} sidebarMenu={sidebarMenu} />
      <Dashboard>{children}</Dashboard>
    </SidebarProvider>
  );
}

async function getSidebarMenu(): Promise<MenuAdminView[]> {
  const cookieStore = cookies();
  const token = cookieStore.get(String(process.env.MATIZE_COOKIE));

  if (!token) {
    redirect('/api/auth/signin');
  }

  try {
    const response = await matizeV2.get('admin-dashboard', {
      headers: {
        Authorization: bearerToken(token.value)
      }
    });
    const dashboard = response.data as MenuAdminView[];
    return dashboard;
  } catch (error) {
    redirect('/api/auth/signin');
  }
}
