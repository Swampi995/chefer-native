export async function GET(url: string): Promise<Response> {
  const response = await fetch(url);
  return response.json();
}

export async function POST(url: string, body: BodyInit): Promise<Response> {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  });
  return response.json();
}
