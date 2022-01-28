import { render, screen } from '@testing-library/react';
import { Main } from '../Main';

describe('check Main Props', () => {
  it('should render all 3 basic component', () => {
    render(<Main getInput={1} onSubmit={jest.fn()} setInput={1} error={1} apiResul={1} />);
    const mainContainer = screen.getByRole('main')
    expect(mainContainer).toBeInTheDocument()
    expect(mainContainer.childElementCount).toBeGreaterThanOrEqual(3)
  });
});