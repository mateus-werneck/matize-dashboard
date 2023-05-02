import { useMenuAdmin } from '@Contexts/MenuAdminContext';
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
  const { getNavBarLink } = useNavBarLink(props);
  return <NavBarLine>{getNavBarLink()}</NavBarLine>;
};

function useNavBarLink({
  route,
  name,
  icon,
  iconPosition,
  iconSize,
  children
}: INavBarItem) {
  const { SideBar } = useMenuAdmin();

  function getNavBarLink(): JSX.Element {
    const customStyle = getCustomStyle();

    return (
      <NavBarLink href={route} customstyle={customStyle}>
        {(isLeftPosition() && children !== undefined) && children}
        {isLeftPosition() && getIcon()}
        {name != '' && (
          <NavBarLinkLabel customstyle={customStyle}>{name}</NavBarLinkLabel>
        )}
         {(!isLeftPosition() && children !== undefined) && children}
        {!isLeftPosition() && getIcon()}
      </NavBarLink>
    );
  }

  function isLeftPosition(): boolean {
    return iconPosition !== undefined && iconPosition === 'left';
  }

  function getCustomStyle() {
    return {
      NavBarLink: {
        justifyContent:
          isLeftStandardStyle() && icon !== 'ArrowForwardIcon'
            ? 'space-evenly'
            : 'space-between',
        svg: {
          marginRight: isLeftStandardStyle() ? '-1.5rem' : '1.5rem'
        }
      },
      NavBarLinkLabel: {
        marginLeft: isLeftStandardStyle() ? '0' : '2.25rem',
        fontSize: icon !== 'ArrowForwardIcon' ? '0.7rem' : '0.6rem'
      }
    };
  }

  function isLeftStandardStyle(): boolean {
    return isLeftPosition() && !SideBar.isMinimalActive();
  }

  function getIcon(): React.ReactNode {
    if (!icon) return <></>;

    let menuIcon = MenuIcons[icon];

    if (iconSize) {
      menuIcon = React.cloneElement(menuIcon as React.ReactElement, {
        style: { fontSize: iconSize }
      });
    }

    return menuIcon;
  }

  return { getNavBarLink, getIcon };
}
