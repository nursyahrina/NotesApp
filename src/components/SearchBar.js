/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { PropTypes } from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function SearchBar({ keyword, keywordChange }) {
  const { locale } = React.useContext(LocaleContext);

  return (
    <input
      className="w-full md:w-fit mx-7 mb-2 py-2 px-6 rounded-lg drop-shadow-sm"
      type="text"
      placeholder={locale === 'en' ? 'Search Note Here...' : 'Cari Catatan Disini...'}
      autoFocus
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  keyword: '',
};

export default SearchBar;
