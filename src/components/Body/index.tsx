'use client';
import Header from '@Components/Header';
import { useAuth } from '@Contexts/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GlobalBody, MainContainer, MainPanel } from './style';

interface MatizeBodyProps {
  children: React.ReactNode;
}

export const MatizeBody = ({ children }: MatizeBodyProps) => {
  const { hasSession } = useAuth();
  const pathName = usePathname();
  const router = useRouter();
  const [showSideBarText, setShowSiderBarText] = useState<boolean>(true);

  useEffect(() => {
    if (!hasSession() && pathName != 'login') router.push('/login');
  }, []);

  return (
    <GlobalBody>
      <MainContainer>
        {hasSession() && (
          <>
            <Header
              showSideBarText={showSideBarText}
              setShowSiderBarText={setShowSiderBarText}
            />
          </>
        )}
        {pathName == '/login' && (
          <>
            <MainPanel style={{ left: showSideBarText ? '250px' : '90px' }}>
              {children}
            </MainPanel>
          </>
        )}
      </MainContainer>
    </GlobalBody>
  );
};
