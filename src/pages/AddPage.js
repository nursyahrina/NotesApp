/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import LocaleContext from '../contexts/LocaleContext';

function AddPage() {
  const navigate = useNavigate();
  const { locale } = React.useContext(LocaleContext);

  async function onAddNoteHandler(note) {
    const { title, body } = note;
    await addNote({ title, body });
    navigate('/');
  }

  return (
    <section>
      <div className="section-container">
        <h2 className="section-title">{locale === 'en' ? 'Create New Note' : 'Buat Catatan Baru'}</h2>
        <NoteInput addNote={onAddNoteHandler} />
      </div>
    </section>
  );
}

export default AddPage;
