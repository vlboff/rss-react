import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('SearchBar', () => {
  it('input in focus', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const input = screen.getByPlaceholderText('Search on the page');
    fireEvent.change(input, { target: { value: '23' } });
    expect((input as HTMLInputElement).value).toBe('23');
  });
});
