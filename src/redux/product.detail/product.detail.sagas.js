import { takeLatest, call, put, fork, all } from "redux-saga/effects";
import { fetchProductDetailSuccess, fetchProductDetailFailure } from './product.detail.actions';
import PRODUCT_DATA from '../directory/directory.data';  
import ProductDetailActionTypes from './product.detail.types';
  
const delay = t => new Promise(resolve => setTimeout(resolve, t));

export function* fetchProductDetailAsync(action) {
  try {
    console.log(action.payload);
    yield delay(1000) // simulate API CALL
    const productdetail = PRODUCT_DATA.sections.find(product => product.title === action.payload);

    yield put(fetchProductDetailSuccess(productdetail));
  } catch (error) {
    yield put(fetchProductDetailFailure(error.message));
  }
}
  
export function* productSagas() {
  yield takeLatest(
    ProductDetailActionTypes.FETCH_PRODUCT_DETAIL_START,
    fetchProductDetailAsync
  );
}
  