import { configureStore } from '@reduxjs/toolkit';
import ChatReducer from '../app/pages/chat/slice';
import AccountReducer from '../app/pages/auth/slice';

export const store = configureStore({
  reducer: {
    chats: ChatReducer,
    account: AccountReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
