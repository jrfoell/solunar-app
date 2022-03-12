// user.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import SolunarData from "./SolunarData";

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

it("renders user data", async () => {
  const fakeData = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="123" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeData.name);
  expect(container.querySelector("strong").textContent).toBe(fakeData.age);
  expect(container.textContent).toContain(fakeData.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});
