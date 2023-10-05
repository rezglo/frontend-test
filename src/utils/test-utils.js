import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import loginReducer from "../containers/Login/reducer";
import userListReducer from "../containers/Users/reducers/userListReducer";
import smsListReducer from "../containers/Users/reducers/smsListReducer";
import channelsListReducer from "../containers/Channels/reducers/channelsListReducer";
import smsChannelsListReducer from "../containers/Channels/reducers/smsChannelsListReducer";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        loging: loginReducer,
        usersList: userListReducer,
        smsList: smsListReducer,
        channelsList: channelsListReducer,
        smsChannelsList: smsChannelsListReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
