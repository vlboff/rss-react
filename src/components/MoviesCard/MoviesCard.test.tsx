import { render, screen } from '@testing-library/react';
import MoviesCard from './MoviesCard';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Movies Card', () => {
  it('add title', () => {
    render(
      <Provider store={store}>
        <MoviesCard image={null} title={'Godfather'} date={'2020-02-02'} adult={true} />
      </Provider>
    );
    expect(screen.getByText('Godfather')).toBeInTheDocument();
    expect(screen.getByText('18+')).toBeInTheDocument();
  });
});
