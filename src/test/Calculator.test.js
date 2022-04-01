import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = render(<Calculator />);
  expect(tree).toMatchSnapshot();
});

it('Expects 10 + 10 to equal 20', () => {
    const tree = render(<Calculator />);
    fireEvent.click(tree.querySelector('.ac'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(tree.querySelector('.result').innerHTML).toBe('20');
  });
