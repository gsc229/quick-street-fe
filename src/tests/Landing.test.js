import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Landing from "../pages/Landing";
import { Provider as AuthProvider } from "../contexts/AuthContext";
import { Provider as CartProvider } from "../contexts/TestCartContext";
import { BrowserRouter as Router } from "react-router-dom";

test(`loads and display h1`, () => {
  const tree = (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Landing />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
  const { findByText, getByText } = render(tree);
  findByText(
    /Finally , A Way For Vendors and Lovers of Food to Come Together in Harmony/i
  );
  findByText(/Browse, buy, share your finds on local food vendors./i);
  fireEvent.click(getByText("Get Started"));
});
