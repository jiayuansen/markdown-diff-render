import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import React from "react";

const rootElement = document.getElementById("app")!;
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);