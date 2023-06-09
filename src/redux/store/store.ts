import { configureStore } from '@reduxjs/toolkit';
import { alertMsgReducer, editorRequestReducer, schemaQueryReducer } from '../slice';
import { editorResponseReducer } from '../slice';

export const store = configureStore({
  reducer: {
    editorRequest: editorRequestReducer,
    editorResponse: editorResponseReducer,
    schemaQueryType: schemaQueryReducer,
    alertMsg: alertMsgReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
