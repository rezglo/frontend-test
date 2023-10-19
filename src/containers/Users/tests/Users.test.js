import React from "react";
import {
  screen,
  // fireEvent,
} from "@testing-library/react";
// import { configureStore } from "@reduxjs/toolkit";
// import { BrowserRouter } from "react-router-dom"

// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../../utils/test-utils";
import Users from "../../../components/Chat/Chat";

// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: jest.fn().mockImplementation(query => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // Deprecated
//     removeListener: jest.fn(), // Deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// });

// beforeEach(() => renderWithProviders(<Users />));

// test("Checking than users component snapshot", () => {
//   const div = document.createElement("div");
//   const component = renderWithProviders(<Users />, div);
//   expect(component.container).toMatchSnapShot();
// });

test("Checking than users component is present", () => {
  renderWithProviders(<Users />);
  // renderWithProviders(<Users />, { wrapper: BrowserRouter });
  expect(screen.getByTestId("row-community-chat")).toBeInTheDocument();
});

// test("Sets up initial state state with actions", () => {
//   const store = configureStore();
//   store.dispatch(usersListAction([], { payload: { message: "Hola" } }));

//   const { getByText } = renderWithProviders(<Users />, { store });
// });
