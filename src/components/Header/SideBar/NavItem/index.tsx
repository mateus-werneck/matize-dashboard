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

export const NavBarItem = ({
  route,
  name,
  icon,
  iconPosition
}: INavBarItem) => {
  function getNavBarLink() {
    const position = iconPosition ? iconPosition : 'right';

    const customStyle = {
      NavBarLink: {
        justifyContent: position === 'left' ? 'space-evenly' : 'space-between',
        svg: {
          marginRight: position === 'left' ? '-1.5rem' : '0.5rem',
        }
      },
      NavBarLinkLabel: {
        marginLeft: position === 'left' ? '0' : '2.25rem',
      }
    }

    if (position === 'left') {
      return (
        <NavBarLink href={route} customStyle={customStyle}>
          {getIcon(icon ? icon : 'StandardIcon')}
          {name != '' && <NavBarLinkLabel customStyle={customStyle}>{name}</NavBarLinkLabel>}
        </NavBarLink>
      );
    }

    return (
      <NavBarLink href={route} customStyle={customStyle}>
        {name != '' && <NavBarLinkLabel customStyle={customStyle}>{name}</NavBarLinkLabel>}
        {getIcon(icon ? icon : 'StandardIcon')}
      </NavBarLink>
    );
  }

  return <NavBarLine>{getNavBarLink()}</NavBarLine>;
};

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

function getIcon(icon: string) {
  const menuIcon = MenuIcons[icon];
  if (!menuIcon) return MenuIcons.StandardIcon;

  return menuIcon;
}
