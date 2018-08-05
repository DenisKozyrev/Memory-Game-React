import React from "react";
import { render } from "react-dom";
import Application from "pages/Application";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "assets/style.css";

// const store = createStore(reducer);

render(
  // <Provider store={store}>
  <Application />,
  // </Provider>,
  document.getElementById("root")
);
