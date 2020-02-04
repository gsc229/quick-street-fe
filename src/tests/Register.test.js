import React from "react";

import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider as AuthProvider } from "../contexts/AuthContext";
import { Provider as CartProvider } from "../contexts/TestCartContext";
import { BrowserRouter as Router } from "react-router-dom";
import Register from "../pages/Register";

test(`loads`, () => {
  const tree = (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Register />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
  const { getByRole, findByText } = render(tree);
});
