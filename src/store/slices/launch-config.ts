import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LaunchConfigState {
  launchData: any;
}

const initialState: LaunchConfigState = {
  launchData: null,
};

const launchConfigSlice = createSlice({
  name: "launchConfig",
  initialState,
  reducers: {
    persistLaunchConfig(state, action: PayloadAction<any>) {
      state.launchData = action.payload;
    },
  },
});

export const { persistLaunchConfig } = launchConfigSlice.actions;
export const launchConfigReducer = launchConfigSlice.reducer;
