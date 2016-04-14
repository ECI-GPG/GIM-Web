import React from 'react';
import style from './app-title.css';

class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <div className="icon" onClick={this.props.toggleMenu}>
            <i className="fa fa-bars fa-lg"></i>
        </div>
        <div>
          <h1>{this.props.text}</h1>
          <h4>{this.props.subtext}</h4>
        </div>
      </div>
    )
  }
}

Title.propTypes = {
  text: React.PropTypes.string,
  subtext: React.PropTypes.string,
  toggleMenu: React.PropTypes.func.isRequired
}

Title.defaultProps = {
  text: '',
  subtext: ''
}

export default Title;
