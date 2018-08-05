import React from "react";
import { render } from "react-dom";
import Application from "pages/Application";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "assets/style.css";
import { gameProperties } from "reducers";

const store = createStore(gameProperties);

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root")
);
