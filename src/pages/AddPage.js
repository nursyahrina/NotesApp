/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { addNote } from '../utils/local-data';
import NoteInput from '../components/NoteInput';

function AddPage({ onUpdate }) {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    const { title, body } = note;
    addNote({ title, body });
    onUpdate();
    navigate('/');
  }

  return (
    <section>
      <div className="section-container">
        <h2 className="section-title">Create New Note</h2>
        <NoteInput addNote={onAddNoteHandler} />
      </div>
    </section>
  );
}

AddPage.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

export default AddPage;
