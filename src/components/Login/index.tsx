import { LoginForm } from '@Components/Form/Login';
import { AuthProvider } from '@Contexts/AuthContext';
import { FormModal, LoginContainer } from './style';

export function LoginPage() {
  return (
    <AuthProvider userAuthenticated={null}>
      <LoginContainer>
        <FormModal>
          <LoginForm />
        </FormModal>
      </LoginContainer>
    </AuthProvider>
  );
}
