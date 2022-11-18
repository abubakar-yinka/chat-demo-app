import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AccountState } from './types';

// Define the initial state using that type
const initialState: AccountState = {
  userName: '',
  isAuthenticated: false,
  id: '',
};

export const accountSlice = createSlice({
  name: 'account',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<AccountState>) => {
      state.userName = action.payload.userName;
      state.id = action.payload.id;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { loginUser } = accountSlice.actions;

export default accountSlice.reducer;
