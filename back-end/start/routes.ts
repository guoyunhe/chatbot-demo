/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route';
import Chat from 'App/Models/Chat';
import Message from 'App/Models/Message';

// start a new chat
Route.post('/chats', async () => {
  const chat = await Chat.create({ title: 'New Chat' });

  // create a greeting message
  await Message.create({
    chatId: chat.id,
    from: 'bot',
    type: 'text',
    content: 'Hi there, I am Aida, an AI bot created by Artflow',
  });

  await chat.load('messages');

  return chat;
});

// get chat with messages
Route.get('/chats/:id', async ({ request }) => {
  const chat = await Chat.find(request.param('id'));
  await chat?.load('messages');
  return chat;
});

// create new message
Route.post('/chats/:chatId/messages', async ({ request }) => {
  const message = await Message.create({
    chatId: request.param('chatId'),
    from: 'user',
    type: request.input('type'),
    content: request.input('content'),
  });

  // mock chatbot response
  // in real world, it should be sent to an AI server and create a new job.
  // after the job is done, the AI server will call a webhook to update messages
  setTimeout(async () => {
    if (message.type === 'text') {
      if (message.content.includes('create story')) {
        await Message.create({
          chatId: request.param('chatId'),
          from: 'bot',
          type: 'text',
          content: 'Sure, writing story now...(this can take 10 seconds)',
        });
        const spinner = await Message.create({
          chatId: request.param('chatId'),
          from: 'bot',
          type: 'spinner',
        });
        setTimeout(async () => {
          await spinner.delete();
          await Message.create({
            chatId: request.param('chatId'),
            from: 'bot',
            type: 'text',
            content: 'Here is the start of the story you asked for, enjoy!',
          });
          await Message.create({
            chatId: request.param('chatId'),
            from: 'bot',
            type: 'text',
            content:
              "Space immigration is a dangerous journey, and the Rapsodia's crew was more than willing to accept the assistance of an experienced pilot. The ship was scheduled for an overhaul at a local repair facility, so they'd agreed that she could take it out on a test flight and report back about any issues before the work began",
          });
        }, 10 * 1000);
      } else if (message.content.includes('create portrait')) {
        await Message.create({
          chatId: request.param('chatId'),
          from: 'bot',
          type: 'text',
          content: 'Sure, creating character now...(this can take 30 seconds)',
        });
        const spinner = await Message.create({
          chatId: request.param('chatId'),
          from: 'bot',
          type: 'spinner',
        });
        setTimeout(async () => {
          await spinner.delete();
          await Message.create({
            chatId: request.param('chatId'),
            from: 'bot',
            type: 'text',
            content: 'Here is the character portrait you requested for "warhammer space trader"',
          });
          await Message.create({
            chatId: request.param('chatId'),
            from: 'bot',
            type: 'image',
            content: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
          });
        }, 10 * 1000);
      } else {
        // not in predefined cases, return general greetings
        Message.create({
          chatId: request.param('chatId'),
          from: 'bot',
          type: 'text',
          content: 'Good day, how can I help you?',
        });
      }
    }
  }, 1000);
  // mock ends

  return message;
});
