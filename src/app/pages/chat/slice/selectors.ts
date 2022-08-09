import type { RootState } from '../../../../store/configureStore';

// Other code such as selectors can use the imported `RootState` type
export const selectMessages = (state: RootState) => state.chats.messages;
