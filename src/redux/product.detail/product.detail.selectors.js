import { createSelector } from 'reselect';

const productState = (state, props) => state.productinfo;

export const getProductDetail = createSelector(
    [productState],
    productinfo => productinfo
  );


