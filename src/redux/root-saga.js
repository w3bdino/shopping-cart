import { all, call } from 'redux-saga/effects';

import { shopSagas } from './shop/shop.sagas';
import { cartSagas } from './cart/cart.sagas';
import { categoriesSagas } from './directory/directory.sagas';
import { productSagas } from './product.detail/product.detail.sagas';

export default function* rootSaga() {
  yield all([
    call(shopSagas), 
    call(categoriesSagas), 
    call(cartSagas), 
    call(productSagas)
  ]);
}
