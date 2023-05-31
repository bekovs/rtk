import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainLayout from '../pages/MainLayout';
import AddPostsPage from '../pages/AddPostsPage';
import HelpPage from '../pages/HelpPage';

const MainRoutes = () => {

  const PUBLIC_ROUTES = [
    {
      id: 1,
      element: <HomePage />,
      path: "/"
    },
    {
      id: 2,
      element: <AddPostsPage />,
      path: "/add"
    },
    {
      id: 3,
      element: <HelpPage />,
      path: "/help"
    }
  ]

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {
          PUBLIC_ROUTES.map((route) => (
            <Route key={route.id} element={route.element} path={route.path} />
          ))
        }
      </Route>
    </Routes>
  );
};

export default MainRoutes;