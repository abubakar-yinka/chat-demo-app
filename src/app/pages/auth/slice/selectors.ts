import type { RootState } from '../../../../store/configureStore';

// Other code such as selectors can use the imported `RootState` type
export const selectUserName = (state: RootState) => state.account.userName;
export const selectAuthState = (state: RootState) => state.account.isAuthenticated;
export const selectUserId = (state: RootState) => state.account.id;
