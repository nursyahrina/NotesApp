/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { PropTypes } from 'prop-types';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      chars: 50,
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onInputHandler = this.onInputHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler = (event) => {
    if (event.target.value.length <= 50) {
      this.setState(() => ({
        title: event.target.value,
        chars: 50 - event.target.value.length,
      }));
    } else {
      event.target.value = this.state.title;
    }
  };

  onInputHandler = (event) => {
    this.setState(() => ({
      body: event.target.innerHTML,
    }));
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  };

  render() {
    return (
      <form className="section-container pt-0 flex flex-col" onSubmit={this.onSubmitEventHandler}>
        <span className="self-end py-2 text-slate-50" id="note-title-chars">
          Remaining chars:
          {' '}
          {this.state.chars}
        </span>
        <input className="mb-2 py-2 px-6 border border-indigo-800 rounded-lg drop-shadow-sm" type="text" placeholder="Note Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        {(this.state.title).length === 50 && (<span className="self-end mb-4 font-bold text-amber-300">The max length of title has been met, can&apos;t exceed this limit!</span>)}
        <div
          className="mb-3 py-2 px-6 min-h-[100px] bg-white border border-indigo-800 rounded-lg drop-shadow-sm"
          data-placeholder="Sebenarnya saya adalah ...."
          contentEditable
          onInput={this.onInputHandler}
        />
        <button className="mb-2 px-3 py-2 rounded-lg drop-shadow-sm bg-accent-hover font-bold text-slate-900" type="submit">Create</button>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
