import { takeLatest, call, put, fork, all } from "redux-saga/effects";
import { fetchCategoriesSuccess, fetchCategoriesFailure } from './directory.actions';
import DIRECTORY_DATA from './directory.data';  
import HomeActionTypes from './directory.types';
  
const delay = t => new Promise(resolve => setTimeout(resolve, t));

export function* fetchCategoriesAsync() {
  try {
    yield delay(1000) // simulate API CALL
    yield put(fetchCategoriesSuccess(DIRECTORY_DATA));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
}
  
export function* categoriesSagas() {
  yield takeLatest(
    HomeActionTypes.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}
  