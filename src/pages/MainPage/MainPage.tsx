import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { removeUser } from '../../store/slices/userSlice';

const MainPage = (): JSX.Element => {
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

  const redirectToMainPage = (): void => {
    navigate('/main');
  };

  return (
    <div>
      <p>Main Page</p>
      <p>Welcome {email}</p>
      <button onClick={logOut}>Log out</button>
      <button onClick={redirectToMainPage}>Start</button>
    </div>
  );
};

export { MainPage };
