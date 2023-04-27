import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './store';

describe('App', () => {
  it('Renders "NotFound" page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/4']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Page not found');
  });

  it('Renders "Forms" page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/forms']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
  });

  it('Renders "About us" page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('about-us')).toBeInTheDocument();
  });

  it('Renders "Home" page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByPlaceholderText('Search on the page')).toBeInTheDocument();
  });
});
