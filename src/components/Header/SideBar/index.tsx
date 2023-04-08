import { matizeAPI } from '@API/matize';
import { useEffect, useMemo, useState } from 'react';
import { NavBarItem } from './NavItem';
import { HeaderNavBar, SideBarContainer } from './style';

interface SideBarProps {
  showText: boolean;
}
export const SideBar = ({ showText }: SideBarProps) => {
  const { dashboard } = useDashboard(showText);

  return (
    <SideBarContainer style={{ maxWidth: showText ? '250px' : '90px' }}>
      <HeaderNavBar style={{ alignItems: showText ? 'inherit' : 'center' }}>
        {dashboard}
      </HeaderNavBar>
    </SideBarContainer>
  );
};

function useDashboard(showText: boolean) {
  const [rawDashboard, setRawDashboard] = useState<any[]>([]);
  const [dashboard, setDashboard] = useState<JSX.Element[]>([]);

  async function appendDashboard() {
    const dashboard = await treatDashboard();
    setDashboard(dashboard);
  }

  async function treatDashboard() {
    const standardDashboard = getStandardDashboard()
    let data = rawDashboard;

    if (!rawDashboard.length) data = await appendRawDashboard();

    const newDashboard = data.map((menu) => (
      <NavBarItem
        key={menu['name'] + '-' + menu['icon']}
        route={menu['route']}
        name={showText ? menu['name'] : ''}
        icon={menu['icon']}
      />
    ));

    return standardDashboard.concat(newDashboard);
  }

  async function appendRawDashboard() {
    const response = await matizeAPI.get('admin-dashboard');
    setRawDashboard(response.data);
    return response.data;
  }

  function getStandardDashboard() {
    const name = showText ? 'Dashboard' : '';
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
  }, [showText]);

  return { dashboard };
}
