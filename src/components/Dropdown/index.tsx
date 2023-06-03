import { MatizeButton } from '@Components/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
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

function useDropDownMenu(props: IDropDown) {
  const [showDropDown, setDropDownVisibility] = useState<boolean>(false);

  function getArrowDownButton(): JSX.Element {
    const arrowButton = (
      <MatizeButton onClick={onClickDropDown} variant="text" size="small">
        {!showDropDown ? (
          <KeyboardArrowDownIcon style={props.arrowStyles} />
        ) : (
          <KeyboardArrowUpIcon style={props.arrowStyles} />
        )}
      </MatizeButton>
    );

    if (props.button !== undefined) {
      return React.cloneElement(props.button, {
        ...props.button.props,
        children: arrowButton
      });
    }

    return arrowButton;
  }

  function onClickDropDown(e: React.MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    setDropDownVisibility((previousValue: any) => !previousValue);
  }

  function getActions(): JSX.Element {
    if (!showDropDown) {
      return <></>;
    }

    return (
      <DropDownNav style={props.dropDownStyles}>
        <DropDownNavUl>
          {props.actions.map((action, index) => (
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
