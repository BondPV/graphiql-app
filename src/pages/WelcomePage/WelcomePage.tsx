import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { removeUser } from '../../store/slices/userSlice';

const WelcomePage = (): JSX.Element => {
  const { isAuth, email } = useAuth();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  });

  const logOut = (): void => {
    dispatch(removeUser());
  };

  return (
    <div>
      <p>Welcome Page</p>
      <p>Welcome {email}</p>
      <button onClick={logOut}>Log out</button>
    </div>
  );
};

export { WelcomePage };
