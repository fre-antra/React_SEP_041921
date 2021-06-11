import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "../components/Navbar/Navbar";

describe('Navbar', () => {
    it('render without any errors', () => {
        const {container} = render(<Navbar></Navbar>);
        expect(container).toMatchSnapshot();
    })
})