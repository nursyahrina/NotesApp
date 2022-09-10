/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import { getNotes } from '../utils/data';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNotes(),
      keyword: '',
    };

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onArchiveHandler = (id) => {
    const { notes } = this.state;
    const noteIdx = notes.findIndex((note) => note.id === id);
    if (notes[noteIdx].archived) {
      notes[noteIdx].archived = false;
    } else {
      notes[noteIdx].archived = true;
    }
    this.setState({ notes, keyword: this.state.keyword });
  };

  onDeleteHandler = (id) => {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes, keyword: this.state.keyword });
  };

  onAddNoteHandler = ({ title, body }) => {
    this.setState((prevState) => ({
      ...prevState,
      notes: [
        ...prevState.notes,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: Date(),
        },
      ],
    }));
  };

  onKeywordChangeEventHandler = (event) => {
    this.setState((prevState) => ({
      ...prevState,
      keyword: event.target.value,
    }));
  };

  render() {
    return (
      <div className="contact-app bg-slate-50">
        <div className="contact-app__header sticky top-0 z-10 flex flex-wrap gap-4 justify-between px-5 py-5 bg-indigo-700 drop-shadow-xl">
          <div className="flex justify-start">
            <img className="flex-none w-12 h-12 rounded-lg" src="/images/logo.png" alt="NoteApp Logo" />
            <h1 className="flex-initial px-3 text-4xl text text-sky-100">Rubie`&apos;`s NotesApp</h1>
          </div>
          <input className="mb-2 py-2 px-6 border border-indigo-800 rounded-lg drop-shadow-sm" type="text" placeholder="Search Note Here..." value={this.state.keyword} onChange={this.onKeywordChangeEventHandler.bind(this)} />
        </div>
        <div className="contact-app__container">
          <div className="contact-app__form container max-w-2xl my-6 py-8">
            <h2 className="text-3xl font-bold ml-6 mb-4">Create New Note</h2>
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <div className="contact-app__active-notes container max-w-6xl mb-8 py-8 border-t-2 border-indigo-700">
            <h2 className="text-3xl font-bold ml-6 mb-4">Active Notes</h2>
            <NoteList
              notes={this.state.notes.filter((note) => !note.archived)}
              onArchive={this.onArchiveHandler}
              onDelete={this.onDeleteHandler}
              query={this.state.keyword}
            />
          </div>
          <div className="contact-app__archived-notes container max-w-6xl mb-8 py-8 border-y-2 border-indigo-700">
            <h2 className="text-3xl font-bold ml-6 mb-4">Archived Notes</h2>
            <NoteList
              notes={this.state.notes.filter((note) => note.archived)}
              onArchive={this.onArchiveHandler}
              onDelete={this.onDeleteHandler}
              query={this.state.keyword}
            />
          </div>
        </div>
        <div className="contact-app__footer px-5 py-5 bg-slate-900 text-indigo-200 drop-shadow-xl text-center">
          <p className="text-lg">
            &copy; 2022
            {' '}
            <strong>Rubie`&apos;`s Studio</strong>
            {' '}
            by Nursyahrina &hearts;
          </p>
        </div>
      </div>
    );
  }
}

export default NoteApp;
