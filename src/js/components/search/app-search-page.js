import React from 'react';
import styles from './app-search.css';

class Search extends React.Component {

  render() {
    return (
      <div className="searchbox busy">
        <div className="textfield mui-textfield">
          <input  type="text" autoFocus></input>
        </div>
        <span><i className="material-icons">close</i></span>
      </div>
    )
  }
}

export default Search;
