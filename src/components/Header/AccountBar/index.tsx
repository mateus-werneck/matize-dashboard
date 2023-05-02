import { MatizeDropDown } from '@Components/Dropdown';
import { useAuth } from '@Contexts/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AccountBarContainer, StyledProfileButton } from './style';

export const AccountBar = () => {
  const { user } = useAuth();
  const { getAccountDropDown } = useDropDown();

  return (
    <AccountBarContainer>
      <AccountCircleIcon />
      <span>{user?.fullName}</span>
      {getAccountDropDown()}
    </AccountBarContainer>
  );
};

function useDropDown() {
  const Auth = useAuth();

  function getAccountDropDown(): JSX.Element {
    return <MatizeDropDown actions={getDropDownActions()} />;
  }

  function getDropDownActions(): JSX.Element[] {
    return [
      <StyledProfileButton href="/conta">Perfil</StyledProfileButton>,
      getDropDownSignOutButton()
    ];
  }

  function getDropDownSignOutButton(): JSX.Element {
    function onClick() {
      Auth.signOut();
    }
    return (
      <StyledProfileButton href="#" onClick={onClick}>
        Sair
      </StyledProfileButton>
    );
  }

  return { getAccountDropDown };
}
