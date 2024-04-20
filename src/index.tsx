import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { GlobalStyles } from "./theme/globalStyles";
import { theme } from "./theme/theme";
import { utils } from "./utils";
import useMockAdapter from "./api/useMockAdapter";

import "normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: utils.error.onError,
  }),
  mutationCache: new MutationCache({
    onError: utils.error.onError,
  }),
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, retry: 0, refetchOnMount: false },
  },
});

const RootApp = () => {
  useMockAdapter();

  return <App />;
};

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RootApp />
        <GlobalStyles />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
