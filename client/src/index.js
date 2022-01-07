import React from "react";
import ReactDOM from "react-dom";
import "../src/css/app.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

axios.defaults.baseURL =
  process.env.REACT_APP_API || "http://localhost:4000/api/v1";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
