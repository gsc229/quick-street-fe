import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import VendorProfile from "./components/VendorProfile/VendorProfile";
import Register from "./components/Register";
import Login from "./components/Login";
import Browse from "./components/Browse";

function App() {
  return (
    <div>
      <h1>Quickstreet</h1>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={VendorProfile} />
      <Route path="/browse" component={Browse} />
    </div>
  );
}

export default App;
