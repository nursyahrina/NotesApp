import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onArchive, onDelete, query }) {
  return (
    <div className="note-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())).map((note) => (
          <NoteItem 
          key={note.id}
          id={note.id}
          onArchive={onArchive}
          onDelete={onDelete}
          {...note} />
        ))
      }
    </div>
  );
}

export default NoteList;