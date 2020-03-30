import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { Button } from './';


describe('Button', () => {
  afterEach(cleanup);
  it('should render a button element', () => {
    const { getByRole } = render(<Button>click me</Button>);
    expect(getByRole('button'));
  });

  it('should attach an href if passed an href', () => {
    const { getByRole } = render(<Button href="/somewhere">click me</Button>);
    expect(getByRole('button').getAttribute('href')).toBe('/somewhere');
  });

  it('should render a router link if passed a router link as a ButtonWrapper prop', () => {
    const RouterLink = ({ ...props }) => <div {...props} />;

    const { getByTestId } = render(
      <Button to="/somewhere" ButtonWrapper={RouterLink} data-testId="router-link">
        click me
      </Button>,
    );

    expect(getByTestId('router-link')).toBeDefined();
  });

  it('should render children', () => {
    const { getByText } = render(<Button>click me</Button>);
    expect(getByText('click me'));
  });

  it('should execute onClick if passed one', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>click me</Button>);

    fireEvent.click(getByText('click me'));

    expect(onClick).toHaveBeenCalled();
  });
});
