import React from 'react';
import { PropTypes } from 'prop-types';
import parser from 'html-react-parser';
import showFormattedDate from '../utils/index';

function NoteDetail({
  title,
  body,
  createdAt,
}) {
  return (
    <div className="section-container">
      <h2 className="section-title text-slate-900 break-all lg:text-4xl ml-0 lg:ml-6">
        {title}
      </h2>
      <p className="mt-3 my-6 px-0 lg:px-6 text-slate-600">
        {showFormattedDate(createdAt)}
      </p>
      <div className="px-0 lg:px-6 lg:text-xl">{parser(body)}</div>
    </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteDetail;
