import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Portfolio from '../components/Pages/Portfolio/Portfolio';

describe('Portfolio', () => {
    it('render without any errors', () => {
        const {container} = render(<Portfolio></Portfolio>);
        expect(container).toMatchSnapshot();
    })

    //it("has projects on it",  () => {
    //    const {container} = render(<Portfolio></Portfolio>);
    //    //console.log(container.findAllByText('Projects and Portfolio'));
    //    console.log(container);
    //})
})