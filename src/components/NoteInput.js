import React from "react";
 
class NoteInput extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      title: '',
      chars: 50,
      body: '',
    }
 
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }
 
  onTitleChangeEventHandler(event) {
    if (event.target.value.length <= 50) {
      this.setState((prevState) => ({
        ...prevState,
        title: event.target.value,
        chars: 50 - event.target.value.length,
      }));
    } else {
      event.target.value = this.state.title;
    }
  }
  
  onBodyChangeEventHandler(event) {
    this.setState((prevState) => ({
      ...prevState,
      body: event.target.value,
    }));
  }
  
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className='note-input flex flex-col' onSubmit={this.onSubmitEventHandler} >
        <span className="text-sm self-end py-2" id="note-title-chars">Remaining chars: {this.state.chars}</span>
        <input className="mb-2 py-2 px-6 border border-indigo-800 rounded-lg drop-shadow-sm" type="text" placeholder="Note Title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea className="mb-3 py-2 px-6 border border-indigo-800 rounded-lg drop-shadow-sm"  placeholder="Type your note here..." rows="4" value={this.state.body} onChange={this.onBodyChangeEventHandler} ></textarea>
        <button className="mb-2 px-3 py-2 rounded-lg drop-shadow-sm bg-indigo-700 text-indigo-100" type="submit">Create</button>
      </form>
    )
  }
}
 
export default NoteInput;