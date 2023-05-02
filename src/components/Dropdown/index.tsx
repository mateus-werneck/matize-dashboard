import { MatizeButton } from '@Components/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState } from 'react';
import {
    DropDownButtonContainer,
    DropDownLine,
    DropDownNav,
    DropDownNavUl
} from './style';

interface IDropDown {
  actions: JSX.Element[];
}

export const MatizeDropDown = ({ actions }: IDropDown) => {
  const { getArrowDownButton, getActions } = useDropDownMenu(actions);
  return (
    <DropDownButtonContainer>
      {getArrowDownButton()}
      {getActions()}
    </DropDownButtonContainer>
  );
};

function useDropDownMenu(actions: JSX.Element[]) {
  const [showDropDown, setDropDownVisibility] = useState<boolean>(false);

  function getArrowDownButton() {
    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      setDropDownVisibility((previousValue: any) => !previousValue);
    }

    return (
      <MatizeButton onClick={onClick} variant="text" size="small">
        <KeyboardArrowDownIcon />
      </MatizeButton>
    );
  }

  function getActions() {
    if (!showDropDown) {
      return <></>;
    }

    return (
      <DropDownNav>
        <DropDownNavUl>
          {actions.map((action, index) => (
            <DropDownLine key={'DropDownLine_' + index + '_' + action.key}>
              {action}
            </DropDownLine>
          ))}
        </DropDownNavUl>
      </DropDownNav>
    );
  }

  return { getArrowDownButton, getActions };
}
