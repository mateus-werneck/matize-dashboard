import { matizeV2 } from '@API/matize';
import { MenuAdminView } from '@Types/menu';
import { bearerToken } from '@Utils/String';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token = cookieStore.get(String(process.env.MATIZE_COOKIE));

  if (!token) {
    redirect('/');
  }

  try {
    const response = await matizeV2.get('admin-dashboard', {
      headers: {
        Authorization: bearerToken(token.value)
      }
    });
    const dashboard = response.data as MenuAdminView[];
    console.log(dashboard);
    return NextResponse.json(dashboard);
  } catch (error) {
    redirect('/api/auth/signin');
  }
}
