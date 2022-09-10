import React from 'react';
import { PropTypes } from 'prop-types';
import { RiDeleteBin5Fill } from 'react-icons/ri';

function DeleteButton({ id, onDelete }) {
  return (
    <button type="button" className="note-item__delete rounded-br-lg bg-rose-700 py-3 border border-white" onClick={() => onDelete(id)}>
      <RiDeleteBin5Fill />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
