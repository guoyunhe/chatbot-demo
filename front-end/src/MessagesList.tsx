import { Box } from '@mui/material';
import { Message } from './types';
import MessageBubble from './MessageBubble';

export interface MessagesListProps {
  messages: Message[];
}

export default function MessagesList({ messages }: MessagesListProps) {
  return (
    <Box sx={{}}>
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </Box>
  );
}
