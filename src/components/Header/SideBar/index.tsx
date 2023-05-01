import { NavBarItem } from '@Components/Header/SideBar/NavItem';
import { useAuth } from '@Contexts/AuthContext';
import { useMenuAdmin } from '@Contexts/MenuAdminContext';
import { useEffect, useMemo, useState } from 'react';
import { HeaderNavBar, SideBarContainer } from './style';

export type MenuAdminView = {
  matizeId: string;
  parent?: string;
  name: string;
  route: string;
  icon: string;
};

export const SideBar = () => {
  const { SideBar } = useMenuAdmin();
  const { dashboard } = useDashboard();

  return (
    <SideBarContainer
      customstyle={{ maxWidth: !SideBar.isMinimalActive() ? '250px' : '90px' }}
    >
      <HeaderNavBar
        customstyle={{
          alignItems: !SideBar.isMinimalActive() ? 'inherit' : 'center'
        }}
      >
        {dashboard}
      </HeaderNavBar>
    </SideBarContainer>
  );
};

function useDashboard() {
  const [dashboard, setDashboard] = useState<JSX.Element[]>([]);
  const { SideBar, MenuAdmin } = useMenuAdmin();
  const { user } = useAuth();

  useEffect(() => {
    renderDashboard();
  }, []);

  useMemo(() => {
    renderDashboard();
  }, [SideBar.minimalSidebar]);

  async function renderDashboard() {
    const menuAdmin = await MenuAdmin.refreshMenu();
    const dashboard = getTreatedDashboard(menuAdmin);
    setDashboard(dashboard);
  }

  function getTreatedDashboard(
    customDashboard: MenuAdminView[]
  ): JSX.Element[] {
    const treatedDashboard = customDashboard.map((menu) => (
      <NavBarItem
        key={menu['name'] + '-' + menu['icon']}
        route={menu['route']}
        name={getNavBarItemName(menu['name'])}
        icon={menu['icon']}
        iconPosition={getNavBarItemIconPosition(menu['name'])}
      />
    ));

    if (!treatedDashboard) return [] as JSX.Element[];

    return treatedDashboard;
  }

  function getNavBarItemName(name: string): string {
    if (SideBar.isMinimalActive()) name = '';

    if (name === 'Conta' && user) name = user.fullName;

    return name;
  }

  function getNavBarItemIconPosition(name: string): 'left' | 'right' {
    if (name === 'Conta') return 'left';

    return 'right';
  }

  return { dashboard };
}
