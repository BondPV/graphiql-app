import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const Layout = (): JSX.Element => (
  <>
    <Header />

    <main>
      <Outlet />
    </main>

    <Footer />
  </>
);

export { Layout };
