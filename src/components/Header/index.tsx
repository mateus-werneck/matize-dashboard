'use client';
import { MenuButton } from '@Components/Header/MenuButton/index';
import { SideBar } from '@Components/Header/SideBar/index';
import { useState } from 'react';
import { Logo } from './Logo';
import { HeaderLeftContainer, HeaderMainContainer } from './style';

export default () => {
  const [showSideBarText, setShowSiderBarText] = useState<boolean>(true);

  return (
    <HeaderMainContainer>
      <HeaderLeftContainer>
        <Logo>
          <MenuButton hideText={setShowSiderBarText} />
        </Logo>
      </HeaderLeftContainer>
      <SideBar showText={showSideBarText} />
    </HeaderMainContainer>
  );
};
