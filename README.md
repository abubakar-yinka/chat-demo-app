# **Simple Chat App with `LocalStorage` Demo**

A Simple cross-tab communication using `LocalStorage` API and events visually presented as a chat room for all users.

## *Technology Used*

- React, Redux Toolkit, Hooks and Chakra UI,
- TypeScript: For static typing, type inference, IntelliSense support

## *User Flow*

1. Before entering the chat, the user is prompted to enter his name, which is further used to identify his messages - User Authentication.
2. Messages are saved in `localstorage`, without a backend.
3. Each new browser tab is a new user that joined the chat room, giving that the name hasn't been taken. The new messages in the chat room are be updated across all active browser tabs without the use socket.io.
4. Implemented functionality for:
   - sending messages to chat,
   - showing message history and,
   - loading more messages when scroll the chats to the top, after 25 messages

## *Screenshots*
![Repository Banner](screenshots/auth_screen_prompt.png)
![Repository Banner](screenshots/chat_screen_1.png)
![Repository Banner](screenshots/chat_screen_2.png)
![Repository Banner](screenshots/chat_screen_3.png)