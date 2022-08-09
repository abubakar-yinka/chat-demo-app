import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ChatState, Message } from './types';
import { loadChats } from '../../../../utils/storage';

// Define the initial state using that type
const initialState: ChatState = {
  messages: loadChats(),
};

export const chatSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    sendMessage: (state, action: PayloadAction<Message>) => {
      state.messages = [...state.messages, action.payload];
    },
    loadMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    resetState: (state) => {
      state.messages = [];
    },
  },
});

export const { sendMessage, loadMessages, resetState } = chatSlice.actions;

export default chatSlice.reducer;
