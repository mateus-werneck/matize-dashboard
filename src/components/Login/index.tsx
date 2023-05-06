'use client';
import { LoginForm } from '@Components/Form/Login';
import { FormModal, LoginContainer } from './style';

export function LoginPage() {
  return (
    <LoginContainer>
      <FormModal>
        <LoginForm />
      </FormModal>
    </LoginContainer>
  );
}
