import * as carStorage from '../../services/storage/car'

export type CarReducerAction = {
  type: 'ADD_CAR';
  id: string;
  name: string;
  color: string;
  weight: string;
} | {
  type: 'SET_SELECTED_CAR';
  key: string;
};

export interface CarReducerState {
  selectedKey: string;
  cars: carStorage.CarsObject;
}

export interface CarReducer {
  carReducer: CarReducerState;
}

const initialState: CarReducerState = {
  selectedKey: '',
  cars: {},
};

const carReducer = (state: CarReducerState = initialState, action: CarReducerAction) => {
  switch (action.type) {
    case 'ADD_CAR': {
      const newCar: carStorage.CarProps = {
        name: action.name,
      }

      state = { ...state, cars: { ...state.cars, [action.id]: { ...newCar }}}
      return state;
    }
    case 'SET_SELECTED_CAR': {
      state = { ...state, selectedKey: action.key };
      return state;
    }
    default:
      return state;
  }
};

export default carReducer;
