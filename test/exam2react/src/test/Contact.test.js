import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from '../components/Pages/Contact/Contact';

describe('Contact', () => {
    it('render without any errors', () => {
        const {container} = render(<Contact></Contact>);
        expect(container).toMatchSnapshot();
    })
})