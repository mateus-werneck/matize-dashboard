import { serverMatizeAPI } from '@API/matize';
import { MenuAdminView } from '@Types/menu';
import { User } from '@Types/user';
import { bearerToken } from '@Utils/String';
import { cookies } from 'next/headers';
import 'server-only';

export async function withSession() {
  const token = getCookieToken();

  if (!token) return null;

  const response = await serverMatizeAPI.get('/user/profile', {
    headers: {
      Authorization: bearerToken(token)
    }
  });

  const user = response.data;

  if (!user) return null;

  return user as User;
}

export async function getMenuAdmin(): Promise<MenuAdminView[]> {
  const token = getCookieToken();
  let menuAdmin = [] as MenuAdminView[];

  if (!token) return menuAdmin;

  try {
    const response = await serverMatizeAPI('admin-dashboard', {
      headers: {
        Authorization: bearerToken(token)
      }
    });
    if (response.data) menuAdmin = response.data;
  } catch (error) {
    return menuAdmin;
  } finally {
    return menuAdmin;
  }
}

function getCookieToken(): string | null {
  const cookieStore = cookies();
  const token = cookieStore.get(String(process.env.NEXT_PUBLIC_AUTH_COOKIE));

  return token ? token.value : null;
}
