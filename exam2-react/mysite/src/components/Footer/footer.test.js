import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Footer from "./index";

test("Footer component test", () => {
  const { getByRole, getByText } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  expect(getByRole("heading", { name: /phone/i })).toBeInTheDocument();
  expect(getByRole("heading", { name: /phone/i })).toHaveTextContent("Phone:");
  expect(getByText(/email/i)).toBeInTheDocument();
  expect(getByText(/email/i)).toHaveTextContent("Email");
});
