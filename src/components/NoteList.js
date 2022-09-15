import React from 'react';
import { PropTypes } from 'prop-types';
import NoteItem from './NoteItem';
import LocaleContext from '../contexts/LocaleContext';

function NoteList({ notes }) {
  const { locale } = React.useContext(LocaleContext);

  if (notes.length > 0) {
    return (
      <div className="sm:mr-[50px] mt-6 mb-12 px-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            createdAt={note.createdAt}
          />
        ))}
      </div>
    );
  }
  return <p className="text-slate-200 ml-8 mt-6 text-lg">{locale === 'en' ? 'No available notes.' : 'Tidak ada catatan tersedia.'}</p>;
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    owner: PropTypes.string,
    archived: PropTypes.bool,
    createdAt: PropTypes.string,
  })).isRequired,
};

export default NoteList;
