import React from 'react';
import { routes } from './routes.schema';
import { Route, Routes } from 'react-router-dom';

export const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route
        path={routes.BASE_ROUTE}
        element={
          <div className={'h-screen text-black-500 text-2xl'}>hello there</div>
        }
      />
    </Routes>
  );
};
