import { MatizeDropDown } from '@Components/Dropdown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signOut, useSession } from 'next-auth/react';
import { AccountBarContainer, StyledProfileButton } from './style';

export const AccountBar = () => {
  const { data } = useSession();
  const user = data?.user;
  const { getAccountDropDown } = useDropDown();

  return (
    <AccountBarContainer>
      <AccountCircleIcon />
      <span>{user?.name}</span>
      {getAccountDropDown()}
    </AccountBarContainer>
  );
};

function useDropDown() {
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
      signOut();
    }
    return (
      <StyledProfileButton href="#" onClick={onClick}>
        Sair
      </StyledProfileButton>
    );
  }

  return { getAccountDropDown };
}
