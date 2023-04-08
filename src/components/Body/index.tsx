'use client';
import Header from '@Components/Header';
import React, { useState } from 'react';
import { GlobalBody, MainContainer, MainPanel } from './style';

interface MatizeBodyProps {
  children: React.ReactNode;
}

export const MatizeBody = ({ children }: MatizeBodyProps) => {
  const [showSideBarText, setShowSiderBarText] = useState<boolean>(true);

  return (
    <GlobalBody>
      <MainContainer>
        <Header
          showSideBarText={showSideBarText}
          setShowSiderBarText={setShowSiderBarText}
        />
        <MainPanel style={{ left: showSideBarText ? '250px' : '90px' }}>
          {children}
        </MainPanel>
      </MainContainer>
    </GlobalBody>
  );
};
