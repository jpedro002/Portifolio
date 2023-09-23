import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PrismicProvider } from '@prismicio/react'
import { client } from "./services/prismic";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PrismicProvider client={client}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </PrismicProvider>
    
  </React.StrictMode>
);
