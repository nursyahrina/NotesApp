import React from "react";
 
class NoteSearch extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      keyword: ''
    }
 
    this.onKeywordChangeEventHandler = this.onKeywordChangeEventHandler.bind(this);
  }
 
  onKeywordChangeEventHandler(event) {
    this.setState({
      keyword: event.target.value
    });
    this.props.searchNote(this.state);
  }

  render() {
    return (
      <input className="mb-2 py-2 px-6 border border-indigo-800 rounded-lg drop-shadow-sm" type="text" placeholder="Search Note Here..." value={this.state.keyword} onChange={this.onKeywordChangeEventHandler} />
    )
  }
}
 
export default NoteSearch;