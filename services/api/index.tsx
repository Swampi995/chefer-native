import * as Server from './server';

export interface IngrediendProps {
  id: number;
  name: string;
  price: number;
}

export function getIngredient(): Promise<IngrediendProps> {
  return Server.GET('http://localhost:5000/api/test-integration') as any;
}
