
export type MatizeUser = {
  matizeId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  isAdmin: boolean;
  iat: number;
  exp: number;
};


interface AuthenticatedUser {
  name?: string;
  email?: string;
}
