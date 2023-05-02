import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RenderHookResult, renderHook } from "@testing-library/react";

const queryClient = new QueryClient();

export const wrapper = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );

export const renderHookWithQueryWrapper = (hook: (initialProps: unknown) => unknown): RenderHookResult<any, any> => {
    return renderHook(hook, {wrapper})
}
