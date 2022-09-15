import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import showFormattedDate from '../utils/index';

function NoteItem({
  id,
  title,
  body,
  createdAt,
}) {
  return (
    <div className="flex flex-col mt-4 rounded-xl sm:mr-[-50px] bg-container sm:animate-skew">
      <div className="container py-5 grow">
        <h4 className="mb-2 text-2xl font-bold text-indigo-900 text-ellipsis overflow-hidden">
          <Link to={`/notes/${id}`} className="hover:text-indigo-700 hover:border-b-4 hover:border-indigo-700">{title}</Link>
        </h4>
        <p className="mb-1 text-sm text-slate-600">
          {showFormattedDate(createdAt)}
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
