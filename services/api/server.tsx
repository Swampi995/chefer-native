const SERVER_URL = 'http://192.168.100.17:5000';

export async function GET(url: string): Promise<Response> {
  const response = await fetch(`${SERVER_URL}${url}`);

  return response.json();
}

export async function POST(url: string, body: BodyInit): Promise<Response> {
  const rsp = await fetch(`${SERVER_URL}${url}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body,
  });

  return rsp.json();
}

export async function PUT(url: string, body: BodyInit): Promise<Response> {
  const rsp = await fetch(`${SERVER_URL}${url}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body,
  });

  return rsp.json();
}
