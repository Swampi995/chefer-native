export const CARS_IDS = 'cars-object';
export const SELECTED_KEY = 'selected-car-key';

export interface CarProps {
  name: string;
}

export interface CarsObject {
  [id: string]: CarProps;
}

export const EMPTY_CAR: CarProps = {
  name: '',
}
