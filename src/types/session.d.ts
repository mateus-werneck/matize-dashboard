import { Session } from "next-auth";

export interface MatizeSession extends Session {
  access_token?: string;
};

