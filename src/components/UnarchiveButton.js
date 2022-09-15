import React from 'react';
import { PropTypes } from 'prop-types';
import { RiInboxUnarchiveFill } from 'react-icons/ri';

function ActivateButton({ id, onUnarchive }) {
  return (
    <button type="button" className="button-action bg-accent-hover animate-scale" onClick={() => onUnarchive(id)}>
      <RiInboxUnarchiveFill size={40} className="p-1 drop-shadow-lg" />
    </button>
  );
}

ActivateButton.propTypes = {
  id: PropTypes.string.isRequired,
  onUnarchive: PropTypes.func.isRequired,
};

export default ActivateButton;
