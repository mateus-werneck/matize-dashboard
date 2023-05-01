import { MatizeBody } from '@Components/Body';
import { AuthProvider } from '@Contexts/AuthContext';
import { withSession } from '@Lib/session';
import { GlobalStyle } from '@Styles/global';
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

  return (
    <AuthProvider userAuthenticated={userAuthenticated}>
      <html lang="en">
        <GlobalStyle />
        <MatizeBody>{children}</MatizeBody>
      </html>
    </AuthProvider>
  );
}
