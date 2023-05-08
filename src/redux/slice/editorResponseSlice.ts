import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const placeholder = 'Hit the Play Button to get a response here';

const initialState = { value: placeholder };

const editorResponse = createSlice({
  name: 'response',
  initialState,
  reducers: {
    setResponse: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setResponse } = editorResponse.actions;
export const editorResponseReducer = editorResponse.reducer;
