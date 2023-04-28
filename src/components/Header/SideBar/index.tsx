import { matizeAPI } from '@API/matize';
import { NavBarItem } from '@Components/Header/SideBar/NavItem';
import { useEffect, useMemo, useState } from 'react';
import { HeaderNavBar, SideBarContainer } from './style';

interface ISideBar {
  minimalSidebar: boolean;
}

export type MenuAdminView = {
  matizeId: string;
  parent?: string;
  name: string;
  route: string;
  icon: string;
}

export const SideBar = ({ minimalSidebar }: ISideBar) => {
  const { dashboard } = useDashboard(minimalSidebar);

  return (
    <SideBarContainer style={{ maxWidth: !minimalSidebar ? '250px' : '90px' }}>
      <HeaderNavBar
        style={{ alignItems: !minimalSidebar ? 'inherit' : 'center' }}
      >
        {dashboard}
      </HeaderNavBar>
    </SideBarContainer>
  );
};

function useDashboard(minimalSidebar: boolean) {
  const [rawDashboard, setRawDashboard] = useState<MenuAdminView[]>([]);
  const [dashboard, setDashboard] = useState<JSX.Element[]>([]);

  async function appendDashboard() {
    const dashboard = await treatDashboard();
    setDashboard(dashboard);
  }

  async function treatDashboard() {
    const standardDashboard = getStandardDashboard();
    let data = rawDashboard;

    if (!rawDashboard.length) data = await appendRawDashboard();

    const newDashboard =
      data &&
      data.map((menu) => (
        <NavBarItem
          key={menu['name'] + '-' + menu['icon']}
          route={menu['route']}
          name={!minimalSidebar ? menu['name'] : ''}
          icon={menu['icon']}
        />
      ));

    return standardDashboard.concat(newDashboard ? newDashboard : []);
  }

  async function appendRawDashboard(): Promise<MenuAdminView[]> {
    const response = await matizeAPI.get('admin-dashboard');
    const menuAdmin = response.data;
    setRawDashboard(menuAdmin);
    return menuAdmin;
  }

  function getStandardDashboard() {
    const name = !minimalSidebar ? 'Dashboard' : '';
    const icon = 'HomeIcon';
    return [
      <NavBarItem key={name + '-' + icon} route="/" name={name} icon={icon} />
    ];
  }

  useEffect(() => {
    appendDashboard();
  }, []);

  useMemo(() => {
    appendDashboard();
  }, [minimalSidebar]);

  return { dashboard };
}
