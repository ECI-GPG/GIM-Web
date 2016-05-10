import React from 'react';
import style from './tabpanel.css';

const Tab = (props) => {

  var activeClass = props.active ? "tab mui--is-active" : "tab"

  let selectTab = () => {
    props.selectTab(props.id);
  }
  return (
    <li className={activeClass} onClick={selectTab}><a><i className={`fa fa-${props.icon} fab-lg`}></i>&nbsp;&nbsp;&nbsp;{props.label}</a></li>
  )
}

class TabPanel extends React.Component {

  constructor() {
    super();
    this.state = { selected : ''}
  }

  selectTab(tabID) {
    this.setState({ 'selected':tabID });
  }

  render() {

    var tabs = React.Children.map(this.props.children, (child) => {
      var active = this.state.selected === child.props.id;
      return (<Tab icon={child.props.icon} label={child.props.name} active={active} id={child.props.id} selectTab={this.selectTab.bind(this)}/>);
    });

    let content = [];
    React.Children.forEach(this.props.children, (child) => {
      if (child.props.id === this.state.selected)
        content.push( (<div id={child.props.id} className="tabcontent">{child}</div>) );
    })

    return (
      <div className="tabpanel">
        <ul className="tabbar mui-tabs__bar">{tabs}</ul>
        <div className="tabcontents">{content}</div>
      </div>
    )
  }
}

export default TabPanel;
