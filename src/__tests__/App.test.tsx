import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App, { IRoute, routes as appRoutes } from "../App";
import { routes as siteRoutes } from "../builders/sitemap";

describe("APP", () => {
  describe("App inner components", () => {
    test("NavBar component exists", () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      const navBarElement = screen.getByTestId('navbar-component');
      expect(navBarElement).toBeInTheDocument();
    });
  });

  describe("App routes consistency with sitemap", () => {
    test("App routes consistency with sitemap", () => {
      // Get the paths from the App component
      const appPaths = appRoutes.map((route: IRoute) => `#${route.path}`);

      // Compare the paths
      expect(appPaths).toEqual(siteRoutes);
    });
  });

  describe("WrongRoute in App", () => {
    test("NotFound component exists", () => {
      render(
        <MemoryRouter initialEntries={['/a-route-that-does-not-exist']}>
          <App />
        </MemoryRouter>
      );

      const notFoundElement = screen.getByTestId('not-found-component');
      expect(notFoundElement).toBeInTheDocument();
    });
  });
});
