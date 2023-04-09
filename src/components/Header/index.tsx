import { Logo } from '@Components/Header/Logo';
import { MenuButton } from '@Components/Header/MenuButton/index';
import { SearchBar } from '@Components/Header/SearchBar';
import { SideBar } from '@Components/Header/SideBar';
import { useState } from 'react';
import { HeaderLeftContainer, HeaderMainContainer } from './style';

export function Header() {
  const [showSideBarText, setShowSiderBarText] = useState<boolean>(true);

  return (
    <HeaderMainContainer>
      <HeaderLeftContainer>
        <Logo showText={showSideBarText}>
          <MenuButton hideText={setShowSiderBarText} />
        </Logo>
        <SearchBar />
      </HeaderLeftContainer>
      <SideBar showText={showSideBarText} />
    </HeaderMainContainer>
  );
};
