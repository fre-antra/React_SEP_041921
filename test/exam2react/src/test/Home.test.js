import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from '../components/Pages/Home/Home';

describe('Home', () => {
    it('render without any errors', () => {
        const {container} = render(<Home></Home>);
        expect(container).toMatchSnapshot();
    })
})