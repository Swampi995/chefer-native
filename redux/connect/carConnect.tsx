import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as carStorage from '../../services/storage/car'

import { CarReducerAction, CarReducer, CarReducerState } from '../reducers/carReducer';

export interface CarReduxState extends CarReducerState {
  selectedCar: carStorage.CarProps;
}

export interface CarReduxActions {
  setSelectedCar(key: string): void;
  addCar(id: string, name: string, color: string, weight: string): void;
}

export interface CarReduxProps extends CarReduxState, CarReduxActions {
}

const mapStateToProps = (state: CarReducer) => {
  return {
    selectedCar: state.carReducer.cars[state.carReducer.selectedKey] || carStorage.EMPTY_CAR,
    selectedKey: state.carReducer.selectedKey,
    cars: state.carReducer.cars,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CarReducerAction>) => {
    return {
      addCar: (id: string, name: string, color: string, weight: string) => dispatch({
        type: 'ADD_CAR',
        id,
        name,
        color,
        weight,
      }),
      setSelectedCar: (key: string) => dispatch({
        type: 'SET_SELECTED_CAR',
        key,
      }),
   };
};

export const carConnect = connect(mapStateToProps, mapDispatchToProps);
