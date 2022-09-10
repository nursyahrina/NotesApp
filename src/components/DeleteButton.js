import React from 'react';
import { PropTypes } from 'prop-types';
import { RiDeleteBin5Fill } from 'react-icons/ri';

function DeleteButton({ id, onDelete }) {
  return (
    <button type="button" className="button-action bg-danger-hover animate-scale" onClick={() => onDelete(id)}>
      <RiDeleteBin5Fill size={40} className="p-1 text-white drop-shadow-lg" />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
