import { render, screen } from '@testing-library/react';
import ModalCard from './ModalCard';

describe('ModalCard', () => {
  it('displays preloader on loading', async () => {
    render(<ModalCard active={true} setActive={() => {}} moviesId={1} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
