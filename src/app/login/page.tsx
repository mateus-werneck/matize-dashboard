import { LoginPage } from '@Components/Login';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Login'
};

export default async function Login() {
  const session = await getServerSession();

  if (session) {
    redirect('/');
  }

  return (
    <>
      <title>Login</title>
      <LoginPage />
    </>
  );
}
