import React from 'react';

export default ( InnerComponent, store, stateCallback) => class extends React.Component {

  constructor(props) {
    super();
    this.state = stateCallback(props);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    store.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    store.removeChangeListener(this._onChange);
  }

  _onChange(){
    this.setState(stateCallback(this.props));
  }

  render() {
    return <InnerComponent {...this.state} {...this.props} />
  }
}
