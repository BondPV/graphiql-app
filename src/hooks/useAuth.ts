import { useAppSelector } from './redux';

interface IAuthorization {
  isAuth: boolean;
  email: string | null;
  token: string | null;
  id: string | null;
}

const useAuth = (): IAuthorization => {
  const { email, token, id } = useAppSelector((store) => store.userSlice);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};

export { useAuth };
