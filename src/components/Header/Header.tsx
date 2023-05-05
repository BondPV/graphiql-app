import { LanguageSwitcher } from '../LanguageSwitcher';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { NavMenu } from '../NavMenu';
import { AuthContext } from '../../App';
import { useContext } from 'react';
import { PATCH } from '../../constants';

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const auth = getAuth();
  const isAuth = useContext(AuthContext);

  const redirectToWelcomePage = (): void => {
    navigate('/');
  };

  const handleLogout = (): void => {
    signOut(auth)
      .then(() => {
        navigate(PATCH.welcomePage);
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };

  return (
    <header>
      <p>Header</p>
      <div onClick={redirectToWelcomePage}>Logo</div>
      <NavMenu />
      {isAuth && <button onClick={handleLogout}>Logout</button>}
      <LanguageSwitcher />
    </header>
  );
};

export { Header };
