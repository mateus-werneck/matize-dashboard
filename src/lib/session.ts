
import { matizeAPI } from "@API/matize";
import { User } from "@Types/user";
import { bearerToken } from "@Utils/String";
import { cookies } from 'next/headers';
import "server-only";

export async function withSession() {
    const cookieStore = cookies();
    const token = cookieStore.get(String(process.env.AUTH_COOKIE));

    if(!token) return null;

    const response = await matizeAPI.get('/user/profile', {
      headers: {
        Authorization: bearerToken(token.value)
      }
    });
    
    const user = response.data;
  
    if (!user) return null;
  
    return user as User;
  }
