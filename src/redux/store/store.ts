import { configureStore } from '@reduxjs/toolkit';
import { editorRequestReducer, schemaQueryReducer } from '../slice';
import { editorResponseReducer } from '../slice';

export const store = configureStore({
  reducer: {
    editorRequest: editorRequestReducer,
    editorResponse: editorResponseReducer,
    schemaQueryType: schemaQueryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
