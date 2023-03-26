import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import InputTitle from './InputTitle';

describe('InputTitle', () => {
  it('input in focus', () => {
    render(<InputTitle inputTitleRef={React.createRef<HTMLInputElement>()} invalidTitle={''} />);
    const input = screen.getByPlaceholderText('movie title');
    fireEvent.change(input, { target: { value: 'Godfather' } });
    expect((input as HTMLInputElement).value).toBe('Godfather');
  });
});
