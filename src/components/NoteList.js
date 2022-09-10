import React from 'react';
import { PropTypes } from 'prop-types';
import NoteItem from './NoteItem';

function NoteList({
  notes, onArchive, onDelete, query,
}) {
  // eslint-disable-next-line react/prop-types
  const filtered = notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()));
  if (filtered.length > 0) {
    return (
      <div className="note-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            onArchive={onArchive}
            onDelete={onDelete}
            {...note}
          />
        ))}
      </div>
    );
  }
  return <p className="text-slate-500 ml-6 text-lg">No available notes.</p>;
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.number,
    body: PropTypes.string,
    archived: PropTypes.bool,
    createdAt: PropTypes.string,
  })).isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default NoteList;
