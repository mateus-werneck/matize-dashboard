'use client';

import { useAuth } from '@Contexts/AuthContext';
import { redirect } from 'next/navigation';

export default function Home() {
  const { hasSession } = useAuth();

  if (!hasSession()) {
    redirect('/login');
  }

  return (
    <>
      <title>Início</title>
    </>
  );
}
