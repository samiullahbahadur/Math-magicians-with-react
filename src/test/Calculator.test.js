import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});

it('Expects 10 + 10 to equal 20', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('AC'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('0'));
  fireEvent.click(screen.getByText('='));
  expect(screen.getByRole('.result').innerHTML).toBe('20');
});
