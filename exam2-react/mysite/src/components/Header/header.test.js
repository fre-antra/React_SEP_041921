import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import Header from "./index";

test("Header component test", () => {
  const { getByAltText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const img = getByAltText("logo");
  expect(img.src).toContain("logo");
});
