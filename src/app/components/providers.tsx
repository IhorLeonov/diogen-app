'use client';

import React, { useMemo } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { CounterStoreProvider } from '@/stores/counter/counter-provider';
import { UserStoreProvider } from '@/stores/user/user-provider';

export default function Providers({ children }: React.PropsWithChildren) {
  const client = useMemo(() => new QueryClient(), []);

  return (
    <CounterStoreProvider>
      <UserStoreProvider>
        <QueryClientProvider client={client}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserStoreProvider>
    </CounterStoreProvider>
  );
}
