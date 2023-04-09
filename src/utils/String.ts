export function base64(value: string) {
  return Buffer.from(value).toString('base64');
}

export function bearerToken(token: string) {
  return `Bearer ${token}`;
}

export function basicToken(email: string, password: string) {
  const token = base64(`${email}:${password}`);
  return `Basic ${token}`;
}
