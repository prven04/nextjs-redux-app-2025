import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OutputState {
  outputData: any;
}

const initialState: OutputState = {
  outputData: null,
};

const UserOutputsStateSlice = createSlice({
  name: "userOutput",
  initialState,
  reducers: {
    persistOutput(state, action: PayloadAction<any>) {
      state.outputData = action.payload;
    },
  },
});

export const { persistOutput } = UserOutputsStateSlice.actions;
export const userOutputReducer = UserOutputsStateSlice.reducer;
