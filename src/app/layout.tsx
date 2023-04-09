import { MatizeBody } from '@Components/Body';
import { AuthProvider } from '@Contexts/AuthContext';
import { GlobalStyle } from '@Styles/global';
import React from 'react';

export const metadata = {
  title: 'Matize',
  viewport: {
    initialScale: 1,
    width: 'device-wdith'
  },
  manifest: '/manifest.json',
  themeColor: '#ffffff',
  icons: [
    {
      rel: 'shortcut-icon',
      url: './favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      url: './apple-icon-57x57.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      url: './apple-icon-60x60.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      url: './apple-icon-72x72.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      url: './apple-icon-76x76.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x144',
      url: './apple-icon-114x144.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      url: './apple-icon-120x120.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      url: './apple-icon-144x144.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      url: './apple-icon-152x152.png'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: './apple-icon-180x180.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: './android-icon-192x192.png"'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: './favicon-32x32.png"'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      url: './favicon-96x96.png"'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: './favicon-16x16.png"'
    }
  ]
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <AuthProvider>
      <html lang="en">
        <GlobalStyle />
        <MatizeBody>{children}</MatizeBody>
      </html>
    </AuthProvider>
  );
}
