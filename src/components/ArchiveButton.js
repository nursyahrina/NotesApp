import React from "react";
 
function ArchiveButton({ id, onArchive }) {
  return <button className="note-item__archive rounded-bl-lg bg-slate-500 py-3 border border-white" onClick={() => onArchive(id)}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  </button>
}
 
export default ArchiveButton;