// Counter.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './counter';

test('renders counter with initial value 0', () => {
  const { getByTestId } = render(<Counter />);
  const countElement = getByTestId('count');

  expect(countElement).toHaveTextContent('0');
});

test('increments counter when increment button is clicked', () => {
  const { getByTestId, getByText } = render(<Counter />);
  const countElement = getByTestId('count');
  const incrementButton = getByTestId('increment-btn');

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent('1');
});
