import React from "react";
import { render } from "react-dom";
import Application from "pages/Application";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import "assets/style.css";
import logger from "redux-logger";
import { gameProperties } from "reducers";

const store = createStore(gameProperties, applyMiddleware(logger));

render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById("root")
);
