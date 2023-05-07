import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const defaultRequest = `query GetData {
  ...param
}`;

const initialState = { value: defaultRequest };

const userRequest = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequest: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setRequest } = userRequest.actions;
export const userRequestReducer = userRequest.reducer;
