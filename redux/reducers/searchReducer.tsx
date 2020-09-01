export type SearchReducerAction = {
  type: 'SET';
  value: string
} | {
  type: 'CLEAR';
};

export interface SearchReducerState {
  searchValue: string;
}

export interface SearchReducer {
  searchReducer: SearchReducerState;
}

const initialState: SearchReducerState = {
  searchValue: '',
};

const searchReducer = (state: SearchReducerState = initialState, action: SearchReducerAction) => {
  switch (action.type) {
    case 'SET': {
      state = { ...state, searchValue: action.value }
      return state;
    }
    case 'CLEAR': {
      state = { ...state, searchValue: '' }
      return state;
    }
    default:
      return state;
  }
};

export default searchReducer;
