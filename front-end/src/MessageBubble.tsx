import { Avatar, Box, CircularProgress, Paper } from '@mui/material';
import { Message } from './types';
import { useEffect, useRef } from 'react';

export interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    rootRef.current?.scrollIntoView();
  }, []);
  return (
    <Box
      ref={rootRef}
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
        <Paper
          component="img"
          src={message.content}
          style={{ maxWidth: 250, height: 'auto' }}
          onLoad={() => {
            rootRef.current?.scrollIntoView();
          }}
        />
      )}
      {message.type === 'spinner' && <CircularProgress />}
    </Box>
  );
}
