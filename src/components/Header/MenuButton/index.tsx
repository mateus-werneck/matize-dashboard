import { MatizeButton } from '@Components/Button';
import { StyledMenuIcon } from './style';

interface MenuButtonProps {
  setMinimalSidebar: (value: any) => any;
}
export const MenuButton = ({setMinimalSidebar}: MenuButtonProps) => {
  const onClick = (value: any) => {
      setMinimalSidebar((previousValue: boolean) => !previousValue)
  };
  return (
    <>
      <MatizeButton
        onClick={onClick}
        variant="text"
        size="small"
        style={{borderRadius: '0px', paddingBottom: '10px'}}
      >
        <StyledMenuIcon fontSize="small"/>
      </MatizeButton>
    </>
  );
};
