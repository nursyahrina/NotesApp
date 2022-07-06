import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onArchive, onDelete, query }) {
  const filtered = notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase()));
  if (filtered.length > 0) {
    return (
      <div className="note-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {
          filtered.map((note) => (
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
  } else {
    return (
      <p className="text-slate-500 ml-6 text-lg">
        No available notes.
      </p>
    );
  } 
}

export default NoteList;