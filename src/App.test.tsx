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
});
