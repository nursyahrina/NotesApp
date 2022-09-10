import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  getNote, deleteNote, archiveNote, unarchiveNote,
} from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';
import ArchiveButton from '../components/ArchiveButton';
import UnarchiveButton from '../components/UnarchiveButton';
import DeleteButton from '../components/DeleteButton';

function DetailPageWrapper({ onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailPage id={id} navigate={navigate} onUpdate={onUpdate} />;
}

DetailPageWrapper.propTypes = {
  onUpdate: PropTypes.func.isRequired,
};

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onArchiveHandler(id) {
    const { navigate, onUpdate } = this.props;
    archiveNote(id);
    onUpdate();
    navigate('/');
  }

  onUnarchiveHandler(id) {
    const { navigate, onUpdate } = this.props;
    unarchiveNote(id);
    onUpdate();
    navigate('/');
  }

  onDeleteHandler(id) {
    const { navigate, onUpdate } = this.props;
    deleteNote(id);
    onUpdate();
    navigate('/');
  }

  render() {
    const { note } = this.state;
    if (note === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <>
        <section className="section-container mt-12 bg-container rounded-3xl sm:w-3/4">
          <NoteDetail {...note} />
        </section>
        <aside className="fixed bottom-16 right-8 grid grid-cols-2 gap-4">
          {note.archived && <UnarchiveButton id={note.id} onUnarchive={this.onUnarchiveHandler} /> }
          {!note.archived && <ArchiveButton id={note.id} onArchive={this.onArchiveHandler} /> }
          <DeleteButton id={note.id} onDelete={this.onDeleteHandler} />
        </aside>
      </>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
