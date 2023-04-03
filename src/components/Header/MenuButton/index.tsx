import { MatizeButton } from '@Components/Button';
import MenuIcon from '@mui/icons-material/Menu';

interface MenuButtonProps {
  hideText: (value: any) => any;
}
export const MenuButton = ({hideText}: MenuButtonProps) => {
  const onClick = (value: any) => {
      hideText((previousValue: boolean) => !previousValue)
  };
  return (
    <>
      <MatizeButton
        onClick={onClick}
        variant="text"
        size="small"
        style={{borderRadius: '0px', paddingBottom: '10px' }}
      >
        <MenuIcon fontSize="small" htmlColor="gray" />
      </MatizeButton>
    </>
  );
};
