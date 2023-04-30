import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { MainPage, NotFoundPage, WelcomePage } from './pages';

const App = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<WelcomePage />} />
      <Route path="main" element={<MainPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default App;
