import React from 'react';
import { PropTypes } from 'prop-types';
import { RiInboxArchiveFill } from 'react-icons/ri';

function ArchiveButton({ id, onArchive }) {
  return (
    <button type="button" className="button-action bg-secondary-hover animate-scale" onClick={() => onArchive(id)}>
      <RiInboxArchiveFill size={40} className="p-1 text-white drop-shadow-lg" />
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
