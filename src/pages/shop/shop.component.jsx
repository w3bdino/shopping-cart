import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import ProductDetail from '../../components/product-detail/product.detail.component'; 

const ShopPage = ({ match, fetchCollectionsStart }) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
      <Route
        path={`${match.path}/:collectionId/:productId`}
        component={ProductDetail}
      />      
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
