import { CSSProperties } from 'react';
import { StyledMatizeButton } from './style';

interface IMatizeButton {
  onClick: (value: any) => void;
  children: React.ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: CSSProperties;
  disabled?: boolean;
}

export const MatizeButton = ({
  onClick,
  children,
  variant,
  size,
  type,
  color,
  startIcon,
  endIcon,
  style,
  disabled
}: IMatizeButton) => {
  const isDisabled = disabled == undefined ? false : disabled;

  return (
    <>
      <StyledMatizeButton
        disabled={isDisabled}
        variant={variant ? variant : 'contained'}
        size={size ? size : 'medium'}
        type={type ? type : 'button'}
        onClick={onClick}
        startIcon={startIcon}
        endIcon={endIcon}
        color={color ? color : 'primary'}
        style={style}
      >
        {children}
      </StyledMatizeButton>
    </>
  );
};
