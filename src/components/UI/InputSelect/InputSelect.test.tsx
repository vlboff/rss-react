import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import InputSelect from './InputSelect';

describe('InputSelect', () => {
  it('input value', () => {
    render(<InputSelect inputSelectRef={React.createRef<HTMLSelectElement>()} invalidGanre={''} />);
    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
    userEvent.selectOptions(selectElement, ['Action']);
    expect(screen.getByRole('option', { name: 'Action' })).toBeInTheDocument();
  });
});
