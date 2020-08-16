import * as Server from './server';

export interface IngrediendProps {
  id: number;
  name: string;
  price: number;
}

let data = {
  method: 'POST',
  credentials: 'same-origin',
  mode: 'same-origin',
  body: JSON.stringify({
    appoid: appo_id
  }),
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json',
  }
}

export function getIngredient(): Promise<IngrediendProps> {
  return Server.GET('http://192.168.0.179:5000/api/test-integration') as any;
}

