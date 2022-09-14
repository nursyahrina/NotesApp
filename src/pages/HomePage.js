import React from 'react';
import { PropTypes } from 'prop-types';
import NoteList from '../components/NoteList';
import AddButton from '../components/AddButton';
import { getActiveNotes } from '../utils/network-data';

function HomePage({ keyword }) {
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data.filter((note) => note.title.toLowerCase().includes(
        keyword.toLowerCase(),
      )));
    });
  }, [keyword]);

  return (
    <>
      <section>
        <div className="section-container">
          <h2 className="section-title">Active Notes</h2>
          <NoteList
            notes={notes}
            // query={keyword}
          />
        </div>
      </section>
      <aside className="fixed bottom-16 right-8">
        <AddButton />
      </aside>
    </>
  );
}

// class HomePage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       keyword: props.keyword,
//     };
//   }

//   render() {
//     const { notes } = this.props;
//     const { keyword } = this.state;
//     return (
//       <>
//         <section>
//           <div className="section-container">
//             <h2 className="section-title">Active Notes</h2>
//             <NoteList
//               notes={notes}
//               query={keyword}
//             />
//           </div>
//         </section>
//         <aside className="fixed bottom-16 right-8">
//           <AddButton />
//         </aside>
//       </>
//     );
//   }
// }

HomePage.propTypes = {
  // notes: PropTypes.arrayOf(PropTypes.exact({
  //   id: PropTypes.string,
  //   title: PropTypes.string,
  //   body: PropTypes.string,
  //   archived: PropTypes.bool,
  //   createdAt: PropTypes.string,
  // })).isRequired,
  keyword: PropTypes.string.isRequired,
};

// HomePage.defaultProps = {
//   keyword: '',
// };

export default HomePage;
