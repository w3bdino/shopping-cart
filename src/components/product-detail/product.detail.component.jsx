import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getProductDetail, selectIsProductLoaded } from '../../redux/product.detail/product.detail.selectors';
import { fetchProductDetail } from '../../redux/product.detail/product.detail.actions';
import Spinner from '../spinner/spinner.component';

import './product.detail.scss';


const ProductDetail = ({ info, match, fetchProduct }) => {

  useEffect(() => {
    fetchProduct(match.params.productId);
  }, [fetchProduct, match.params.productId]);  

  if(info.isFetching) return <Spinner />;  

  return (
    <div className='collection-page'>

    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchProduct: (productID) => dispatch(fetchProductDetail(productID))
});

const mapStateToProps = createStructuredSelector({
  info: getProductDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
