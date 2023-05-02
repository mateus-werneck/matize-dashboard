import { MatizeButton } from '@Components/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { CSSProperties, useState } from 'react';
import {
  DropDownButtonContainer,
  DropDownLine,
  DropDownNav,
  DropDownNavUl
} from './style';

interface IDropDown {
  actions: JSX.Element[];
  button?: JSX.Element;
  arrowStyles?: CSSProperties;
  dropDownStyles?: CSSProperties;
}

export const MatizeDropDown = (props: IDropDown) => {
  const { getArrowDownButton, getActions } = useDropDownMenu(props);
  return (
    <DropDownButtonContainer>
      {getArrowDownButton()}
      {getActions()}
    </DropDownButtonContainer>
  );
};

function useDropDownMenu({ actions, button, arrowStyles, dropDownStyles}: IDropDown) {
  const [showDropDown, setDropDownVisibility] = useState<boolean>(false);

  function getArrowDownButton() {
    function onClick(e: React.MouseEvent<HTMLButtonElement>) {
      e.preventDefault();
      setDropDownVisibility((previousValue: any) => !previousValue);
    }

    const arrowButton = (
      <MatizeButton onClick={onClick} variant="text" size="small">
        <KeyboardArrowDownIcon style={arrowStyles}/>
      </MatizeButton>
    );

    if (button !== undefined) {
      return React.cloneElement(button, {
        ...button.props,
        children: arrowButton
      });
    }

    return arrowButton;
  }

  function getActions() {
    if (!showDropDown) {
      return <></>;
    }

    return (
      <DropDownNav style={dropDownStyles}>
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
