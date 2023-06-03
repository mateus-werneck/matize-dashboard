import { MatizeDropDown } from '@Components/Dropdown';
import { NavBarItem } from '@Components/Header/SideBar/NavItem';
import { useSidebar } from '@Contexts/SidebarContext';
import { MenuAdminView } from '@Types/menu';
import { AuthenticatedUser } from '@Types/user';
import { useMemo, useState } from 'react';
import { HeaderNavBar, SideBarContainer } from './style';

interface ISideBar {
  user: AuthenticatedUser;
  sidebarMenu: MenuAdminView[];
}

export const SideBar = ({ user, sidebarMenu }: ISideBar) => {
  const { isMinimalActive } = useSidebar();
  const { dashboard } = useDashboard(user, sidebarMenu);

  return (
    <SideBarContainer
      customstyle={{ maxWidth: !isMinimalActive() ? '250px' : '90px' }}
    >
      <HeaderNavBar
        customstyle={{
          alignItems: !isMinimalActive() ? 'inherit' : 'center'
        }}
      >
        {dashboard}
      </HeaderNavBar>
    </SideBarContainer>
  );
};

function useDashboard(user: AuthenticatedUser, sideBarMenu: MenuAdminView[]) {
  const { isMinimalActive, minimalSidebar } = useSidebar();
  const [dashboard, setDashboard] = useState<JSX.Element[]>(
    getTreatedDashboard(sideBarMenu)
  );

  useMemo(() => {
    renderDashboard();
  }, [minimalSidebar]);

  async function renderDashboard() {
    const dashboard = getTreatedDashboard(sideBarMenu);
    setDashboard(dashboard);
  }

  function getTreatedDashboard(
    customDashboard: MenuAdminView[]
  ): JSX.Element[] {
    if (!customDashboard) {
      return [] as JSX.Element[];
    }

    const treatedDashboard = customDashboard.map((menu) =>
      getEachParentMenu(menu)
    );

    if (!treatedDashboard) return [] as JSX.Element[];

    return treatedDashboard;
  }

  function getEachParentMenu(menu: MenuAdminView): JSX.Element {
    if (menu.parentId === null && menu.Children.length > 0) {
      return getNavBarItemWithChildren(menu);
    }

    return getNavBarItem(menu);
  }

  function getNavBarItem(menu: MenuAdminView): JSX.Element {
    const customProps = getNavBarCustomProps(menu);

    return (
      <NavBarItem
        key={menu['name'] + '-' + menu['icon']}
        route={menu['route']}
        icon={menu['icon']}
        {...customProps}
      />
    );
  }

  function getNavBarCustomProps(menu: MenuAdminView) {
    return {
      name: getNavBarItemName(menu['name']),
      iconPosition: getNavBarItemIconPosition(menu),
      iconSize: getNavBarItemIconSize(menu)
    };
  }

  function getNavBarItemName(name: string): string {
    if (isMinimalActive()) name = '';

    if (name === 'Conta' && user.name) name = user.name;

    return name;
  }

  function getNavBarItemIconPosition(menu: MenuAdminView): 'left' | 'right' {
    let iconPosition: 'left' | 'right' = 'left';

    if (menu.icon === 'ArrowForwardIcon') iconPosition = 'right';

    return iconPosition;
  }

  function getNavBarItemIconSize(
    menu: MenuAdminView
  ): 'small' | 'medium' | 'large' | 'inherit' | undefined {
    let iconSize: 'small' | 'medium' | 'large' | 'inherit' | undefined =
      'inherit';

    if (menu.name === 'Conta' && user.name) iconSize = 'medium';

    if (menu.icon === 'ArrowForwardIcon') iconSize = 'small';

    return iconSize;
  }

  function getNavBarItemWithChildren(menu: MenuAdminView) {
    const actions = menu.Children.map((child) => getNavBarItem(child));
    return (
      <div>
        <MatizeDropDown
          key={menu['name'] + '-' + menu['icon'] + '-dropdown'}
          actions={actions}
          button={getNavBarItem(menu)}
          // arrowStyles={{ marginLeft: '5.25rem' }}
          dropDownStyles={{
            marginTop: 0,
            marginLeft: 0,
            width: '250px',
            border: 'none',
            borderRadius: 0,
            boxShadow: 'none'
          }}
        />
      </div>
    );
  }

  return { dashboard };
}
