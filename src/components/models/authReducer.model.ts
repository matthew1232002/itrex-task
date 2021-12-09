export type AuthReducerType = {
  user?: {
    id: string,
    first_name: string,
    last_name: string,
    photo: string,
    role_name: string
  },
  token?: string,
  error?: string;
  isAuthenticated: boolean;
};
