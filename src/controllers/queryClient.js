import { QueryClient } from "@tanstack/react-query";

export default new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      retry: false,
    },
  },
});
