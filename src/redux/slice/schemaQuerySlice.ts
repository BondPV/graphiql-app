import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialValue = 'Query';

const initialState = {
  value: initialValue,
  previousValue: initialValue,
  valueList: [initialValue],
};

const schemaQuery = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setSchemaQuery: (state, action: PayloadAction<string>) => {
      state.valueList.push(state.value);
      state.previousValue = state.valueList.at(-1) ?? initialValue;
      state.value = action.payload;
    },
    setSchemaPreviousQuery: (state) => {
      state.value = state.previousValue;
      state.valueList.pop();
      state.previousValue = state.valueList.at(-1) ?? initialValue;
    },
  },
});

export const { setSchemaQuery, setSchemaPreviousQuery } = schemaQuery.actions;
export const schemaQueryReducer = schemaQuery.reducer;
