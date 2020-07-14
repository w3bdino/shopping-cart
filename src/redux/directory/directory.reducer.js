import HomeActionTypes from './directory.types';

const INITIAL_STATE2 = {
  sections: [],
  isFetching: false,
  errorMessage: undefined
};

const directoryReducer = (state = INITIAL_STATE2, action) => {
  switch (action.type) {
    case HomeActionTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isFetching: true
      };
    case HomeActionTypes.FETCH_CATEGORIES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        sections: action.payload.sections
      };
    case HomeActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };      
    default:
      return state;
  }
};

export default directoryReducer;
