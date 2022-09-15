import React from 'react';
import { FaReact } from 'react-icons/fa';
// import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getArchivedNotes } from '../utils/network-data';
import SearchBar from '../components/SearchBar';
import useContainer from '../hooks/useContainer';
import LocaleContext from '../contexts/LocaleContext';

function ArchivePage() {
  const [loading, keyword, notes, onSearchHandler] = useContainer(getArchivedNotes);
  const { locale } = React.useContext(LocaleContext);

  if (loading) {
    return (
      <section>
        <div className="section-container flex flex-col h-screen">
          <h2 className="section-title">{locale === 'en' ? 'Archived Notes' : 'Catatan Terarsip'}</h2>
          <FaReact size={140} className="self-center text-white animate-spin" />
        </div>
      </section>
    );
  }
  return (
    <section>
      <div className="section-container">
        <div className="flex flex-wrap justify-between">
          <h2 className="section-title">{locale === 'en' ? 'Archived Notes' : 'Catatan Terarsip'}</h2>
          <SearchBar keyword={keyword} keywordChange={onSearchHandler} />
        </div>
        <NoteList
          notes={notes}
        />
      </div>
    </section>
  );
}

export default ArchivePage;
