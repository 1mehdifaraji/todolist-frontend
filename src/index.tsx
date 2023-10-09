import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";

import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
