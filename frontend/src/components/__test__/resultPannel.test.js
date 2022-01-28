import { render, screen } from '@testing-library/react';
import { ResultPannel } from '../resultPannel';
import "@testing-library/jest-dom";

describe('check render', () => {
    it('check if div element exist', () => {
        render(<ResultPannel />);
        const headElement = screen.getByTestId('resultHeading')
        expect(headElement).toBeInTheDocument();
    });

    it('check if result prop is rendering', () => {
        render(<ResultPannel apiResult={"Success"} />);
        expect(screen.getByText(/Success/i)).toBeInTheDocument();
    });
});
