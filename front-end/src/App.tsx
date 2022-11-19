import { Box, Button, OutlinedInput, Paper } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { Send } from '@mui/icons-material';
import { Chat, Message } from './types';
import axios from 'axios';
import MessagesList from './MessagesList';

function App() {
  const [chat, setChat] = useState<Chat | null>(null);
  const [message, setMessage] = useState('');

  const loadChat = useCallback(async () => {
    let data: Chat;
    if (chat?.id) {
      data = (await axios.get<Chat>('/chats/' + chat.id)).data;
    } else {
      data = (await axios.post<Chat>('/chats')).data;
    }
    setChat(data);
  }, [chat?.id]);

  const sendMessage = useCallback(async () => {
    if (chat?.id) {
      axios.post<Message>('/chats/' + chat.id + '/messages', { type: 'text', content: message });
      setMessage('');
    }
  }, [message, chat?.id]);

  useEffect(() => {
    // initialize chat
    loadChat();

    // refresh chat messages every second
    const timer = setInterval(() => {
      loadChat();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [loadChat]);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        background: '#333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper
        sx={{
          width: '100%',
          maxWidth: 400,
          height: '100%',
          maxHeight: 700,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flex: '1 1 100%', background: '#eee', overflow: 'auto' }}>
          <MessagesList messages={chat?.messages || []} />
        </Box>
        <Box sx={{ p: 1, display: 'flex', gap: 1 }}>
          <OutlinedInput
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            size="small"
            sx={{ flex: '1 1 100%' }}
          />
          <Button variant="contained" onClick={sendMessage} disabled={!message}>
            <Send />
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default App;
