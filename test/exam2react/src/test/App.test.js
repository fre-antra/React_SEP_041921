import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";

describe("App component", () => {
  it("render without error", () => {
    const { container } = render(<App></App>);
    expect(container).toMatchSnapshot();
  });

  it('has Nav component', () => {
    render(<App></App>);
    const navbar = screen.getByTestId('navbar');
    expect(navbar).toBeInTheDocument()
  })

  it('has Footer component', () => {
    render(<App></App>);
    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument()
  })
});
