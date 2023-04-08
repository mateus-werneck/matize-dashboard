'use client'
import { ZodType, z } from 'zod';
import { MatizeForm, MatizeFormInput } from '../Standard';

export const LoginForm = () => {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <MatizeForm
        formInputs={getFormInputs()}
        validationSchema={getValidationSchema()}
        onSubmit={onSubmit}
        submitButton="Entrar"
      />
    </>
  );
};

function getFormInputs(): MatizeFormInput[] {
  return [
    {
      name: 'userEmail',
      type: 'email',
      label: 'Email'
    },
    {
      name: 'userPassword',
      type: 'password',
      label: 'Senha'
    }
  ];
}

function getValidationSchema(): ZodType<any, any, any> {
  return z.object({
    userEmail: z.string().email('Digite um email válido.'),
    userPassword: z
      .string()
      .max(50, 'A senha deve conter entre 8 e 50 caracteres.')
      .min(8, 'A senha deve conter entre 8 e 50 caracteres.')
  });
}
