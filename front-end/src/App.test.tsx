import App from './App';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<App/>', () => {
  it('greetings', async () => {
    render(<App />);
    expect(
      await screen.findByText('Hi there, I am Aida, an AI bot created by Artflow')
    ).toBeInTheDocument();
  });

  it('replies message', async () => {
    render(<App />);

    const input = await screen.findByTestId('message-box');
    const button = await screen.findByTestId('send-button');
    await userEvent.type(input, 'hi');
    await userEvent.click(button);

    expect(
      await screen.findByText('Good day, how can I help you?', {}, { timeout: 10 * 1000 })
    ).toBeInTheDocument();
  });

  it('creates story', async () => {
    render(<App />);

    const input = await screen.findByTestId('message-box');
    const button = await screen.findByTestId('send-button');
    await userEvent.type(input, ' create story ');
    await userEvent.click(button);

    expect(
      await screen.findByText(
        'Here is the start of the story you asked for, enjoy!',
        {},
        { timeout: 10 * 1000 }
      )
    ).toBeInTheDocument();
  });

  it('creates portrait', async () => {
    render(<App />);

    const input = await screen.findByTestId('message-box');
    const button = await screen.findByTestId('send-button');
    await userEvent.type(input, ' create portrait ');
    await userEvent.click(button);

    expect(
      await screen.findByText(
        'Here is the character portrait you requested for "warhammer space trader"',
        {},
        { timeout: 20 * 1000 }
      )
    ).toBeInTheDocument();
  });
});
