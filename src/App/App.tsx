import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth } from '@/Api/firebase';
import { Layout } from '@/components/Layout';
import Preloader from '@/components/Preloader/Preloader';
import { ROUTE } from '@/constants';
import { MainPage, NotFoundPage, SignInPage, SignUpPage, WelcomePage } from '@/pages';

const App = (): JSX.Element => {
  const [user, loading] = useAuthState(auth);

  return (
    <Routes>
      <Route path={ROUTE.welcomePage} element={<Layout />}>
        <Route index element={!loading ? <WelcomePage /> : <Preloader />} />
        <Route
          path={ROUTE.signInPage}
          element={
            loading ? <Preloader /> : !user ? <SignInPage /> : <Navigate to={ROUTE.mainPage} />
          }
        />
        <Route
          path={ROUTE.signUpPage}
          element={
            loading ? <Preloader /> : !user ? <SignUpPage /> : <Navigate to={ROUTE.mainPage} />
          }
        />
        <Route
          path={ROUTE.mainPage}
          element={
            loading ? <Preloader /> : !user ? <Navigate to={ROUTE.welcomePage} /> : <MainPage />
          }
        />
        <Route path={ROUTE.errorPage} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export { App };
