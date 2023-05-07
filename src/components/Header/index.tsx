'use client';
import { AccountBar } from '@Components/Header/AccountBar';
import { Logo } from '@Components/Header/Logo';
import { MenuButton } from '@Components/Header/MenuButton/index';
import { SearchBar } from '@Components/Header/SearchBar';
import { MenuAdminView } from '@Types/menu';
import { AuthenticatedUser } from '@Types/user';
import { signOut } from 'next-auth/react';
import { SideBar } from './SideBar';
import { HeaderLeftContainer, HeaderMainContainer } from './style';

interface IHeader {
  user: AuthenticatedUser;
  sidebarMenu: MenuAdminView[];
}

export function Header({ user, sidebarMenu }: IHeader) {
  if (sidebarMenu.length === 0) {
    signOut({
      redirect: true,
      callbackUrl: '/api/auth/signin'
    })
  }

  return (
      <HeaderMainContainer>
        <HeaderLeftContainer>
          <Logo>
            <MenuButton />
          </Logo>
          <SearchBar />
          <AccountBar />
        </HeaderLeftContainer>
        <SideBar user={user} sidebarMenu={sidebarMenu} />
      </HeaderMainContainer>
  );
}
