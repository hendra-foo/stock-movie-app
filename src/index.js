import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "./sass/app.scss";
import { setupAxios } from "./utils/setupAxios";

setupAxios();

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);
