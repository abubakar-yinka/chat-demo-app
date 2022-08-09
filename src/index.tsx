import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './store/configureStore';
import { saveChats, STORAGE_KEY } from './utils/storage';
import { loadMessages } from './app/pages/chat/slice';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

store.subscribe(() => {
  const state = store.getState();
  saveChats(state.chats.messages || []);
});

window.addEventListener('storage', (event) => {
  if (event.key !== STORAGE_KEY) {
    return;
  }

  const loadedMessages = JSON.parse(event.newValue as string);
  if (!Array.isArray(loadedMessages)) {
    return;
  }

  store.dispatch(loadMessages(loadedMessages));
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
