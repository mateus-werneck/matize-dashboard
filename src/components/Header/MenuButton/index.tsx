import { MatizeButton } from '@Components/Button';
import { useMenuAdmin } from '@Contexts/MenuAdminContext';
import { StyledMenuIcon } from './style';

export const MenuButton = () => {
  const { SideBar } = useMenuAdmin();

  const onClick = (value: any) => {
    SideBar.setMinimalSidebar((previousValue: boolean) => !previousValue);
  };
  return (
    <>
      <MatizeButton
        onClick={onClick}
        variant="text"
        size="small"
        style={{ borderRadius: '0px', paddingBottom: '10px' }}
      >
        <StyledMenuIcon fontSize="small" />
      </MatizeButton>
    </>
  );
};
