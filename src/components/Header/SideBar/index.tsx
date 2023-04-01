import { matizeAPI } from '@API/matize';
import { useMemo, useState } from 'react';
import { NavBarItem } from './NavItem';
import { HeaderNavBar, SideBarContainer } from './style';

interface SideBarProps {
  showText: boolean;
}
export const SideBar = ({ showText }: SideBarProps) => {
  const { dashboard } = useDashboard();

  return (
    <SideBarContainer>
      <HeaderNavBar>
        <NavBarItem route="/" name="Dashboard" icon="HomeIcon" />
        {dashboard}
      </HeaderNavBar>
    </SideBarContainer>
  );
};

function useDashboard() {
  const [dashboard, setDashboard] = useState<any[]>([]);

  async function findAll() {
    const response = await matizeAPI.get('admin-dashboard');
    const dashboard = getDashboard(response.data);
    setDashboard(dashboard);
  }

  function getDashboard(data: any[]) {
    return dashboard.map((menu) => (
      <NavBarItem
        key={menu['name'] + '-' + menu['icon']}
        route={menu['route']}
        name={menu['name']}
        icon={menu['icon']}
      />
    ));
  }

  useMemo(() => {
    findAll();
  }, []);

  return { dashboard };
}
