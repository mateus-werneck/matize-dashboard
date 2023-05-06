'use client';
import { Logo } from '@Components/Header/Logo';
import { MenuButton } from '@Components/Header/MenuButton/index';
import { SearchBar } from '@Components/Header/SearchBar';
import { HeaderLeftContainer, HeaderMainContainer } from './style';

export function Header() {
  return (
    <HeaderMainContainer>
      <HeaderLeftContainer>
        <Logo>
          <MenuButton />
        </Logo>
        <SearchBar />
        {/* <AccountBar /> */}
      </HeaderLeftContainer>
      {/* <SideBar /> */}
    </HeaderMainContainer>
  );
}
