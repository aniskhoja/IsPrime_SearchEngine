import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '../form';

describe('check h1 element', () => {
    it('should render h1 and contain same heading', () => {
        render(<Form />);
        const headElement = screen.getByTestId("heading");
        expect(headElement).toBeInTheDocument();
        expect(headElement.textContent).toMatch(/median prime number's/);
    });
});


describe('check input field', () => {
    it('should render input field with getinput props and setinput props', () => {
        render(<Form getInput={ "1" } />);
        const inputElement = screen.getByDisplayValue(/1/i);
        expect(inputElement).toBeInTheDocument();
    });
});

describe('check submit button', () => {
    it('should tigger function after clicking submit', () => {
        //mock function
        const onSubmit = jest.fn(e => e.preventDefault());
        render(<Form onSubmit={onSubmit} />);
        userEvent.click(screen.getByText(/submit/i));
        expect(onSubmit).toHaveBeenCalled();
    });
})





