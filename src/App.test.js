import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders the page header', () => {
  render(<App />);
  expect(screen.getByText('Accessible Drag and Drop')).toBeInTheDocument();
});
