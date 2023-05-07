import { matizeV2 } from '@API/matize';
import { nextAuthOptions } from '@Auth/route';
import { Dashboard } from '@Components/Body/Dashboard';
import { Header } from '@Components/Header';
import { SidebarProvider } from '@Contexts/SidebarContext';
import { MenuAdminView } from '@Types/menu';
import { MatizeSession } from '@Types/session';
import { AuthenticatedUser } from '@Types/user';
import { bearerToken } from '@Utils/String';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

interface IMainLayout {
  children: React.ReactNode;
}

export default async function MainLayout({ children }: IMainLayout) {
  const session = await getServerSession(nextAuthOptions) as MatizeSession;

  if (!session) {
    redirect('/api/auth/signin');
  }

  const user = session.user as AuthenticatedUser;
  const sidebarMenu = await getSidebarMenu(session);

  return (
    <SidebarProvider>
      <Header user={user} sidebarMenu={sidebarMenu} />
      <Dashboard>{children}</Dashboard>
    </SidebarProvider>
  );
}

async function getSidebarMenu(session: any): Promise<MenuAdminView[]> { 
  console.log(session);
  let dashboard = [] as MenuAdminView[];

  if (!session.access_token) {
    return dashboard;
  }

  try {
    const response = await matizeV2.get('admin-dashboard', {
      headers: {
        Authorization: bearerToken(session.access_token)
      }
    });
    dashboard = response.data as MenuAdminView[];
    return dashboard;
  } catch (error) {
    return dashboard;
  }
}
