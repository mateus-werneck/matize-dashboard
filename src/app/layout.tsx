import { MatizeBody } from '@Components/Body';
import { GlobalStyle } from '@Styles/global';
import { Metadata } from 'next';
import React from 'react';
import AuthProvider from './AuthProvider';

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

export default async function RootLayout({ children }: IRootLayout) {
  return (
    <AuthProvider>
      <html lang="en">
        <GlobalStyle />
        <MatizeBody>{children}</MatizeBody>
      </html>
    </AuthProvider>
  );
}
