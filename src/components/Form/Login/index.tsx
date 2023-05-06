import { signIn } from 'next-auth/react';
import { UseFormReturn } from 'react-hook-form';
import { ZodType, z } from 'zod';
import { MatizeForm, MatizeFormInput } from '../Standard';

export const LoginForm = () => {
  const onSubmit = (data: any, formContext: UseFormReturn<any>) => {
    signIn('credentials', {
      redirect: true,
      callbackUrl: '/',
      email: data.userEmail,
      password: data.userPassword
    }).catch((error) => {
      formContext.setError('userPassword', {
        type: 'manual',
        message: 'Email ou senha informado inválidos.'
      });
      formContext.reset(data, { keepErrors: true });
    });
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

function getValidationSchema(): ZodType {
  return z.object({
    userEmail: z.string().email('Digite um email válido.'),
    userPassword: z
      .string()
      .max(50, 'A senha deve conter entre 8 e 50 caracteres.')
      .min(8, 'A senha deve conter entre 8 e 50 caracteres.')
  });
}
