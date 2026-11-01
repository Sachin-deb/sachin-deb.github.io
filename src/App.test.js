import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name, research, and Google Scholar link', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /sachin deb/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^research$/i })).toBeInTheDocument();
  screen.getAllByRole('link', { name: /google scholar/i }).forEach((link) =>
    expect(link).toHaveAttribute('href', expect.stringContaining('scholar.google.com'))
  );
});
