import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  it('render inputs', () => {
    render(<Form setFormData={() => {}} lengthArray={1}></Form>);
    const radioInputs = screen.getAllByRole('radio');
    const checkboxInputs = screen.getAllByRole('checkbox');
    expect(radioInputs).toHaveLength(5);
    expect(checkboxInputs).toHaveLength(1);
    expect(screen.getByLabelText('Title:')).toBeInTheDocument();
    expect(screen.getByLabelText('Select release date')).toBeInTheDocument();
    expect(screen.getByLabelText('Select ganre:')).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;
    userEvent.selectOptions(selectElement, ['Action']);
    expect(screen.getByRole('option', { name: 'Action' })).toBeInTheDocument();

    const input = screen.getByPlaceholderText('movie title');
    fireEvent.change(input, { target: { value: 'Godfather' } });
    expect((input as HTMLInputElement).value).toBe('Godfather');
  });
});
