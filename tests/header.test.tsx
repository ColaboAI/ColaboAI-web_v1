import { fireEvent, render, screen } from '@testing-library/react';
import Header from '@src/components/header/header';
import { RecoilRoot } from 'recoil';

describe('Header', () => {
  const setup = () => {
    const utils = render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>,
    );
    const input = screen.getByPlaceholderText('검색하기');
    const logo = screen.getByText('ColaboAI');
    const loginButton = screen.getByText('로그인');
    const registerButton = screen.getByText('회원가입');
    return {
      ...utils,
      input,
      logo,
      loginButton,
      registerButton,
    };
  };

  it('renders header', () => {
    const { input, logo, loginButton, registerButton } = setup();
    expect(logo).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it('changes input', () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: '콜라보에이아이',
      },
    });
    expect(input).toHaveAttribute('value', '콜라보에이아이');
  });
});
