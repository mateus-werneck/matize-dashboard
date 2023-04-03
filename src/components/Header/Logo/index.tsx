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
}

export const Logo = ({ children }: LogoProps) => {
  return (
    <HeaderLogoContainer>
      <LogoImage />
      {children}
    </HeaderLogoContainer>
  );
};

const LogoImage = () => {
  return (
    <LogoLink href={'/'} style={{ maxHeight: 64, marginBottom: '7px' }}>
      <Image
        src={'/android-icon-192x192-removebg.png'}
        alt="matize-logo-header"
        width={64}
        height={64}
      />
      <LogoNameContainer>
        <LogoName>Matize</LogoName>
      </LogoNameContainer>
    </LogoLink>
  );
};
