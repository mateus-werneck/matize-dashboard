import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import WidgetsIcon from '@mui/icons-material/Widgets';
import React from 'react';
import { NavBarLine, NavBarLink, NavBarLinkLabel } from './style';

interface NavBarItemProps {
  route: string;
  name: string;
  icon?: string;
}

export const NavBarItem = ({ route, name, icon }: NavBarItemProps) => {
  return (
    <NavBarLine>
      <NavBarLink href={route} aria-label={name}>
        {name != '' && <NavBarLinkLabel>{name}</NavBarLinkLabel>}
        {getIcon(icon ? icon : 'StandardIcon')}
      </NavBarLink>
    </NavBarLine>
  );
};

const MenuIcons: MenuIconsType = {
  HomeIcon: <HomeIcon />,
  InventoryIcon: <InventoryIcon />,
  PersonIcon: <PersonIcon />,
  ShoppingBasketIcon: <ShoppingBasketIcon />,
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
