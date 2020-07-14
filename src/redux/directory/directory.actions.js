import HomeActionTypes from './directory.types';

export const fetchCategoriesStart = () => ({
  type: HomeActionTypes.FETCH_CATEGORIES_START
});

export const fetchCategoriesSuccess = collectionsMap => ({
  type: HomeActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: collectionsMap
});

export const fetchCategoriesFailure = errorMessage => ({
  type: HomeActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: errorMessage
});

