import { Avatar, Box, Button, CircularProgress, OutlinedInput, Paper } from '@mui/material';
import { Send } from '@mui/icons-material';
import { Message } from './types';

export interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: message.from === 'bot' ? 'row' : 'row-reverse',
        gap: 1,
        p: 1,
      }}
    >
      <Avatar>{message.from === 'bot' ? 'A' : 'C'}</Avatar>

      {message.type === 'text' && (
        <Paper
          sx={{
            p: 1,
            maxWidth: 250,
          }}
        >
          {message.content}
        </Paper>
      )}
      {message.type === 'image' && (
        <Paper component="img" src={message.content} style={{ maxWidth: 250, height: 'auto' }} />
      )}
      {message.type === 'spinner' && <CircularProgress />}
    </Box>
  );
}
