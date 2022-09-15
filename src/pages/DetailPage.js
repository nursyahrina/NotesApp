/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/network-data';
import NoteDetail from '../components/NoteDetail';
import ArchiveButton from '../components/ArchiveButton';
import UnarchiveButton from '../components/UnarchiveButton';
import DeleteButton from '../components/DeleteButton';
import LocaleContext from '../contexts/LocaleContext';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
    });

    return () => {
      setNote(null);
    };
  }, []);

  async function onArchiveHandler(noteId) {
    await archiveNote(noteId);
    navigate('/');
  }

  async function onUnarchiveHandler(noteId) {
    await unarchiveNote(noteId);
    navigate('/');
  }

  async function onDeleteHandler(noteId) {
    await deleteNote(noteId);
    navigate('/');
  }

  if (note === null) {
    return (
      <section>
        <div className="section-container flex flex-col h-screen">
          <h2 className="section-title">{locale === 'en' ? 'Detail Page' : 'Halaman Detail'}</h2>
          <FaReact size={140} className="self-center animate-spin" />
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-container mt-12 bg-container rounded-3xl sm:w-3/4">
        <NoteDetail {...note} />
      </section>
      <aside className="fixed bottom-16 right-8 grid grid-cols-2 gap-4">
        {note.archived && <UnarchiveButton id={note.id} onUnarchive={onUnarchiveHandler} /> }
        {!note.archived && <ArchiveButton id={note.id} onArchive={onArchiveHandler} /> }
        <DeleteButton id={note.id} onDelete={onDeleteHandler} />
      </aside>
    </>
  );
}

export default DetailPage;
