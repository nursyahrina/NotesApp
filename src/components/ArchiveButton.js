import React from 'react';
import { PropTypes } from 'prop-types';
import { RiInboxArchiveFill } from 'react-icons/ri';

function ArchiveButton({ id, onArchive }) {
  return (
    <button type="button" className="note-item__archive rounded-bl-lg bg-slate-500 py-3 border border-white" onClick={() => onArchive(id)}>
      <RiInboxArchiveFill />
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
