import DefaultHead from '@/app/head';
import { GlobalStyle } from '@/styles/global';
import Header from '@Components/Header';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <DefaultHead />
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
