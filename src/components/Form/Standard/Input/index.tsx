import { FieldValues, UseFormRegister } from 'react-hook-form';
import { StyledMatizeInput } from './style';

export interface MatizeInputProps {
  name: string;
  register: UseFormRegister<FieldValues>;
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
}

export const MatizeInput = ({ name, register, type }: MatizeInputProps) => {
  return <StyledMatizeInput type={type ? type : 'text'} {...register(name)} />;
};
