import { render, screen } from '@testing-library/react';
import FieldOfCards from './FieldOfCards';

describe('FieldOfCards', () => {
  it('displays preloader on loading', async () => {
    render(<FieldOfCards searchQuery={'avatar'} searchValue={'avatar'} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
