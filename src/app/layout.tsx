import { MatizeBody } from '@Components/Body';
import { AuthProvider } from '@Contexts/AuthContext';
import { GlobalStyle } from '@Styles/global';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata= {
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
  return (
    <AuthProvider>
      <html lang="en">
        <GlobalStyle />
        <MatizeBody>{children}</MatizeBody>
      </html>
    </AuthProvider>
  );
}
