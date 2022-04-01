import { fireEvent, render, screen } from '@testing-library/react';
import calculate from '../logic/calculate';

describe('operate function check', () => {
  test('AC', () => {
    const obj = {
      total: '50',
      next: '2',
      operation: '+',
    };
    const state = calculate(obj, 'AC');
    expect(state.total).toBe(0);
  });

  test('number', () => {
    const obj = {
      total: '0',
      next: null,
      operation: '+',
    };
    const state = calculate(obj, '1');
    expect(state.next).toBe('1');
  });

  test('dot', () => {
    const obj = {
      total: '3',
      next: null,
      operation: null,
    };
    const state = calculate(obj, '.');
    expect(state.total).toBe('3.');
  });

  test('equal', () => {
    const obj = {
      total: '50',
      next: '2',
      operation: '+',
    };

    const state = calculate(obj, '=');
    expect(state.next).toBe(null);
  });

  test('+/-', () => {
    const obj = {
      total: '50',
      next: null,
      operation: null,
    };

    const state = calculate(obj, '+/-');
    expect(state.total).toBe('-50');
  });
  
  test('Expects 10 + 10 to equal 20', () => {
    let obj = {
    total: 0,
    operation: null,
    next: null,
  };
    const { container } = render(<Calculator />);
    fireEvent.click(container.querySelector('.ac'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    expect(container.querySelector('.result').innerHTML).toBe('20');
  });
});


