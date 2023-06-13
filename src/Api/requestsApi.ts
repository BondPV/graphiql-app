import { IRequestFetch } from '@/types';

const API_URL = import.meta.env.VITE_API_URL;

const requestToGraphQL = async ({
  query,
  variables,
  headers,
}: IRequestFetch): Promise<object | string> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({ query, variables }),
    });

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return `Error: ${error.message}`;
    } else {
      return 'Error: server error';
    }
  }
};

export { requestToGraphQL };
