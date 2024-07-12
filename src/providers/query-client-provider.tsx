"use client";

import {
  QueryClient,
  QueryClientProvider as ReactQueryProvider,
} from "@tanstack/react-query";
import React from "react";

const QueryClientProvider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <ReactQueryProvider client={queryClient}>{children}</ReactQueryProvider>
  );
};

export default QueryClientProvider;
