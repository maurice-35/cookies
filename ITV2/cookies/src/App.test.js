import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders instruction', () => {
  render(<App />);
  const header = screen.getByText(/Click to add cookies/i);
  expect(header).toBeInTheDocument();
});
