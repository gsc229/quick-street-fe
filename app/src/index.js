import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Config from "./config/config";

ReactDOM.render(
  <Router>
    <App cloudName={Config.cloud_name} uploadPreset={Config.upload_preset} />
  </Router>,
  document.getElementById("root")
);
