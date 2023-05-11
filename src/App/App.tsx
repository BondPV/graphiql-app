import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { Layout } from '../components/Layout';
import { PATCH } from '../constants';
import { MainPage, NotFoundPage, SignInPage, SignUpPage, WelcomePage } from '../pages';

export const AuthContext = createContext(false);

const App = (): JSX.Element => {
  const auth = getAuth();
  const [userIsAuth, setUserIsAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdTokenResult().then((idTokenResult) => {
          const expirationTime = new Date(idTokenResult.expirationTime).getTime();
          const currentTime = new Date().getTime();

          if (expirationTime > currentTime) {
            setUserIsAuth(true);
          } else {
            signOut(auth);
            setUserIsAuth(false);
          }
        });
      } else {
        setUserIsAuth(false);
      }
    });
  });

  return (
    <AuthContext.Provider value={userIsAuth}>
      <Routes>
        <Route path={PATCH.welcomePage} element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route
            path={PATCH.signInPage}
            element={!userIsAuth ? <SignInPage /> : <Navigate to={PATCH.mainPage} />}
          />
          <Route
            path={PATCH.signUpPage}
            element={!userIsAuth ? <SignUpPage /> : <Navigate to={PATCH.mainPage} />}
          />
          <Route
            path={PATCH.mainPage}
            element={userIsAuth ? <MainPage /> : <Navigate to={PATCH.welcomePage} />}
          />
          <Route path={PATCH.errorPage} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthContext.Provider>
  );
};

export { App };
