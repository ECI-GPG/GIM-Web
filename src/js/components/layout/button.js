import React from 'react';
import {Link} from 'react-router';

const FAB = (props) => {
  return (
    <Link to={props.to}>
      <button className="mui-btn mui-btn--accent mui-btn--fab  fab">
        <i className="material-icons">{props.icon}</i>
      </button>
    </Link>
  );
}

export default FAB;
