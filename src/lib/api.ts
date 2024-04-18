// export interface Users {
//   count: number;
//   next: null;
//   previous: null;
//   results: [object];
// }

const PROJECT_BASE_URL = process.env.NEXT_PUBLIC_PROJECT_BASE_URL;

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzNDc0OTg5LCJpYXQiOjE3MTM0NDYxODksImp0aSI6IjM3YzM1MDVmNGYzOTRiYTZiZTJkNTk0ZTJmZmY2MjZlIiwidXNlcl9pZCI6MTQyMn0.k3wVFqu84gJ0JDKwsvf-_lfjmMjtpMbT-UrGFZMMUJU';

const buildUrl = (...paths: string[]) =>
  `${PROJECT_BASE_URL}/${paths.join('/')}`;

// const stringifyQueryParams = (params: Record<string, string>) =>
//   new URLSearchParams(params).toString();

const sendRequest = async (url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return await res.json();
};

export const getUsers = (init?: RequestInit) => {
  return sendRequest(buildUrl('users'), {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      ...(init && init.headers),
      'Content-Type': 'application/json',
    },
  });
};
