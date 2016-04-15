import React from 'react';
import styles from './app-toolbar.css';
import User from '../user/app-user';

class Toolbar extends React.Component {

  render() {
    return (
      <div id="toolbar">
        <User />
      </div>
    );
  }

}

export default Toolbar;
