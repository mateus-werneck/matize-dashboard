import { Logo } from '@Components/Header/Logo';
import { MenuButton } from '@Components/Header/MenuButton/index';
import { SearchBar } from '@Components/Header/SearchBar';
import { SideBar } from '@Components/Header/SideBar';
import { HeaderLeftContainer, HeaderMainContainer } from './style';

export function Header() {
  return (
    <HeaderMainContainer>
      <HeaderLeftContainer>
        <Logo>
          <MenuButton />
        </Logo>
        <SearchBar />
      </HeaderLeftContainer>
      <SideBar />
    </HeaderMainContainer>
  );
}
