import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from "./components/products"
import { BrowserRouter as Router } from "react-router-dom"

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Router>
        <App />
      </Router>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

