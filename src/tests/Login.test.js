import React from "react";

import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider as AuthProvider } from "../contexts/AuthContext";
import { Provider as CartProvider } from "../contexts/TestCartContext";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "../pages/Login";

test(`loads`, () => {
  const tree = (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Login />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
  const { getByRole, findByText } = render(tree);
});
