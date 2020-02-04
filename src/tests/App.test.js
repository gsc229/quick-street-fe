import React from "react";

import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
// import { Provider as AuthProvider } from "../contexts/AuthContext";
// import { Provider as CartProvider } from "../contexts/TestCartContext";
import { BrowserRouter as Router } from "react-router-dom";
test(`loads and display h1`, () => {
  const tree = (
    <Router>
      <App />
    </Router>
  );

  const { getByRole, findByText } = render(tree);
  findByText(
    /Finally , A Way For Vendors and Lovers of Food to Come Together in Harmony/i
  );
});
