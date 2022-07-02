import React from "react";
import ActivateButton from "./ActivateButton";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils";

function NoteItem({ id, title, body, archived, createdAt, onArchive, onDelete }) {
  return (
    <div className="note-item flex flex-col mt-4 bg-indigo-100 rounded-lg drop-shadow-sm">
      <div className="note-item_content container py-5 grow">
        <h4 className="note-item__title mb-2 text-2xl font-bold text-indigo-900">{title}</h4>
        <p className="note-item__date mb-1 text-sm text-slate-600">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body mb-2">{body}</p>
      </div>
      <div className="grid grid-cols-2">
        { archived 
          ? <ActivateButton id={id} onArchive={onArchive} /> 
          : <ArchiveButton id={id} onArchive={onArchive} /> }
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
}

export default NoteItem;