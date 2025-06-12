import { configureStore } from "@reduxjs/toolkit";
import { userInputReducer } from "./slices/user-inputs";
import { userOutputReducer } from "./slices/user-outputs";
import { launchConfigReducer } from "./slices/launch-config";
import type { Middleware } from "redux";

let middlewares: Middleware[] = [];

if (process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger");
  const logger = createLogger();
  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    input: userInputReducer,
    output: userOutputReducer,
    launchConfig: launchConfigReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares), // ✅ Add logger middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
