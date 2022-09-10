import React from 'react';
import { RiAddFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function AddButton() {
  return (
    <button type="button" className="button-action bg-accent-hover animate-scale">
      <Link to="/notes/new">
        <RiAddFill size={40} className="text-white drop-shadow-lg" />
      </Link>
    </button>
  );
}

export default AddButton;
