import ProductDetailActionTypes from './product.detail.types';

const INITIAL_STATE = {
  productdetail: {},
  isFetching: false,
  error: undefined
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductDetailActionTypes.FETCH_PRODUCT_DETAIL_START:
      return {
        ...state,
        isFetching: true
      };
    case ProductDetailActionTypes.FETCH_PRODUCT_DETAIL_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isFetching: false,
        productdetail: action.payload
      };
    case ProductDetailActionTypes.FETCH_PRODUCT_DETAIL_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default productReducer;
