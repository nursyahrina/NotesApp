import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import showFormattedDate from '../utils/index';
import LocaleContext from '../contexts/LocaleContext';

function NoteItem({
  id,
  title,
  body,
  createdAt,
}) {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div className="flex flex-col mt-4 rounded-xl sm:mr-[-50px] bg-container-mini sm:animate-skew">
      <div className="container py-5 grow">
        <h4 className="mb-2 text-2xl font-bold text-ellipsis overflow-hidden">
          <Link to={`/notes/${id}`} className="title-link">{title}</Link>
        </h4>
        <p className="my-2 text-sm">
          {showFormattedDate([createdAt, locale])}
        </p>
        <div className="mb-2 truncate ...">{parser(body)}</div>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
