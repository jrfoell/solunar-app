import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SolunarListing from './SolunarListing';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<SolunarListing />, container);
  });
  expect(container.textContent).toBe('');

  act(() => {
    render(<SolunarListing data="Something" />, container);
  });
  expect(container.textContent).toBe('"Something"');

  act(() => {
    render(<SolunarListing data="Something else" />, container);
  });
  expect(container.textContent).toBe('"Something else"');
});
