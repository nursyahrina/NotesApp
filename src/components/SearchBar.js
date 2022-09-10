import React from 'react';
import { PropTypes } from 'prop-types';

function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      className="mb-2 py-2 px-6 border border-indigo-800 rounded-lg drop-shadow-sm"
      type="text"
      placeholder="Search Note Here..."
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
