import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function useContainer(getData) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => searchParams.get('keyword') || '');
  const [notes, setNotes] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getData().then(({ data }) => {
      const filtered = data.filter((note) => note.title.toLowerCase().includes(
        keyword.toLowerCase(),
      ));
      setNotes(filtered);
      setLoading(false);
    });

    return () => {
      setNotes([]);
      setLoading(true);
    };
  }, [keyword]);

  const onSearchHandler = (newKeyword) => {
    setKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  return [loading, keyword, notes, onSearchHandler];
}

useContainer.propTypes = {
  getData: PropTypes.func.isRequired,
};

export default useContainer;
