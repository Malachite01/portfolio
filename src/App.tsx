import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import NavBar from './Application/components/NavBar';
import GoBackUp from './Application/components/GoBackUp';
import Portfolio from './Application/pages/Portfolio';
import NotFound from './Application/pages/NotFound';

export interface IRoute {
  path: string;
  element: React.ReactNode;
}

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname === '/' && (
        <>
          <NavBar />
          <GoBackUp />
        </>
      )}
      <Routes>
        <Route path='/' element={<Portfolio/>}></Route>
        <Route path='/*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
