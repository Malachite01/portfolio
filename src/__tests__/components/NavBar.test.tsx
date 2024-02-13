import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import App from "../../App";
import Router from "../../builders/sitemap";

describe("NAVBAR", () => {
  test("Navbar routes consistency with sitemap", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Get the links from the NavBar component
    const navBarLinks = screen
      .getAllByRole('link')
      .filter((link) => link.closest('.navbar-component'));

    // Get the paths from the NavBar links and add '#'
    const navBarPaths = navBarLinks
    .map((link) => `#${link.getAttribute('href')}`)
    // Remove the root path and the 404 path
    .filter((path) => path !== "#/" && path !== "#/*");

    // Get the paths from the sitemap router
    const sitemapRouterPaths = Router().props.children
    .map((route: React.ReactElement) => {
      const path = route.props.path;
      return path;
    })
    // Remove the root path and the 404 path
    .filter((path: string) => path !== "#/" && path !== "#/*");

    // Compare the paths
    expect(navBarPaths).toEqual(sitemapRouterPaths);
  });
});