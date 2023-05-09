import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IEditorRequest {
  query: string;
  variables: string;
  headers: string;
}

const defaultQuery = `query GetCountry {
  country(code: "BY") {
    name
    native
    capital
    currency
  }
}`;

const initialState: IEditorRequest = {
  query: defaultQuery,
  variables: 'variables',
  headers: 'headers',
};

const editorRequest = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequestQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },

    setRequestVariables: (state, action: PayloadAction<string>) => {
      state.variables = action.payload;
    },

    setRequestHeaders: (state, action: PayloadAction<string>) => {
      state.headers = action.payload;
    },
  },
});

export const { setRequestQuery, setRequestVariables, setRequestHeaders } = editorRequest.actions;
export const editorRequestReducer = editorRequest.reducer;
