import {
  HeaderLogoContainer,
  LogoLink,
  LogoName,
  LogoNameContainer
} from '@Components/Header/Logo/style';
import { useMenuAdmin } from '@Contexts/MenuAdminContext';
import Image from 'next/image';
import React from 'react';

interface IMatizeLogo {
  children: React.ReactNode;
}

export const Logo = ({ children }: IMatizeLogo) => {
  const { SideBar } = useMenuAdmin();

  const LogoImage = () => {
    return (
      <LogoLink href={'/'} style={{ maxHeight: 64, marginBottom: '7px' }}>
        <Image
          src={'/images/android-icon-192x192-removebg.png'}
          alt="matize-logo-header"
          width={64}
          height={64}
        />
        {!SideBar.minimalSidebar && (
          <LogoNameContainer>
            <LogoName>Matize</LogoName>
          </LogoNameContainer>
        )}
      </LogoLink>
    );
  };

  return (
    <HeaderLogoContainer
      style={{ maxWidth: !SideBar.minimalSidebar ? '250px' : '140px' }}
    >
      <LogoImage />
      {children}
    </HeaderLogoContainer>
  );
};
