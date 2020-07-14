import { takeLatest, put, select } from 'redux-saga/effects';

import CartActionTypes from './cart.types';
import { clearItemFromCart, removeItem, addItem } from './cart.actions';
import { addItemToCart, removeItemFromCart, getCartState } from './cart.utils';


export function* cartAddItem(action) {
  try {
    let cartState = yield select(getCartState);
    let upatedCartItems = addItemToCart(cartState.cartItems, action.payload);
    yield put(addItem(upatedCartItems));
  } catch (error) {
    console.log(error);
  }
}

export function* cartRemoveItem(action) {
  try {
    let cartState = yield select(getCartState);
    let upatedCartItems = removeItemFromCart(cartState.cartItems, action.payload);    
    yield put(removeItem(upatedCartItems));
  } catch (error) {
    console.log(error);
  }
}

export function* cartClearItemCart(action) {
  try {
    yield put(clearItemFromCart(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* cartSagas() {
  yield takeLatest(CartActionTypes.ADD_ITEM_REQUEST, cartAddItem);  
  yield takeLatest(CartActionTypes.REMOVE_ITEM_REQUEST, cartRemoveItem);    
  yield takeLatest(CartActionTypes.CLEAR_ITEM_FROM_CART_REQUEST, cartClearItemCart);    
}
