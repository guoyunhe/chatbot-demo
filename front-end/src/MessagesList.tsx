import { Box, Button, OutlinedInput, Paper } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Send } from '@mui/icons-material';
import { Chat, Message } from './types';
import axios from 'axios';
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
