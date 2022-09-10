/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  Routes, Route, useLocation, useSearchParams, Link,
} from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { RiArchiveFill } from 'react-icons/ri';
import { getAllNotes, searchNotes } from './utils/local-data';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import SearchBar from './components/SearchBar';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

function NoteAppWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword');
  const location = useLocation();

  function changeSearchParams(newKeyword) {
    setSearchParams({ keyword: newKeyword });
  }

  return (
    <NoteApp
      activeKeyword={keyword}
      path={location.pathname}
      onSearch={changeSearchParams}
    />
  );
}

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: props.activeKeyword ? searchNotes(props.activeKeyword) : getAllNotes(),
      keyword: props.activeKeyword || '',
    };

    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.onUpdateHandler = this.onUpdateHandler.bind(this);
  }

  onSearchHandler(keyword) {
    const { onSearch } = this.props;
    this.setState(() => ({
      notes: searchNotes(keyword),
      keyword,
    }));

    onSearch(keyword);
  }

  onUpdateHandler() {
    this.setState(() => ({
      notes: getAllNotes(),
    }));
  }

  render() {
    const { notes, keyword } = this.state;
    const { path } = this.props;

    return (
      <div className="note-app">
        <header className="flex flex-wrap gap-4 justify-between px-5 py-5">
          <Link to="/" className="flex justify-start">
            <img className="flex-none w-12 h-12 rounded-lg animate-scale" src="/images/logo.png" alt="NoteApp Logo" />
            <h1 className="hidden md:block flex-initial px-3 text-4xl text text-sky-100 hover:drop-shadow-2xl">
              Rubie&apos;s NotesApp
            </h1>
          </Link>
          <div className="flex justify-between content-center items-center">
            <Link to="/archives" className="mr-4 pb-2 animate-scale drop-shadow-sm"><RiArchiveFill size={36} className="text-white hover:text-slate-200" /></Link>
            { (path === '/'
              || path === '/archives'
              || path.substr(0, 10) === '/?keyword='
              || path.substr(9, 10) === '/?keyword=')
              && (<SearchBar keyword={keyword} keywordChange={this.onSearchHandler} />)}
          </div>
        </header>

        <main>
          <Routes>
            <Route
              path="/"
              element={(
                <HomePage
                  keyword={keyword}
                  notes={notes.filter((note) => !note.archived)}
                />
              )}
            />
            <Route
              path="/archives"
              element={(
                <ArchivePage
                  keyword={keyword}
                  notes={notes.filter((note) => note.archived)}
                />
              )}
            />
            <Route path="/notes/new" element={<AddPage onUpdate={this.onUpdateHandler} />} />
            <Route path="/notes/:id" element={<DetailPage onUpdate={this.onUpdateHandler} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
}

NoteApp.propTypes = {
  activeKeyword: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

NoteApp.defaultProps = {
  activeKeyword: '',
};

export default NoteAppWrapper;
