import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import React from 'react';
import { NavBarLine, NavBarLink } from './style';

interface NavBarItemProps {
  route: string;
  name: string;
  icon?: string;
}

export const NavBarItem = ({ route, name, icon }: NavBarItemProps) => {
  return (
    <NavBarLine>
      <NavBarLink href={route}>
        <span>{name}</span>
        {getIcon(icon ? icon : '')}
      </NavBarLink>
    </NavBarLine>
  );
};

const MenuIcons: MenuIconsType = {
  HomeIcon: <HomeIcon />,
  InventoryIcon: <InventoryIcon />,
  PersonIcon: <PersonIcon />,
  ShoppingBasketIcon: <ShoppingBasketIcon />
};

type MenuIconsType = {
  [key: string]: React.ReactNode;
};

function getIcon(icon: string) {
  if (icon == '') return <></>;
  return MenuIcons[icon];
}
