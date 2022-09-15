/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { PropTypes } from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';

function NoteInput({ addNote }) {
  const { locale } = React.useContext(LocaleContext);
  const [title, setTitle] = React.useState('');
  const [chars, setChars] = React.useState(50);
  const [body, setBody] = React.useState('');

  const onTitleChangeHandler = (event) => {
    if (event.target.value.length <= 50) {
      setTitle(event.target.value);
      setChars(50 - event.target.value.length);
    }
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({ title, body });
  };

  return (
    <form className="section-container pt-0 flex flex-col" onSubmit={onSubmitEventHandler}>
      <span className="self-end py-2" id="note-title-chars">
        {locale === 'en' ? 'Remaining Chars:' : 'Sisa Karakter:'}
        {' '}
        {chars}
      </span>
      <input className="mb-2" type="text" placeholder={locale === 'en' ? 'Note title' : 'Judul catatan'} value={title} onChange={onTitleChangeHandler} />
      {title.length === 50 && (
      <span className="self-end mb-4 font-bold">
        {locale === 'en' ? "Max length of title has been met, can't exceed this limit!" : 'Panjang judul sudah mencapai maksimum, tidak dapat melebihi batas!'}
      </span>
      )}
      <div
        className="input-text min-h-[100px]"
        data-placeholder={locale === 'en' ? 'Type your note here...' : 'Ketikkan catatanmu disini...'}
        contentEditable
        onInput={onBodyChangeHandler}
      />
      <button className="input-button" type="submit">{locale === 'en' ? 'Create' : 'Simpan'}</button>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
