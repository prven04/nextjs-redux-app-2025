import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
  inputData: {
    firstName: string;
    email: string;
  };
}

const initialState: InputState = {
  inputData: {
    firstName: "",
    email: "",
  },
};

const UserInputsStateSlice = createSlice({
  name: "userInputs",
  initialState,
  reducers: {
    persistInput(state, action: PayloadAction<any>) {
      state.inputData = action.payload;
    },
  },
});

export const { persistInput } = UserInputsStateSlice.actions;
export const userInputReducer = UserInputsStateSlice.reducer;
