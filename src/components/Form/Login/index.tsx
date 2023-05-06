'use client';
import { InvalidCredentialsError } from '@Errors/login/invalidCredentials';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { UseFormReturn } from 'react-hook-form';
import { ZodType, z } from 'zod';
import { MatizeForm, MatizeFormInput } from '../Standard';

export const LoginForm = () => {
  const router = useRouter();

  const onSubmit = async (data: any, formContext: UseFormReturn<any>) => {
    try {
      const response = await signIn('credentials', {
        redirect: false,
        email: data.userEmail,
        password: data.userPassword
      });
      if (response?.error) {
        throw new InvalidCredentialsError();
      }
      router.push('/');
    } catch (error) {
      formContext.setError('userPassword', {
        type: 'manual',
        message: 'Email ou senha informado inválidos.'
      });
      formContext.reset(data, { keepErrors: true });
    }
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
