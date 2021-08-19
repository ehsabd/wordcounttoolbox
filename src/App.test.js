import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WordCountToolbox heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/WordCountToolbox/i);
  expect(linkElement).toBeInTheDocument();
});
