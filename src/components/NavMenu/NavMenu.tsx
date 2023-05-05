import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../App';
import { useContext } from 'react';
import { PATCH } from '../../constants';

const NavMenu = (): JSX.Element => {
  const navigate = useNavigate();
  const isAuth = useContext(AuthContext);

  const redirectToSignIn = (): void => {
    navigate(PATCH.signInPage);
  };

  const redirectToSignUp = (): void => {
    navigate(PATCH.signUpPage);
  };

  if (isAuth) {
    return (
      <nav>
        <NavLink to={PATCH.mainPage}>Main</NavLink>;
      </nav>
    );
  }

  return (
    <nav>
      <button onClick={redirectToSignIn}>SignIn</button>
      <button onClick={redirectToSignUp}>SignUp</button>
    </nav>
  );
};

export { NavMenu };
