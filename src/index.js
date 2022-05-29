import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./context/UserContext";
import App from "./App/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
