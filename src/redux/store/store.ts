import { configureStore } from '@reduxjs/toolkit';
import { userRequestReducer } from '../slice';

export const store = configureStore({
  reducer: {
    userRequest: userRequestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
