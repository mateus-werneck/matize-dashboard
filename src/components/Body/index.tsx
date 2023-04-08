'use client';
import Header from '@Components/Header';
import React from 'react';
import { GlobalBody, MainContainer, MainPanel } from './style';

interface MatizeBodyProps {
  children: React.ReactNode;
}

export const MatizeBody = ({ children }: MatizeBodyProps) => {
  return (
    <GlobalBody>
      <MainContainer>
        <Header />
        <MainPanel>{children}</MainPanel>
        {/* <Footer /> */}
      </MainContainer>
    </GlobalBody>
  );
};
