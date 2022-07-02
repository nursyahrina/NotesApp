import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onArchive, onDelete }) {
  return (
    <div className="note-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        notes.map((note) => (
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