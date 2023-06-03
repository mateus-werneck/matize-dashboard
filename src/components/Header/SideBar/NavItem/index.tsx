import { useSidebar } from '@Contexts/SidebarContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
  iconSize?: 'small' | 'medium' | 'large' | 'inherit';
  children?: React.ReactNode;
}

interface INavLink extends INavBarItem {
  icon: string;
  iconSize: 'small' | 'medium' | 'large' | 'inherit';
}

const MenuIcons: MenuIconsType = {
  HomeIcon: <HomeIcon />,
  InventoryIcon: <InventoryIcon />,
  PersonIcon: <PersonIcon />,
  ShoppingBasketIcon: <ShoppingBasketIcon />,
  AccountCircleIcon: <AccountCircleIcon />,
  StandardIcon: <WidgetsIcon />,
  ArrowForwardIcon: <ArrowForwardIcon />
};

type MenuIconsType = {
  [key: string]: React.ReactNode;
};

export const NavBarItem = (props: INavBarItem) => {
  const navBarLinkProps = {
    ...props,
    icon: props.icon == undefined ? 'StandardIcon' : props.icon,
    iconSize: props.iconSize == undefined ? 'small' : props.iconSize
  };

  const { getNavBarLink } = useNavBarLink(navBarLinkProps);
  return <NavBarLine>{getNavBarLink()}</NavBarLine>;
};

function useNavBarLink(props: INavLink) {
  const { isMinimalActive } = useSidebar();

  function getNavBarLink(): JSX.Element {
    return <NavBarLink href={props.route}>{getNavBarLabel()}</NavBarLink>;
  }

  function getNavBarLabel(): JSX.Element {
    return (
      <>
        {isIconLeftPosition() && getIcon()}
        <NavBarLinkLabel
          customProps={{
            display: props.name == '' ? 'none' : 'block',
            marginLeft: isLeftStandardStyle() ? '0' : '2.25rem',
            fontSize: props.icon !== 'ArrowForwardIcon' ? '0.7rem' : '0.6rem'
          }}
        >
          {props.name}
        </NavBarLinkLabel>
        {!isIconLeftPosition() && getIcon()}
      </>
    );
  }

  function isLeftStandardStyle(): boolean {
    return isIconLeftPosition() && !isMinimalActive();
  }

  function isIconLeftPosition(): boolean {
    return String(props.iconPosition) === 'left';
  }

  function getIcon(): React.ReactNode {
    const menuIcon = MenuIcons[props.icon];

    return React.cloneElement(menuIcon as React.ReactElement, {
      fontSize: isMinimalActive() ? 'medium' : props.iconSize
    });
  }

  return { getNavBarLink, getIcon };
}
