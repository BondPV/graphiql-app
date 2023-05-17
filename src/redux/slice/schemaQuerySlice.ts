import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DOC_INITIAL_VALUE } from '../../constants';
import { IDocumentationSchema } from '../../types';

interface IInitialState {
  schema: IDocumentationSchema | null;
  value: string;
  previousValue: string | null;
  valueList: string[];
}

const initialState: IInitialState = {
  schema: null,
  value: DOC_INITIAL_VALUE,
  previousValue: null,
  valueList: [DOC_INITIAL_VALUE],
};

const schemaQuery = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setSchema: (state, action: PayloadAction<IDocumentationSchema>) => {
      state.schema = action.payload;
    },
    setSchemaQuery: (state, action: PayloadAction<string>) => {
      state.valueList.push(state.value);
      state.previousValue = state.valueList.at(-1) ?? DOC_INITIAL_VALUE;
      state.value = action.payload;
    },
    setSchemaPreviousQuery: (state) => {
      state.value = state.previousValue ?? DOC_INITIAL_VALUE;
      state.valueList.pop();
      state.previousValue = state.valueList.at(-1) ?? DOC_INITIAL_VALUE;
    },
  },
});

export const { setSchema, setSchemaQuery, setSchemaPreviousQuery } = schemaQuery.actions;
export const schemaQueryReducer = schemaQuery.reducer;
