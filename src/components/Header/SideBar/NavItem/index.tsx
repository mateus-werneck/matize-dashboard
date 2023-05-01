import { useMenuAdmin } from '@Contexts/MenuAdminContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import WidgetsIcon from '@mui/icons-material/Widgets';
import React from 'react';
import { NavBarLine, NavBarLink, NavBarLinkLabel } from './style';

export interface INavBarItem {
  route: string;
  name: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

const MenuIcons: MenuIconsType = {
  HomeIcon: <HomeIcon />,
  InventoryIcon: <InventoryIcon />,
  PersonIcon: <PersonIcon />,
  ShoppingBasketIcon: <ShoppingBasketIcon />,
  AccountCircleIcon: <AccountCircleIcon />,
  StandardIcon: <WidgetsIcon />
};

type MenuIconsType = {
  [key: string]: React.ReactNode;
};

export const NavBarItem = (props: INavBarItem) => {
  const { getNavBarLink } = useNavBarLink(props);
  return <NavBarLine>{getNavBarLink()}</NavBarLine>;
};

function useNavBarLink({ route, name, icon, iconPosition }: INavBarItem) {
  const { SideBar } = useMenuAdmin();

  function getNavBarLink(): JSX.Element {
    const customStyle = getCustomStyle();
    return (
      <NavBarLink href={route} customstyle={customStyle}>
        {isLeftPosition() && getIcon(icon ? icon : 'StandardIcon')}
        {name != '' && (
          <NavBarLinkLabel customstyle={customStyle}>{name}</NavBarLinkLabel>
        )}
        {!isLeftPosition() && getIcon(icon ? icon : 'StandardIcon')}
      </NavBarLink>
    );
  }

  function isLeftPosition(): boolean {
    return iconPosition !== undefined && iconPosition === 'left';
  }

  function getCustomStyle() {
    return {
      NavBarLink: {
        justifyContent: isLeftStandardStyle() ? 'space-evenly' : 'space-between',
        svg: {
          marginRight: isLeftStandardStyle() ? '-1.5rem' : '0.5rem'
        }
      },
      NavBarLinkLabel: {
        marginLeft: isLeftStandardStyle() ? '0' : '2.25rem'
      }
    };
  }

  function isLeftStandardStyle(): boolean {
    return isLeftPosition() && !SideBar.isMinimalActive();
  }

  function getIcon(icon: string) {
    const menuIcon = MenuIcons[icon];
    if (!menuIcon) return MenuIcons.StandardIcon;

    return menuIcon;
  }

  return { getNavBarLink, getIcon };
}
