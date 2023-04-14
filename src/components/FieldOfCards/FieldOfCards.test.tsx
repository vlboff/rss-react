import { render, screen } from '@testing-library/react';
import FieldOfCards from './FieldOfCards';
import { Provider } from 'react-redux';
import store from '../../store';

describe('FieldOfCards', () => {
  it('displays preloader on loading', async () => {
    render(
      <Provider store={store}>
        <FieldOfCards />
      </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
