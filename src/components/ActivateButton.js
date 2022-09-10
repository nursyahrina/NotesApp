import React from 'react';
import { PropTypes } from 'prop-types';
import { RiInboxUnarchiveFill } from 'react-icons/ri';

function ActivateButton({ id, onArchive }) {
  return (
    <button type="button" className="note-item__activate rounded-bl-lg bg-indigo-700 py-3 border border-white" onClick={() => onArchive(id)}>
      <RiInboxUnarchiveFill />
    </button>
  );
}

ActivateButton.propTypes = {
  id: PropTypes.string.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ActivateButton;
