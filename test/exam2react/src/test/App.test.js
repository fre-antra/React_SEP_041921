import { render, screen } from "@testing-library/react";
import App from "../App";


describe("App", () => {
  it("renders", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
