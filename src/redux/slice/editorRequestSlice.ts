import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const defaultRequest = `query GetCountry {
  country(code: "BY") {
    name
    native
    capital
    currency
  }
}`;

const initialState = { value: defaultRequest };

const editorRequest = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequest: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setRequest } = editorRequest.actions;
export const editorRequestReducer = editorRequest.reducer;
