import { takeLatest, call, put, fork, all } from "redux-saga/effects";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';
import SHOP_DATA from './shop.data';  
import ShopActionTypes from './shop.types';
  
const delay = t => new Promise(resolve => setTimeout(resolve, t));

export function* fetchCollectionsAsync() {
  try {
    yield delay(1000) // simulate API CALL

    yield put(fetchCollectionsSuccess(SHOP_DATA));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
  
export function* shopSagas() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
  