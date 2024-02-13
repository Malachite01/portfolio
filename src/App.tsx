import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './Application/components/NavBar';
import Home from './Application/pages/Home';
import Collections from './Application/pages/Collections';
import EyeExam from './Application/pages/EyeExam';
import Contact from './Application/pages/Contact';
import About from './Application/pages/About';
import NotFound from './Application/pages/NotFound';
// import DarkModeButton from './Application/components/DarkModeButton';
import ThemeProvider from './Application/utils/ThemeProvider';
import UnderConstruction from './Application/utils/UnderConstruction';

export interface IRoute {
  path: string;
  element: React.ReactNode;
}

export const routes: IRoute[] = [
  { path: '/', element: <Home /> },
  { path: '/collections', element: <Collections /> },
  { path: '/examen_de_vue', element: <EyeExam /> },
  { path: '/contact', element: <Contact /> },
  { path: '/a_propos', element: <About /> },
  { path: '/*', element: <NotFound /> },
];

function App() {
  return (
    <div className="App">
      <ThemeProvider />
      {/* <DarkModeButton /> */}
      <NavBar />
      {(process.env.NODE_ENV === 'production')&&<UnderConstruction/>}
      <Routes>
        {routes.map((route: IRoute) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
