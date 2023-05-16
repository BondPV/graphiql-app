import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DOC_INITIAL_VALUE } from '../../constants';

const initialState = {
  value: DOC_INITIAL_VALUE,
  previousValue: DOC_INITIAL_VALUE,
  valueList: [DOC_INITIAL_VALUE],
};

const schemaQuery = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setSchemaQuery: (state, action: PayloadAction<string>) => {
      state.valueList.push(state.value);
      state.previousValue = state.valueList.at(-1) ?? DOC_INITIAL_VALUE;
      state.value = action.payload;
    },
    setSchemaPreviousQuery: (state) => {
      state.value = state.previousValue;
      state.valueList.pop();
      state.previousValue = state.valueList.at(-1) ?? DOC_INITIAL_VALUE;
    },
  },
});

export const { setSchemaQuery, setSchemaPreviousQuery } = schemaQuery.actions;
export const schemaQueryReducer = schemaQuery.reducer;
