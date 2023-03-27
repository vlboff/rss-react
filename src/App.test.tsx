import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';

describe('App', () => {
  it('Renders "NotFound" page', () => {
    render(
      <MemoryRouter initialEntries={['/4']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Page not found');
  });

  it('Renders "Forms" page', () => {
    render(
      <MemoryRouter initialEntries={['/forms']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
  });

  it('Renders "About us" page', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('about-us')).toBeInTheDocument();
  });
});
