// src/store/selectors.ts

import { useSelector } from "react-redux";
import { RootState } from "../index";

// Input Selector Hook
export const useUserInputSelector = (
  property: keyof RootState["input"]["inputData"]
) => {
  return useSelector((state: RootState) => state.input.inputData[property]);
};

// Output Selector Hook
export const useUserOutputSelector = (
  property: keyof RootState["output"]["outputData"]
) => {
  return useSelector((state: RootState) => state.output.outputData[property]);
};

// Launch Config Selector Hook
export const useLaunchConfigSelector = (
  property: keyof RootState["launchConfig"]["launchData"]
) => {
  return useSelector(
    (state: RootState) => state.launchConfig.launchData[property]
  );
};
