import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../components/Footer/Footer";
import Home from "../components/Pages/Home/Home";
import Portfolio from "../components/Pages/Portfolio/Portfolio";
import Contact from "../components/Pages/Contact/Contact";

describe("Footer Component", () => {
  it("render without error", () => {
    const { container } = render(<Footer></Footer>);
    expect(container).toMatchSnapshot();
  });

  it("render with four icons", () => {
    render(<Footer></Footer>);
    const icon1 = screen.getByTestId("1");
    expect(icon1).toBeInTheDocument();
    const icon2 = screen.getByTestId("2");
    expect(icon2).toBeInTheDocument();
    const icon3 = screen.getByTestId("3");
    expect(icon3).toBeInTheDocument();
    const icon4 = screen.getByTestId("4");
    expect(icon4).toBeInTheDocument();
  });

  it("render with phone and email information", () => {
    render(<Footer></Footer>);
    const phone = screen.getByText(/Phone: XXXXXX/i);
    expect(phone).toBeInTheDocument();

    const email = screen.getByText(/Email: XXXXX@gmail.com/i);
    expect(email).toBeInTheDocument();
  });

  it("has five blocks of link", () => {
    render(<Footer></Footer>);
    const grid = screen.getByTestId("grid");
    expect(grid.childElementCount).toEqual(5);
  });

  it("brings user to Portfolio section when clicked on Portfolio link", async () => {
    render(<Footer></Footer>);
    const portfolio = screen.getByText(/Portfolio/i);
    expect(portfolio).toBeInTheDocument();

    fireEvent.click(portfolio);
    await render(<Portfolio></Portfolio>);
    expect(screen.getByTestId("portfolio-header")).toHaveTextContent(
      "Projects and Portfolio"
    );
  });

//  it("brings user to Contact section when clicked on Contact link", async () => {
//    render(<Footer></Footer>);
//    const contact = screen.getByText(/Contact/i);
//    expect(contact).toBeInTheDocument();

//    //fireEvent.click(contact);
//    //render(<Contact></Contact>)
//    console.log(contact.href);
//    window.location.href = contact.href;
//    console.log(window.location.href);
//    await waitFor(() => {
//        //console.log('log',screen.getByTestId("contact-header"));
//        //screen.getByTestId("contact-header")
//        //console.log(contact);
//      console.log(window.location.href);
//    });
//    expect(screen.getByText("Reaching out to me")).toBeInTheDocument()
//  });

  it("brings user to Home section when clicked on Resume link", async () => {
    render(<Footer></Footer>);
    const resume = screen.getByText(/Resume/i);
    expect(resume).toBeInTheDocument();

    fireEvent.click(resume);
    await render(<Home></Home>);
    expect(screen.getByTestId("home-section")).toBeInTheDocument();
  });
});
