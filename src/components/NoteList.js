import React from 'react';
import { PropTypes } from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({
  notes,
}) {
  if (notes > 0) {
    return (
      <div className="sm:mr-[50px] mt-6 mb-12 px-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            {...note}
          />
        ))}
      </div>
    );
  }
  return <p className="text-slate-200 ml-8 text-lg">No available notes.</p>;
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    archived: PropTypes.bool,
    createdAt: PropTypes.string,
  })).isRequired,
  // query: PropTypes.string,
};

// NoteList.defaultProps = {
//   query: '',
// };

export default NoteList;
