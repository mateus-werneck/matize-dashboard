import { matizeAPI } from '@API/matize';
import { INavBarItem, NavBarItem } from '@Components/Header/SideBar/NavItem';
import { User, useAuth } from '@Contexts/AuthContext';
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
};

export const SideBar = ({ minimalSidebar }: ISideBar) => {
  const { user } = useAuth();
  const { dashboard } = useDashboard(minimalSidebar, user);

  return (
    <SideBarContainer
      customStyle={{ maxWidth: !minimalSidebar ? '250px' : '90px' }}
    >
      <HeaderNavBar
        customStyle={{ alignItems: !minimalSidebar ? 'inherit' : 'center' }}
      >
        {dashboard}
      </HeaderNavBar>
    </SideBarContainer>
  );
};

function useDashboard(minimalSidebar: boolean, user: User | null) {
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
    const userItem: INavBarItem = {
      route: '/conta',
      name: !minimalSidebar ? (user ? user.fullName : '') : '',
      icon: 'AccountCircleIcon',
      iconPosition: 'left'
    };

    const homeItem: INavBarItem = {
      route: '/',
      name: !minimalSidebar ? 'Dashboard' : '',
      icon: 'HomeIcon'
    };

    return [
      <NavBarItem key={userItem.name + '-' + userItem.icon} {...userItem} />,
      <NavBarItem key={homeItem.name + '-' + homeItem.icon} {...homeItem} />
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
