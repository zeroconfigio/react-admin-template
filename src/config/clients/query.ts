import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: 5 * 1000, // 5 seconds
      refetchOnMount: 'always',
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
    mutations: {
      retryDelay: 10000,
    },
  },
});

export default queryClient;
