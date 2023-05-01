import { MatizeBody } from '@Components/Body';
import { AuthProvider } from '@Contexts/AuthContext';
import { MenuAdminProvider } from '@Contexts/MenuAdminContext';
import { getMenuAdmin, withSession } from '@Lib/session';
import { GlobalStyle } from '@Styles/global';
import { MenuAdminView } from '@Types/menu';
import { Metadata } from 'next';
import React, { use } from 'react';

export const metadata: Metadata = {
  title: 'Matize',
  viewport: {
    initialScale: 1,
    width: 'device-wdith'
  },
  manifest: '/images/manifest.json',
  themeColor: '#ffffff',
  icons: {
    icon: '/images/favicon.ico'
  }
};

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
  const userAuthenticated = use(withSession());
  let menuAdmin = [] as MenuAdminView[];

  if (userAuthenticated) {
    menuAdmin = use(getMenuAdmin());
  }

  return (
    <AuthProvider userAuthenticated={userAuthenticated}>
      <MenuAdminProvider preLoadedMenu={menuAdmin}>
        <html lang="en">
          <GlobalStyle />
          <MatizeBody>{children}</MatizeBody>
        </html>
      </MenuAdminProvider>
    </AuthProvider>
  );
}
