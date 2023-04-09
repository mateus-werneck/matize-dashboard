import { LoginForm } from '@Components/Form/Login';
import { useAuth } from '@Contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FormModal, LoginContainer } from './style';

export function LoginPage() {
  const { hasSession } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (hasSession()) router.push('/');
  }, []);

  return (
    <>
      <LoginContainer>
        <FormModal>
          <LoginForm />
        </FormModal>
      </LoginContainer>
    </>
  );
}
