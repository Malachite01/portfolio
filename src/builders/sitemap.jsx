import React from 'react';
import { Routes, Route } from 'react-router-dom';

export const routes = [
  "#/",
  "#/collections",
  "#/examen_de_vue",
  "#/contact",
  "#/a_propos",
  "#/*"
];

export default function Router() {
  return (
    <Routes>
      {routes.map((path) => (
        <Route key={path} path={path}></Route>
      ))}
    </Routes>
  );
};