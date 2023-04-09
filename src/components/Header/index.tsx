import { Logo } from '@Components/Header/Logo';
import { MenuButton } from '@Components/Header/MenuButton/index';
import { SearchBar } from '@Components/Header/SearchBar';
import { SideBar } from '@Components/Header/SideBar';
import { useSidebar } from '@Contexts/SidebarContext';
import { HeaderLeftContainer, HeaderMainContainer } from './style';

export function Header() {
  const { minimalSidebar, setMinimalSidebar } = useSidebar();

  return (
    <HeaderMainContainer>
      <HeaderLeftContainer>
        <Logo minimalSidebar={minimalSidebar}>
          <MenuButton setMinimalSidebar={setMinimalSidebar} />
        </Logo>
        <SearchBar />
      </HeaderLeftContainer>
      <SideBar minimalSidebar={minimalSidebar} />
    </HeaderMainContainer>
  );
}
