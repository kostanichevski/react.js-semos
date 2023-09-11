import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// preku react DOM go zimame rootot i so render funkcijata (vazna za react.js) i generira nesto sto se vika App
// Strict mode aktivira dopolnitelni proverki (proveruva dali ima stari komponenti i ne izvestuva)
// ne e zadolzitelno
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
