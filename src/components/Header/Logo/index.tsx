import {
  HeaderLogoContainer,
  LogoLink,
  LogoName,
  LogoNameContainer
} from '@Components/Header/Logo/style';
import Image from 'next/image';
import React from 'react';

interface LogoProps {
  children: React.ReactNode;
  minimalSidebar: boolean;
}

export const Logo = ({ children, minimalSidebar }: LogoProps) => {
  const LogoImage = () => {
    return (
      <LogoLink href={'/'} style={{ maxHeight: 64, marginBottom: '7px' }}>
        <Image
          src={'/android-icon-192x192-removebg.png'}
          alt="matize-logo-header"
          width={64}
          height={64}
        />
        {!minimalSidebar && (
          <LogoNameContainer>
            <LogoName>Matize</LogoName>
          </LogoNameContainer>
        )}
      </LogoLink>
    );
  };

  return (
    <HeaderLogoContainer style={{ maxWidth: !minimalSidebar ? '250px' : '140px' }}>
      <LogoImage />
      {children}
    </HeaderLogoContainer>
  );
};
