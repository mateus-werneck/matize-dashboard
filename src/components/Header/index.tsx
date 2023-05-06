'use client';
import { AccountBar } from '@Components/Header/AccountBar';
import { Logo } from '@Components/Header/Logo';
import { MenuButton } from '@Components/Header/MenuButton/index';
import { SearchBar } from '@Components/Header/SearchBar';
import { MenuAdminView } from '@Types/menu';
import { SideBar } from './SideBar';
import { HeaderLeftContainer, HeaderMainContainer } from './style';

interface IHeader {
  sidebarMenu: MenuAdminView[];
}

export function Header({ sidebarMenu }: IHeader) {
  return (
      <HeaderMainContainer>
        <HeaderLeftContainer>
          <Logo>
            <MenuButton />
          </Logo>
          <SearchBar />
          <AccountBar />
        </HeaderLeftContainer>
        <SideBar sidebarMenu={sidebarMenu} />
      </HeaderMainContainer>
  );
}
