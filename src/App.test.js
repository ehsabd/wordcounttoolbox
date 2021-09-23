import { render, screen } from '@testing-library/react';
import App from './App';

test('renders WordCountToolbox heading', () => {
  render(<App />);
  const elms = screen.getAllByText(/WordCountToolbox/i);
  elms.forEach((elm)=>{
    expect(elm).toBeInTheDocument();
  })
});
