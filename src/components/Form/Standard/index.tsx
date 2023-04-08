import { MatizeButton } from '@Components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ZodType, z } from 'zod';
import { MatizeInput, MatizeInputProps } from './Input';
import { StyledMatizeAlertInput } from './Input/style';

interface MatizeFormProps {
  formInputs: MatizeFormInput[];
  validationSchema: ZodType<any, any, any>;
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
    formState: { errors }
  } = useForm<FormDataType>({ resolver: zodResolver(validationSchema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formInputs.map((formInput) => (
        <div key={formInput.name + '-div'} style={{ display: 'flex', flexDirection: 'column'}}>
          <MatizeInput
            {...formInput}
            register={register}
            key={formInput.name}
            hasErrors={errors[formInput.name] ? true : false}
          />
          {errors[formInput.name] && (
            <StyledMatizeAlertInput key={formInput.name + '-warning'}>
              {errors[formInput.name]['message']}
            </StyledMatizeAlertInput>
          )}
        </div>
      ))}
      {submitButton && (
        <MatizeButton type="submit" onClick={handleSubmit(onSubmit)}>
          {submitButton}
        </MatizeButton>
      )}
    </form>
  );
};
