import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AlertSeverityType = 'error' | 'info' | 'success' | 'warning';

interface IAlertMsgState {
  message: string | null;
  severity?: AlertSeverityType | null;
}

const initialState: IAlertMsgState = { message: null, severity: null };

const alertMsg = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setAlertMsg: (state, action: PayloadAction<IAlertMsgState>) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    clearAlertMsg(state) {
      state.message = null;
      state.severity = null;
    },
  },
});

export const { setAlertMsg, clearAlertMsg } = alertMsg.actions;
export const alertMsgReducer = alertMsg.reducer;
