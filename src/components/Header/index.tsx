'use client';
import { MenuButton } from '@Components/Header/MenuButton/index';
import { SideBar } from '@Components/Header/SideBar/index';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { HeaderLeftContainer, HeaderMainContainer } from './style';

interface HeaderProps {
  showSideBarText: boolean;
  setShowSiderBarText: (value: any) => void;
}
export default ({ showSideBarText, setShowSiderBarText }: HeaderProps) => {
  // const [showSideBarText, setShowSiderBarText] = useState<boolean>(true);

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
