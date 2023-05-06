import { MatizeButton } from '@Components/Button';
import { useSidebar } from '@Contexts/SidebarContext';
import { StyledMenuIcon } from './style';

export const MenuButton = () => {
  const { setMinimalSidebar } = useSidebar();

  const onClick = (value: React.MouseEvent<HTMLButtonElement>) => {
    setMinimalSidebar((previousValue: boolean) => !previousValue);
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
