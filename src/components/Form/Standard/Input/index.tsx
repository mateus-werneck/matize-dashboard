import { CSSProperties } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { StyledMatizeInput, StyledMatizeLabel } from './style';

export interface MatizeInputProps {
  name: string;
  label?: string;
  placeHolder?: string;
  type?:
    | 'text'
    | 'number'
    | 'email'
    | 'date'
    | 'search'
    | 'checkbox'
    | 'file'
    | 'image'
    | 'password'
    | 'radio'
    | 'range';
  styles?: CSSProperties;
  readOnly?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
}

export const MatizeInput = ({
  name,
  label,
  placeHolder,
  type,
  styles,
  readOnly,
  required,
  register
}: MatizeInputProps) => {
  const defaultProps = {
    readOnly: readOnly ? readOnly : false,
    required: required ? required : false
  };

  const Input = (
    <StyledMatizeInput
      type={type ? type : 'text'}
      placeholder={placeHolder ? placeHolder : ''}
      {...(register(name), defaultProps)}
      style={styles}
    />
  );

  return getLabel(Input, label);
};

function getLabel(children: JSX.Element, label?: string): JSX.Element {
  if (!label) return children;

  return (
    <StyledMatizeLabel>
      {label}
      {children}
    </StyledMatizeLabel>
  );
}
