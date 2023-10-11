import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import the App component from the file where it is defined

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Make sure this element exists in your HTML
);
