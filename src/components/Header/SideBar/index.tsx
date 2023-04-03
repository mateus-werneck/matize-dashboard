import { matizeAPI } from '@API/matize';
import { useMemo, useState } from 'react';
import { NavBarItem } from './NavItem';
import { HeaderNavBar, SideBarContainer } from './style';

interface SideBarProps {
  showText: boolean;
}
export const SideBar = ({ showText }: SideBarProps) => {
  const { dashboard } = useDashboard(showText);

  return (
    <SideBarContainer style={{ maxWidth: showText ? '250px' : '90px' }}>
      <HeaderNavBar style={{alignItems: showText ? 'inherit' : 'center'}}>
        <NavBarItem
          route="/"
          name={showText ? 'Dashboard' : ''}
          icon="HomeIcon"
        />
        {dashboard}
      </HeaderNavBar>
    </SideBarContainer>
  );
};

function useDashboard(showText: boolean) {
  const [rawDashboard, setRawDashboard] = useState<any[]>([]);
  const [dashboard, setDashboard] = useState<any[]>([]);

  async function appendDashboard() {
    const dashboard = await treatDashboard();
    setDashboard(dashboard);
  }

  async function treatDashboard() {
    if (!rawDashboard.length) await appendRawDashboard();

    return rawDashboard.map((menu) => (
      <NavBarItem
        key={menu['name'] + '-' + menu['icon']}
        route={menu['route']}
        name={showText ? menu['name'] : ''}
        icon={menu['icon']}
      />
    ));
  }

  async function appendRawDashboard() {
    const response = await matizeAPI.get('admin-dashboard');
    setRawDashboard(response.data);
  }

  useMemo(() => {
    appendDashboard();
  }, [showText]);

  return { dashboard };
}
