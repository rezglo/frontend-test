import React from "react";
import { screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from "../../../utils/test-utils";
import Channels from "../../../components/Channels/Channels";
// import { openNotificationSuccess } from '../../../utils';

test("Checking than Channels component is present", () => {
  renderWithProviders(<Channels />);
  // renderWithProviders(<Channels />, { wrapper: BrowserRouter });
  expect(screen.getByTestId("general-info-channel")).toBeInTheDocument();
});
