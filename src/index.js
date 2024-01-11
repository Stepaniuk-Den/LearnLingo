import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./services/styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      {/* <BrowserRouter basename="/LearnLingo"> */}
      <App />
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);
