import * as Server from './server';

export interface IngrediendProps {
  id: number;
  name: string;
  price: number;
  imageBase64: string;
}

export interface QuantifiedIngrediendProps {
  ingredient: IngrediendProps;
  amount: number;
  measurementUnit: 'G' | 'L' | 'ML' | 'KG';
}

export function getIngredient(): Promise<IngrediendProps> {
  return Server.GET('/api/get-img?id=1') as any;
}

export function addIngredient(name: string, price: number): Promise<Response> {
  const body = {
    name,
    price,
  }
  return Server.POST('/api/ingredient/insert', JSON.stringify(body));
}

export function addQuantifiedIngredient(ingredient: IngrediendProps, amount: number,
   measurementUnit: QuantifiedIngrediendProps['measurementUnit']): Promise<Response> {
  const body: QuantifiedIngrediendProps = {
    ingredient,
    amount,
    measurementUnit,
  }
  return Server.POST('/api/quantified-ingredient/insert', JSON.stringify(body));
}
