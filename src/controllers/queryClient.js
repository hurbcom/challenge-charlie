import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      retry: false,
    },
  },
});

if (process.env.NODE_ENV === "development") {
  window.queryClient = queryClient;
}

export default queryClient;
