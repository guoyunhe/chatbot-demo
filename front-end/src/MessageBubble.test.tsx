import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Simple working test', () => {
  it('the title is visible', async () => {
    render(<App />);
    expect(
      await screen.findByText('Hi there, I am Aida, an AI bot created by Artflow')
    ).toBeInTheDocument();
  });
});
