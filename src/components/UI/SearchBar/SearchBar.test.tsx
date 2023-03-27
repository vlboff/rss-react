import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('input in focus', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search on the page');
    fireEvent.change(input, { target: { value: '23' } });
    expect((input as HTMLInputElement).value).toBe('23');
  });
});
