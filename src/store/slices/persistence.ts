"use client";

import { useDispatch } from "react-redux";
import { persistInput } from "./user-inputs";
import { persistOutput } from "./user-outputs";
import { persistLaunchConfig } from "./launch-config";

export function useStorePersistence() {
  const dispatch = useDispatch();

  return {
    persistInput: (data: any) => dispatch(persistInput(data)),
    persistOutput: (data: any) => dispatch(persistOutput(data)),
    persistLaunchConfig: (data: any) => dispatch(persistLaunchConfig(data)),
  };
}
