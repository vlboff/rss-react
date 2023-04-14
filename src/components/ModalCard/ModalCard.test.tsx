import { render, screen } from '@testing-library/react';
import ModalCard from './ModalCard';
import { Provider } from 'react-redux';
import store from '../../store';

describe('ModalCard', () => {
  it('displays preloader on loading', async () => {
    render(
      <Provider store={store}>
        <ModalCard active={true} setActive={() => {}} moviesId={1} />
      </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
