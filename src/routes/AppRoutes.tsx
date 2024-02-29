import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Result from '../pages/Result';

function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="result/:id" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
