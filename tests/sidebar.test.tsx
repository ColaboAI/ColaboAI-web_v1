import { render, screen } from '@testing-library/react';
import Sidebar from '@src/components/sidebar/sidebar';

describe('Sidebar', () => {
  it('renders sidebar', () => {
    const { container } = render(<Sidebar />);
    const input = screen.getByPlaceholderText('검색하기');
    expect(input).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
