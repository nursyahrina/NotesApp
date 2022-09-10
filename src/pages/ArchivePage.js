import React from 'react';
import { PropTypes } from 'prop-types';
import NoteList from '../components/NoteList';

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: props.keyword,
    };
  }

  render() {
    const { notes } = this.props;
    const { keyword } = this.state;
    return (
      <section>
        <div className="section-container">
          <h2 className="section-title">Archived Notes</h2>
          <NoteList
            notes={notes}
            query={keyword}
          />
        </div>
      </section>
    );
  }
}

ArchivePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    archived: PropTypes.bool,
    createdAt: PropTypes.string,
  })).isRequired,
  keyword: PropTypes.string,
};

ArchivePage.defaultProps = {
  keyword: '',
};

export default ArchivePage;
