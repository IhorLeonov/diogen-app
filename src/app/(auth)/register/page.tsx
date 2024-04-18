'use client';

import { getUsers } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import {
  HydrationBoundary,
  dehydrate,
  useQuery,
  useMutation,
} from '@tanstack/react-query';
import React from 'react';

interface RegisterPageProps {}

export default function RegisterPage({}: RegisterPageProps) {
  // const queryClient = getQueryClient();

  const { data, isPending } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 10 * 1000,
  });

  // const { mutateAsync, isPending } = useMutation({
  //   mutationFn: getUsers,
  //   onSuccess: () => {},
  // });

  console.log('data', data);
  console.log('isPending', isPending);

  return <div>Register page</div>;
}
