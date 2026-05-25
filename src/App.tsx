import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { LibraryProvider } from './context/LibraryContext';
import { LibraryPage } from './pages/LibraryPage';

const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LibraryPage /> },
      { path: 'about', element: <Suspense fallback={<p>Cargando...</p>}><AboutPage /></Suspense> },
      { path: '*', element: <Suspense fallback={<p>Cargando...</p>}><NotFoundPage /></Suspense> },
    ],
  },
]);

export function App() {
  return (
    <LibraryProvider>
      <RouterProvider router={router} />
    </LibraryProvider>
  );
}
