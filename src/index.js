import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Helmet } from "react-helmet";
import "./index.css";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
      />
      <title>Timed 10-Meter Walk Test</title>
    </Helmet>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
