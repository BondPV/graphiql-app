const API_URL = 'https://countries.trevorblades.com/';

const responseToGraphQL = async (query: string, variables: {} = {}): Promise<string> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    } else {
      return 'Server error';
    }
  }
};

export { responseToGraphQL };
