export type AppReducerAction = {
  type: 'SET_IS_METRIC';
  key: boolean;
};

export interface AppReducerState {
  isMetric: boolean;
}

export interface AppReducer {
  appReducer: AppReducerState;
}

const initialState: AppReducerState = {
  isMetric: true,
};

const appReducer = (state: AppReducerState = initialState, action: AppReducerAction) => {
  switch (action.type) {
    case 'SET_IS_METRIC': {
      state = { ...state, isMetric: action.key };
      return state;
    }
    default:
      return state;
  }
};

export default appReducer;
