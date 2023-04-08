import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ZodType, z } from 'zod';
import { MatizeInput, MatizeInputProps } from './Input';

interface MatizeFormProps {
  formInputs: MatizeFormInput[];
  validationSchema: ZodType<any, any, any>;
  onSubmit: (data: any) => void;
}

export type MatizeFormInput = Omit<MatizeInputProps, 'register'>;

export const MatizeForm = ({
  formInputs,
  validationSchema,
  onSubmit
}: MatizeFormProps) => {
  type FormData = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(validationSchema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formInputs.map((formInput) => (
        <MatizeInput
          name={formInput.name}
          register={register}
          type={formInput.type}
        />
      ))}
    </form>
  );
};
