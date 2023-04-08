'use client';
import Header from '@Components/Header';
import React from 'react';
import { GlobalBody } from './style';

interface MatizeBodyProps {
  children: React.ReactNode;
}

export const MatizeBody = ({ children }: MatizeBodyProps) => {
  return (
    <GlobalBody>
      <Header />
      {children}
      {/* <Footer /> */}
    </GlobalBody>
  );
};
