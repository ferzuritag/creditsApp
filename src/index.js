import React from "react";
import ReactDOM from "react-dom";
import "./firebase/firebase";
import "./App.css";
import { AuthRouter } from "./router/AuthRouter";
import { Provider } from "react-redux";
import { store } from "./store/store";
ReactDOM.render(
  <Provider store={store}>
    <AuthRouter />
  </Provider>,
  document.getElementById("root")
);
