import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { AppReducerAction, AppReducer, AppReducerState } from '../reducers/appReducer';

export interface AppReduxState extends AppReducerState {
}

export interface AppReduxActions {
  setIsMetric(key: boolean): void;
}

export interface AppReduxProps extends AppReduxState, AppReduxActions {
}

const mapStateToProps = (state: AppReducer) => {
  return {
    isMetric: state.appReducer.isMetric,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AppReducerAction>) => {
    return {
      setIsMetric: (key: boolean) => dispatch({
        type: 'SET_IS_METRIC',
        key,
      }),
   };
};

export const appConnect = connect(mapStateToProps, mapDispatchToProps);
