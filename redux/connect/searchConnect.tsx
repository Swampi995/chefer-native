import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { SearchReducerAction, SearchReducer, SearchReducerState } from '../reducers/searchReducer';

export interface SearchReduxState extends SearchReducerState {
  searchValue: string;
}

export interface SearchReduxActions {
  setSearchValue(value: string): void;
  clearSearch(): void;
}

export interface SearchReduxProps extends SearchReduxState, SearchReduxActions {
}

const mapStateToProps = (state: SearchReducer) => {
  return {
    searchValue: state.searchReducer.searchValue,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<SearchReducerAction>) => {
    return {
      setSearchValue: (value: string) => dispatch({
        type: 'SET',
        value,
      }),
      clearSearch: () => dispatch({
        type: 'CLEAR',
      }),
   };
};

export const searchConnect = connect(mapStateToProps, mapDispatchToProps);
