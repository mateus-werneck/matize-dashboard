'use client';
import { LoginForm } from '@Components/Form/Login';
import { useAuth } from '@Contexts/AuthContext';
import { redirect } from 'next/navigation';
import { FormModal, LoginContainer } from './style';

export function LoginPage() {
  const { hasSession } = useAuth();

  if (hasSession()) {
    redirect('/');
  }

  return (
    <LoginContainer>
      <FormModal>
        <LoginForm />
      </FormModal>
    </LoginContainer>
  );
}
