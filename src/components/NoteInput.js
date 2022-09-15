/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { PropTypes } from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';

function NoteInput({ addNote }) {
  const { locale } = React.useContext(LocaleContext);
  const [title, setTitle] = React.useState('');
  const [chars, setChars] = React.useState(50);
  const [body, onBodyChangeHandler] = useInput('');

  const onTitleChangeHandler = (event) => {
    if (event.target.value.length <= 50) {
      setTitle(event.target.value);
      setChars(50 - event.target.value.length);
    }
  };
  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    addNote({ title, body });
  };

  return (
    <form className="section-container pt-0 flex flex-col" onSubmit={onSubmitEventHandler}>
      <span className="self-end py-2 text-slate-50" id="note-title-chars">
        {locale === 'en' ? 'Remaining Chars:' : 'Sisa Karakter:'}
        {' '}
        {chars}
      </span>
      <input className="input-text mb-2" type="text" placeholder="Note Title" value={title} onChange={onTitleChangeHandler} />
      {title.length === 50 && (
      <span className="self-end mb-4 font-bold text-amber-300">
        {locale === 'en' ? "Max length of title has been met, can't exceed this limit!" : 'Panjang judul sudah mencapai maksimum, tidak dapat melebihi batas!'}
      </span>
      )}
      <div
        className="input-text min-h-[100px] bg-white"
        contentEditable
        onInput={onBodyChangeHandler}
      />
      <button className="input-button" type="submit">{locale === 'en' ? 'Create' : 'Simpan'}</button>
    </form>
  );
}

// class NoteInput extends React.Component {
//   // eslint-disable-next-line react/static-property-placement
//   static contextType = React.useContext(LocaleContext);

//   constructor(props) {
//     super(props);

//     this.state = {
//       title: '',
//       chars: 50,
//       body: '',
//     };

//     this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
//     this.onInputHandler = this.onInputHandler.bind(this);
//     this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
//   }

//   onTitleChangeEventHandler = (event) => {
//     if (event.target.value.length <= 50) {
//       this.setState(() => ({
//         title: event.target.value,
//         chars: 50 - event.target.value.length,
//       }));
//     } else {
//       event.target.value = this.state.title;
//     }
//   };

//   onInputHandler = (event) => {
//     this.setState(() => ({
//       body: event.target.innerHTML,
//     }));
//   };

//   onSubmitEventHandler = (event) => {
//     event.preventDefault();
//     this.props.addNote(this.state);
//   };

//   render() {
//     return (
//       <form className="section-container pt-0 flex flex-col" onSubmit={this.onSubmitEventHandler}>
//         <span className="self-end py-2 text-slate-50" id="note-title-chars">
//           {this.contextType.locale === 'en' ? 'Remaining Chars:' : 'Sisa Karakter:'}
//           {' '}
//           {this.state.chars}
//         </span>
//         <input className="input-text mb-2" type="text" placeholder="Note Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
//         {(this.state.title).length === 50 && (
//         <span className="self-end mb-4 font-bold text-amber-300">
//           {this.contextType.locale === 'en' ? "Max length of title has been met, can't exceed this limit!" : 'Panjang judul sudah mencapai maksimum, tidak dapat melebihi batas!'}
//         </span>
//         )}
//         <div
//           className="input-text min-h-[100px] bg-white"
//           contentEditable
//           onInput={this.onInputHandler}
//         />
//         <button className="input-button" type="submit">{this.contextType.locale === 'en' ? 'Create' : 'Simpan'}</button>
//       </form>
//     );
//   }
// }

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
