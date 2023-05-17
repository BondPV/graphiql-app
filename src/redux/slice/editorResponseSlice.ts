import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: object | string } = { value: '' };

const editorResponse = createSlice({
  name: 'response',
  initialState,
  reducers: {
    setResponse: (state, action: PayloadAction<object | string>) => {
      state.value = action.payload;
    },
  },
});

export const { setResponse } = editorResponse.actions;
export const editorResponseReducer = editorResponse.reducer;
