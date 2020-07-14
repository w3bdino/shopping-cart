import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections, selectIsDirectoryFetching } from '../../redux/directory/directory.selectors';
import { fetchCategoriesStart } from '../../redux/directory/directory.actions';
import Spinner from '../spinner/spinner.component';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ 
  sections, 
  isLoading, 
  fetchCategoriesStart }) => {

  useEffect(() => {
    fetchCategoriesStart();
  }, []);

  if(isLoading) return <Spinner />;

  return (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
  )
};

const mapDispatchToProps = dispatch => ({
  fetchCategoriesStart: () => dispatch(fetchCategoriesStart())
});

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
  isLoading: selectIsDirectoryFetching,
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
