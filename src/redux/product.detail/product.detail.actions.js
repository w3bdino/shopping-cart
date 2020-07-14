import ProductDetailActionTypes from './product.detail.types';

export const fetchProductDetail = productID => ({
  type: ProductDetailActionTypes.FETCH_PRODUCT_DETAIL_START,
  payload: productID,
});


export const fetchProductDetailSuccess = data => ({
  type: ProductDetailActionTypes.FETCH_PRODUCT_DETAIL_SUCCESS,
  payload: data
});

export const fetchProductDetailFailure = message => ({
  type: ProductDetailActionTypes.FETCH_PRODUCT_DETAIL_FAILURE,
  payload: message
});

