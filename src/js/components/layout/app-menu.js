import React from 'react';
import Style from './app-menu.css';
import {Link} from 'react-router';

const options = [

  { type: 'divider', txt : 'Central Store'},
  { type: 'menu-item', txt : 'Products', to:'/products', icon:'local_offer'},
  { type: 'menu-item', txt : 'Inbox', to:'/shipments', icon:'move_to_inbox'},
/*
  { type: 'divider', txt : 'International Office'},
  { type: 'menu-item', txt : 'Monitor', to:'monitor', icon: 'send'},
  { type: 'menu-item', txt : 'Outbox', to:'outbox', icon: 'inbox'},
  { type: 'menu-item', txt : 'Issues', to:'issues', icon: 'warning'},
*/
];

const MenuButton = (props) => {
  return (
    <div id="menu-button" onClick={props.toggleDrawer}>
      <i className="material-icons md-32">menu</i>
    </div>
  )
}

const MenuTitle = (props) => {
  return (
    <div id="menu-title">
      <h1>{props.title}</h1>
      <h5>{props.subtitle}</h5>
    </div>
  )
}

const MenuUser = (props) => {
  return (
    <div id="menu-user">
      <div id="avatar"><i className="material-icons md-36">face</i></div>
      <h5><strong>{props.name}</strong></h5>
      <h6 className="mui--text-light-secondary">{props.email}</h6>
    </div>
  )
}

const MenuDivider = (props) => {
  return (
    <div className="menu-divider">
      <div className="mui-divider"/>
      <h5>{props.txt}</h5>
    </div>
  )
}

const MenuItem = (props) => {

  let closeDrawer = function() {
    props.toggleDrawer(false);
  }

  return (
    <Link to={props.to} className="mui--text-light">
      <div className="menu-item" activeClassName="selected" onClick={closeDrawer}>
        <i className="material-icons">{props.icon}</i>
        {props.txt}
      </div>
    </Link>
  )
}

const menuItemTypes = {
  'divider'   : (item) => { return (<MenuDivider {...item}></MenuDivider>) },
  'menu-item' : (item, props) => { return (<MenuItem {...item} {...props}></MenuItem>) }
}

class Menu extends React.Component {


  componentWillMount() {
    this.items = options.map( item => {
      return menuItemTypes[item.type](item, this.props);
    });
  }

  toggleDrawer() {
    this.props.toggleDrawer();
  }

  render() {

    return (
      <aside id="menu">

        <MenuButton toggleDrawer={this.toggleDrawer.bind(this)}/>

        <MenuTitle title="SampleBook" subtitle="Shipments"/>

        <MenuUser name="John Smith" email="johnsmithdoe@gmail.com"/>

        <nav>
          {this.items}
          <div className="mui-divider"></div>
        </nav>

      </aside>
    )
  }
}

export default Menu;
