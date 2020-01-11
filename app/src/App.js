import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import VendorProfile from "./components/VendorProfile/VendorProfile";
import Register from "./components/Register";
import Login from "./components/Login";
import Browse from "./components/Browse";
import CustomerFacingVendorProfile from "./components/CustomerFacingVendorProfile/CustomerFacingVendorProfile";

function App() {
  console.log(window.cloudinary);
  return (
    <div>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/profile" component={VendorProfile} />
      <Route exact path="/browse" component={Browse} />
      <Route path='/browse/:id' component={CustomerFacingVendorProfile} />
    </div>

  );
}

export default App;
