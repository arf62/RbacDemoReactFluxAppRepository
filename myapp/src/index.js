import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom"; // Named import. Creates a const. this is equivalent to the following
// import REACTDOM from "react-dom";
// called render = REACTDOM.Render
import App from "./components/controllers/App";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
