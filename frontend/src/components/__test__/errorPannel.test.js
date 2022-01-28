import { render, screen } from '@testing-library/react';
import { ErrorPannel } from '../errorPannel';
import "@testing-library/jest-dom";

describe('check render', () => {
    it('check if div element exist', () => {
        render(<ErrorPannel role={alert} />);
        const divElement = screen.getByRole("alert")
        expect(divElement).toBeInTheDocument();
    });

    it('check if error prop is rendering', () => {
        render(<ErrorPannel error={"Wrong input"} />);
        expect(screen.getByText(/wrong input/i)).toBeInTheDocument();
    });

});
