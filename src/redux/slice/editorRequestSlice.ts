import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEditorData } from '../../types';

const defaultQuery = `query GetCountry($code: ID!) {
  country(code: $code) {
    name
    awsRegion
    capital
    currencies
    currency
    languages{
      name
      native
    }
    native
    phone
    phones
  }
}`;

const defaultVariables = `{ 
  "code": "BY"
}`;

const initialState: IEditorData = {
  query: defaultQuery,
  variables: defaultVariables,
  headers: '',
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
