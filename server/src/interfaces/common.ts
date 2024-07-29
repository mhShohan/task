export interface IUser {
  email: string;
  name: string;
  password: string;
}

export interface IJwtPayload {
  id: string;
  email: string;
  role: string;
}