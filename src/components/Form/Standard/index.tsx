import { MatizeButton } from '@Components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldErrors, UseFormRegister, useForm } from 'react-hook-form';
import { ZodType, z } from 'zod';
import { MatizeInput, MatizeInputProps } from './Input';
import { StyledMatizeAlertInput } from './Input/style';
import { FormInputContainer, StyledForm } from './style';

interface MatizeFormProps {
  formInputs: MatizeFormInput[];
  validationSchema: ZodType;
  onSubmit: (data: any) => void;
  submitButton?: string;
}

export type MatizeFormInput = Omit<MatizeInputProps, 'register' | 'hasErrors'>;

export const MatizeForm = ({
  formInputs,
  validationSchema,
  onSubmit,
  submitButton
}: MatizeFormProps) => {
  type FormDataType = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted }
  } = useForm<FormDataType>({ resolver: zodResolver(validationSchema) });

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {getFormInputs(formInputs, register, errors)}
      {submitButton && (
        <MatizeButton
          type="submit"
          onClick={handleSubmit(onSubmit)}
          style={{ marginTop: '1.5rem', float: 'right' }}
          disabled={isSubmitted}
        >
          {submitButton}
        </MatizeButton>
      )}
    </StyledForm>
  );
};

function getFormInputs(
  formInputs: MatizeFormInput[],
  register: UseFormRegister<any>,
  errors: FieldErrors<any>
): JSX.Element[] {
  return formInputs.map((formInput) => (
    <FormInputContainer key={formInput.name + '-div'}>
      <MatizeInput
        {...formInput}
        register={register}
        key={formInput.name}
        hasErrors={errors[formInput.name] ? true : false}
      />
      {errors[formInput.name] && (
        <StyledMatizeAlertInput key={formInput.name + '-warning'}>
          {String(errors[formInput.name]?.message)}
        </StyledMatizeAlertInput>
      )}
    </FormInputContainer>
  ));
}
