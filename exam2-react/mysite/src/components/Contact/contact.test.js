import React from "react";
import { render } from "@testing-library/react";
import Contact from "./index";

test("Contact component test", () => {
  const { getByRole, getByText } = render(<Contact />);

  expect(getByRole("heading", { name: "Contact" })).toBeInTheDocument();
  expect(getByRole("heading", { name: "Contact" })).toHaveTextContent(
    "Contact"
  );

  expect(getByText(/submit/i)).toBeInTheDocument();
  expect(getByText(/submit/i)).toHaveTextContent("Submit");
});
