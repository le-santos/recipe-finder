// filepath: src/App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./Containers/App";

test("renders the app without crashing", () => {
  render(<App />);
  const element = screen.getByText(/recipe finder/i); // Example: if your app has this text
  expect(element).toBeInTheDocument();
});
