import { fireEvent, render, screen } from '@testing-library/react';
import Header from '@src/components/header/header';
import { RecoilRoot } from 'recoil';

describe('Header', () => {
  it('renders header', () => {
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>,
    );
    const input = screen.getByPlaceholderText('검색하기');
    expect(input).toBeInTheDocument();
  });

  it('changes input', () => {
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>,
    );
    const input = screen.getByPlaceholderText('검색하기');
    fireEvent.change(input, {
      target: {
        value: 'COLABOAI_WEB',
      },
    });
    expect(input).toHaveAttribute('value', 'COLABOAI_WEB');
  });
});
