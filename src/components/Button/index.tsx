import { Button } from '@mui/material';
import { CSSProperties } from 'react';

interface ButtonProps {
  onClick: (value: any) => void;
  children: React.ReactNode;
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  type?: 'submit' | 'button';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  style?: CSSProperties
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
  style
}: ButtonProps) => {
  return (
    <>
      <Button
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
      </Button>
    </>
  );
};
